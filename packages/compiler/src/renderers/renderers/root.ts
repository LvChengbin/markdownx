/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/root.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';

export default function root(): Renderer {

    return {
        imports : [
            [ 'Root', '@@component/Root' ]
        ],
        exec( content: string ): string {
            return `
                <Root>${content}</Root>
            `;
        }
    };
}
