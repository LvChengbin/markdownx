"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/renderers/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/renderers/14/renderers/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const code_1 = __importDefault(require("./renderers/code"));
const codespan_1 = __importDefault(require("./renderers/codespan"));
const container_1 = __importDefault(require("./renderers/container"));
const heading_1 = __importDefault(require("./renderers/heading"));
const list_1 = __importDefault(require("./renderers/list"));
const listitem_1 = __importDefault(require("./renderers/listitem"));
const paragraph_1 = __importDefault(require("./renderers/paragraph"));
const root_1 = __importDefault(require("./renderers/root"));
const strong_1 = __importDefault(require("./renderers/strong"));
const table_1 = __importDefault(require("./renderers/table"));
const toc_1 = __importDefault(require("./renderers/toc"));
exports.default = {
    code: code_1.default,
    codespan: codespan_1.default,
    container: container_1.default,
    heading: heading_1.default,
    list: list_1.default,
    listitem: listitem_1.default,
    paragraph: paragraph_1.default,
    root: root_1.default,
    strong: strong_1.default,
    table: table_1.default,
    toc: toc_1.default
};
