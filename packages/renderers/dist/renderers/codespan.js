"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/codespan.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_template_literals_1 = __importDefault(require("../utils/escape-template-literals"));
function codespan() {
    return {
        imports: [
            ['Codespan', '@markdownx/renderers/dist/components/Codespan']
        ],
        exec(code) {
            return `
                <Codespan code={\`${escape_template_literals_1.default(code)}\`} />
            `;
        }
    };
}
exports.default = codespan;
