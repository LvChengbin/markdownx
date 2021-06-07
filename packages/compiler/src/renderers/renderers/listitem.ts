/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/listitem.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';

export default function listitem(): Renderer {
    return {
        imports : [
            [ 'ListItem', '@@component/ListItem' ]
        ],
        exec( text: string ): string {
            return `
                <ListItem>
                    ${text}
                </ListItem>
            `;
        }
    };
}
