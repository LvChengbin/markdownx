"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/paragraph.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function paragraph() {
    return {
        imports: [
            ['Paragraph', '@markdownx/renderers/dist/components/Paragraph']
        ],
        exec(text) {
            return `
                <Paragraph>
                    ${text}
                </Paragraph>
            `;
        }
    };
}
exports.default = paragraph;
