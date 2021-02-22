"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/container.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function container() {
    return {
        imports: [
            ['Container', '@markdownx/renderers/dist/components/Container']
        ],
        exec(content) {
            return `
                <Container>${content}</Container>
            `;
        }
    };
}
exports.default = container;
