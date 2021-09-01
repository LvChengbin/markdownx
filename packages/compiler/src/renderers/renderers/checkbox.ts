/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: renderers/checkbox.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 09/01/2021
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';

export default function checkbox(): Renderer {
    return {
        imports : [
            [ 'Checkbox', '@@component/Checkbox' ]
        ],
        exec( checked: boolean ): string {
            return `
                <Checkbox>
                </Checkbox>
            `;
        }
    };
}
