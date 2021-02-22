"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/code.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const escape_template_literals_1 = __importDefault(require("../utils/escape-template-literals"));
function code() {
    return {
        imports: [
            ['Code', '@markdownx/renderers/dist/components/Code']
        ],
        exec(text, lang = '') {
            const matches = lang.match(/\{{3}(.*?)\}{3}/);
            const invocation = matches?.[1] ?? '';
            lang = lang.replace(/\s+\{{3}.+$/, '');
            return invocation ? `
                <Code code={\`${escape_template_literals_1.default(text)}\`} lang="${lang}" component={${invocation}} />
            ` : `
                <Code code={\`${escape_template_literals_1.default(text)}\`} lang="${lang}" />
            `;
        }
    };
}
exports.default = code;
