"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/generate-anchor.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function generateAnchor(text) {
    return '#' + text.replace(/<[^>]*>/g, '').replace(/['"`]/g, '').replace(/\s/g, '-').toLowerCase();
}
exports.default = generateAnchor;
