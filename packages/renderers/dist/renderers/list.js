"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/list.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function list() {
    return {
        imports: [
            ['List', '@markdownx/renderers/dist/components/List']
        ],
        exec(text, ordered) {
            return `
                <List ordered={${ordered ? 'true' : 'false'}}>
                    ${text}
                </List>
            `;
        }
    };
}
exports.default = list;
