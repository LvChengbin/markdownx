"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: docs/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_dom_1 = __importDefault(require("react-dom"));
const styles_1 = require("@material-ui/styles");
const CssBaseline_1 = __importDefault(require("@material-ui/core/CssBaseline"));
const theme_1 = __importDefault(require("./theme"));
const Documentation_1 = __importDefault(require("./Documentation"));
react_dom_1.default.render((react_1.default.createElement(styles_1.ThemeProvider, { theme: theme_1.default },
    react_1.default.createElement(CssBaseline_1.default, null),
    react_1.default.createElement(Documentation_1.default, null))), document.getElementById('root'));
