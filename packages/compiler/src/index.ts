/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/11/2020
 * Description:
 ******************************************************************/

import qs from 'query-string';
import marked from 'marked';
import renderers from './renderers';
import { frags } from './frags';
import increment from './index-counter';
import parser from './parser';
import templates, { ReactComponentTemplateOptions } from './templates';
import generateImports from './generate-imports';
import { Renderer } from './interfaces';

export * from './interfaces';
export * from './frags';

export interface CompileOptions {
    path: string;
    query: { [key: string]: string };
    type?: string;
    template?: ( options: ReactComponentTemplateOptions ) => string;
    prepend?: string;
    renderers?: Record<string, Renderer>;
};

const rendererMethods = [
    'code', 'blockquote', 'html', 'heading', 'hr', 'list', 'listitem',
    'checkbox', 'paragraph', 'table', 'tablerow', 'tablecell',
    'strong', 'em', 'codespan', 'br', 'del', 'link', 'image', 'text'
];

const markedDefaults = { ...marked.defaults };

export default ( options: CompileOptions ): ( source: string ) => string => {

    const mixedRenderers = { ...renderers, ...( options.renderers ?? {} ) };
    const globalImports: string[] = [];
    const query = options.query;
    const importPool: Set<[string, string?]> = new Set();
    const toc: { text: string; level: number }[] = [];

    // @ts-expect-error marked.defaults is readonly but I really need to reset the content here
    marked.defaults = { ...markedDefaults };
    marked.setOptions( {} );

    marked.use( {
        walkTokens( token ) {
            if( token.type === 'code' ) {
                const id = increment();
                const moduleId = `MDX_CODE_MODULE_${id}`;
                const parsed = parser.code.token( token, { moduleId } );
                const { imports, token : parsedToken } = parsed;

                if( parsedToken.invocation ) {
                    imports.forEach( x => {
                        const q = { ...query, pickType : token.type, pickId : id };
                        const request = `${options.path}?${qs.stringify( q )}`;
                        globalImports.push( `import ${x} from "${request}";` );
                    } );

                    frags.set( id + '', {
                        ...options,
                        token : { ...token },
                        id, moduleId,
                        parsedToken,
                        content : parsedToken.text
                    } );

                    Object.assign( token, parsedToken );

                    token.lang += ` {{{${parsedToken.invocation}}}}`;
                }
            } else if( token.type === 'image' ) {
                const id = increment();
                const moduleId = `MDX_IMAGE_MODULE_${id}`;
                const { href } = token;
                const query = href.split( '?' )[ 1 ] ?? '';
                /**
                 * Skip the src if it is able to be treated as a valid URL.
                 */
                if( !href || href.startsWith( '/' ) || href.startsWith( '://' ) || /^https?:\/\//i.test( href ) ) return;
                globalImports.push( `import ${moduleId} from "${token.href}";` );
                token.href = `${moduleId}?${query}`;
            }
        },
        renderer : rendererMethods.reduce( ( acc, cur ) => {
            acc[ cur ] = ( ...args ): string | false => {
                if( cur === 'heading' ) {
                    toc.push( {
                        text : args[ 0 ] as string,
                        level : args[ 1 ] as number
                    } );
                }


                if( mixedRenderers[ cur ] ) {
                    const { imports, exec } = mixedRenderers[ cur ]( options );
                    imports.forEach( x => importPool.add( x ) );
                    return exec( ...args );
                }
                return false;
            };
            return acc;
        }, {} )
    } );

    return ( str: string ): string => {

        let output = marked( str.replace( /(?<=<[^>]+?\s+)((class)(=("|').*?\\4)?)/g, 'className' ).replace( /<!--[\s\S]*?-->/g, '' ) );

        if( mixedRenderers.container ) {
            const { imports, exec } = mixedRenderers.container();
            imports.forEach( x => importPool.add( x ) );
            output = exec( output );
        }

        if( mixedRenderers.toc ) {
            const { imports, exec } = mixedRenderers.toc();
            imports.forEach( x => importPool.add( x ) );
            output = ( exec( toc ) || '' ) + output;
        }

        if( mixedRenderers.root ) {
            const { imports, exec } = mixedRenderers.root();
            imports.forEach( x => importPool.add( x ) );
            output = exec( output );
        }

        return templates[ options.type ?? 'tsx' ]( {
            name : `MDX_COMPONENT_${increment()}`,
            content : output,
            imports : [ ...generateImports( importPool ), ...globalImports ]
        } );
    };
};
