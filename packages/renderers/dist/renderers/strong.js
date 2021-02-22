"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/strong.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_template_literals_1 = __importDefault(require("../utils/escape-template-literals"));
function strong() {
    return {
        imports: [
            ['Strong', '@markdownx/renderers/dist/components/Strong']
        ],
        exec(text) {
            return `
                <Strong raw={\`${escape_template_literals_1.default(text)}\`} content={<>${text}</>} />
            `;
        }
    };
}
exports.default = strong;
