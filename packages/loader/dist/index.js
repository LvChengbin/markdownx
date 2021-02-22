"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: src/index.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const compiler_1 = __importStar(require("@markdownx/compiler"));
const querystring_1 = __importDefault(require("querystring"));
const loader_utils_1 = require("loader-utils");
function default_1(source) {
    const { resourcePath, resourceQuery } = this;
    const query = querystring_1.default.parse(this.resourceQuery.slice(1));
    if (query.pickId) {
        const { content } = compiler_1.frags.get(query.pickId); // eslint-disable-line @typescript-eslint/no-non-null-assertion
        // frags.delete( query.pickId as string );
        if (content)
            return content;
        this.emitError(new Error(`Cannot pick content from "${query.pick}"`));
        return '';
    }
    const options = {
        path: resourcePath,
        query: resourceQuery,
        ...loader_utils_1.getOptions(this)
    };
    return compiler_1.default(options)(source);
}
exports.default = default_1;
