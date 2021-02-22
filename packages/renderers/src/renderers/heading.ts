/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/heading.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';
import generateAnchor from '../generate-anchor';

export default function heading(): Renderer {
    return {
        imports : [
            [ 'Heading', '@@component/Heading' ]
        ],
        exec( text: string, level: string ): string {

            const anchor = generateAnchor( text );

            return `
                <Heading level={\`${level}\`} text={<>${text}</>} anchor="${anchor}" />
            `;
        }
    };
}
