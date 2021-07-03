/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: renderers/blockquote.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';

export default function blockquote(): Renderer {
    return {
        imports : [
            [ 'Blockquote', '@@component/Blockquote' ]
        ],
        exec( quote: string ): string {
            return `
                <Blockquote>
                    ${quote}
                </Blockquote>
            `;
        }
    };
}
