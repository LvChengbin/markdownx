"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Container/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
;
function Container(props) {
    return react_1.default.createElement("div", null, props.children);
}
exports.default = Container;
