"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/toc.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const generate_anchor_1 = __importDefault(require("../generate-anchor"));
function toc() {
    return {
        imports: [
            ['Toc', '@markdownx/renderers/dist/components/Toc']
        ],
        exec(toc) {
            const jsx = [];
            toc.map(x => {
                jsx.push(`{
                    text : <>${x.text}</>,
                    level : ${x.level},
                    anchor : '${generate_anchor_1.default(x.text)}'
                }`);
            });
            return `
                <Toc toc={[${jsx.join(',')}]} />
            `;
        }
    };
}
exports.default = toc;
