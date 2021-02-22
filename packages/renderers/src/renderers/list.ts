/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/list.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';

export default function list(): Renderer {
    return {
        imports : [
            [ 'List', '@@component/List' ]
        ],
        exec( text: string, ordered: boolean ): string {
            return `
                <List ordered={${ordered ? 'true' : 'false'}}>
                    ${text}
                </List>
            `;
        }
    };
}
