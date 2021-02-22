"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/regexps.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 04/14/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.selfClosingTagReg = exports.closeTagReg = exports.openTagReg = exports.tagReg = exports.attributeReg = void 0;
const escape_string_regexp_1 = __importDefault(require("escape-string-regexp"));
const j = (src) => {
    if (!Array.isArray(src))
        return escape_string_regexp_1.default(src);
    return src.map(x => escape_string_regexp_1.default(x)).join('|');
};
const attributeReg = (x) => new RegExp(`(?<=<[^>]+?)(\\s+(${j(x)})(=("|').*?\\4)?)`, 'ig');
exports.attributeReg = attributeReg;
const tagReg = (x) => new RegExp(`<(${j(x)})([\\s]+[^>]*)?>[\\s\\S]*?(<\\/\\1>|$)`, 'ig');
exports.tagReg = tagReg;
const openTagReg = (x) => new RegExp(`<(?:${j(x)})([\\s][^>]*)?>`, 'ig');
exports.openTagReg = openTagReg;
const closeTagReg = (x) => new RegExp(`<\\/(${j(x)})>`, 'ig');
exports.closeTagReg = closeTagReg;
const selfClosingTagReg = (x) => new RegExp(`<${j(x)}[\\s]+[^>]*>`, 'ig');
exports.selfClosingTagReg = selfClosingTagReg;
