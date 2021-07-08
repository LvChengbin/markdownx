/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: renderers/image.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

import querystring from 'querystring';
import { Renderer } from '../../interfaces';
import escapeTemplateLiterals from '../utils/escape-template-literals';
import jointAttrs from '../utils/joint-attrs';

export default function image(): Renderer {
    return {
        imports : [
            [ 'Image', '@@component/Image' ]
        ],
        exec( href: string, title: string, text: string ): string {
            const [ path, query ] = href.split( '?' );
            const src: string = path.startsWith( 'MDX_IMAGE_MODULE_' ) ? path : `\`${escapeTemplateLiterals( href )}\``;

            const attrs = jointAttrs( querystring.parse( query ) as Record<string, string> );

            return `
                <Image className="Markdownx-img"
                    src={${src}}
                    title={\`${escapeTemplateLiterals( text )}\`}
                    alt={\`${escapeTemplateLiterals( text )}\`}
                    ${attrs}
                />
            `;
        }
    };
}
