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

export default function image(): Renderer {
    return {
        imports : [
            [ 'Image', '@@component/Image' ]
        ],
        exec( href: string, title: string, text: string ): string {
            const [ path, query ] = href.split( '?' );
            const src: string = path.startsWith( 'MDX_IMAGE_MODULE_' ) ? path : `\`${escapeTemplateLiterals( href )}\``;

            const {
                width = 'auto',
                height = 'auto',
                align = 'left',
                floatLeft = 'false',
                floatRight = 'false',
                inline = 'true'
            } = querystring.parse( query );

            return `
                <Image className="Markdownx-img"
                    src={${src}}
                    title={\`${escapeTemplateLiterals( text )}\`}
                    alt={\`${escapeTemplateLiterals( text )}\`}
                    width="${width}"
                    height="${height}"
                    align="${align}"
                    floatLeft={${floatLeft}}
                    floatRight={${floatRight}}
                    inline={${inline}}
                />
            `;
        }
    };
}
