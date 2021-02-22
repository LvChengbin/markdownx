"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/11/2020
 * Description:
 ******************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const query_string_1 = __importDefault(require("query-string"));
const marked_1 = __importDefault(require("marked"));
const renderers_1 = __importDefault(require("@markdownx/renderers"));
const frags_1 = require("./frags");
const index_counter_1 = __importDefault(require("./index-counter"));
const parser_1 = __importDefault(require("./parser"));
const templates_1 = __importDefault(require("./templates"));
const generate_imports_1 = __importDefault(require("./generate-imports"));
__exportStar(require("./interfaces"), exports);
__exportStar(require("./frags"), exports);
;
const rendererMethods = [
    'code', 'blockquote', 'html', 'heading', 'hr', 'list', 'listitem',
    'checkbox', 'paragraph', 'table', 'tablerow', 'tablecell',
    'strong', 'em', 'codespan', 'br', 'del', 'link', 'image', 'text'
];
const markedDefaults = { ...marked_1.default.defaults };
exports.default = (options) => {
    const mixedRenderers = { ...renderers_1.default, ...(options.renderers ?? {}) };
    const globalImports = [];
    const query = options.query;
    const importPool = new Set();
    const toc = [];
    marked_1.default.defaults = { ...markedDefaults };
    marked_1.default.setOptions({});
    marked_1.default.use({
        walkTokens(token) {
            if (token.type === 'code') {
                const id = index_counter_1.default();
                const moduleId = `MDX_CODE_MODULE_${id}`;
                const parsed = parser_1.default.code.token(token, { id, moduleId });
                const { imports, token: parsedToken } = parsed;
                if (parsedToken.invocation) {
                    imports.forEach(x => {
                        const q = {
                            ...query,
                            pickType: token.type,
                            pickId: id
                        };
                        const request = `${options.path}?${query_string_1.default.stringify(q)}`;
                        globalImports.push(`import ${x} from "${request}";`);
                    });
                    frags_1.frags.set(id + '', {
                        ...options,
                        token: { ...token },
                        id, moduleId,
                        parsedToken,
                        content: parsedToken.text
                    });
                    Object.assign(token, parsedToken);
                    token.lang += ` {{{${token.invocation}}}}`;
                }
            }
        },
        renderer: rendererMethods.reduce((acc, cur) => {
            acc[cur] = (...args) => {
                if (cur === 'heading') {
                    toc.push({
                        text: args[0],
                        level: args[1]
                    });
                }
                if (mixedRenderers[cur]) {
                    const { imports, exec } = mixedRenderers[cur](options);
                    imports.forEach(x => importPool.add(x));
                    return exec(...args);
                }
                return false;
            };
            return acc;
        }, {})
    });
    return (str) => {
        let output = marked_1.default(str)
            .replace(/(?<=<[^>]+?\s+)((class)(=("|').*?\\4)?)/g, 'className') // class => className
            .replace(/<!--[\s\S]*?-->/g, '');
        if (mixedRenderers.container) {
            const { imports, exec } = mixedRenderers.container();
            imports.forEach(x => importPool.add(x));
            output = exec(output);
        }
        if (mixedRenderers.toc) {
            const { imports, exec } = mixedRenderers.toc();
            imports.forEach(x => importPool.add(x));
            output = (exec(toc) || '') + output;
        }
        if (mixedRenderers.root) {
            const { imports, exec } = mixedRenderers.root();
            imports.forEach(x => importPool.add(x));
            output = exec(output);
        }
        return templates_1.default[options.type ?? 'tsx']({
            name: `MDX_COMPONENT_${index_counter_1.default()}`,
            content: output,
            imports: [...generate_imports_1.default(importPool), ...globalImports]
        });
    };
};
