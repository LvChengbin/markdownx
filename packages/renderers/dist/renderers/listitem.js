"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/listitem.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function listitem() {
    return {
        imports: [
            ['ListItem', '@markdownx/renderers/dist/components/ListItem']
        ],
        exec(text) {
            return `
                <ListItem>
                    ${text}
                </ListItem>
            `;
        }
    };
}
exports.default = listitem;
