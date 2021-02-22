"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: utils/trans.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
exports.peelTags = exports.transTags = exports.removeSelfClosingTag = exports.removeTags = exports.removeAttr = void 0;
const regexps_1 = require("./regexps");
const r = (input, reg, replacement = '') => input.replace(reg, replacement);
const removeAttr = (x, attr) => r(x, regexps_1.attributeReg(attr));
exports.removeAttr = removeAttr;
const removeTags = (x, tag) => r(x, regexps_1.tagReg(tag));
exports.removeTags = removeTags;
const removeSelfClosingTag = (x, tag) => r(x, regexps_1.selfClosingTagReg(tag));
exports.removeSelfClosingTag = removeSelfClosingTag;
const transTags = (x, tag, replacer) => {
    return x.replace(regexps_1.openTagReg(tag), (m, n) => n ? `<${replacer}${n}>` : `<${replacer}>`).replace(regexps_1.closeTagReg(tag), `</${replacer}>`);
};
exports.transTags = transTags;
const peelTags = (x, tag) => {
    return x.replace(regexps_1.openTagReg(tag), '').replace(regexps_1.closeTagReg(tag), '');
};
exports.peelTags = peelTags;
