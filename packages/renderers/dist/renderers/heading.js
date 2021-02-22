"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/heading.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_anchor_1 = __importDefault(require("../generate-anchor"));
function heading() {
    return {
        imports: [
            ['Heading', '@markdownx/renderers/dist/components/Heading']
        ],
        exec(text, level) {
            const anchor = generate_anchor_1.default(text);
            return `
                <Heading level={\`${level}\`} text={<>${text}</>} anchor="${anchor}" />
            `;
        }
    };
}
exports.default = heading;
