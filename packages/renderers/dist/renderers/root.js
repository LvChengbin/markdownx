"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/root.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function root() {
    return {
        imports: [
            ['Root', '@markdownx/renderers/dist/components/Root']
        ],
        exec(content) {
            return `
                <Root>${content}</Root>
            `;
        }
    };
}
exports.default = root;
