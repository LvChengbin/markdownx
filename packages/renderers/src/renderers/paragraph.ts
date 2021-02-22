/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/paragraph.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';

export default function paragraph(): Renderer {
    return {
        imports : [
            [ 'Paragraph', '@@component/Paragraph' ]
        ],
        exec( text: string ): string {
            return `
                <Paragraph>
                    ${text}
                </Paragraph>
            `;
        }
    };
}
