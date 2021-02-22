"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index-counter.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/02/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
let indexCounter = 0;
function increment() {
    const index = indexCounter++;
    return index + '';
}
exports.default = increment;
