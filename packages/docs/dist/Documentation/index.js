"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Documentation/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
const markdown_1 = __importDefault(require("../markdown"));
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            padding: `${theme.spacing(3)}px ${theme.spacing(4)}px`
        }
    });
});
function Documentation() {
    const styles = useStyles();
    return (react_1.default.createElement("div", { className: styles.root },
        react_1.default.createElement(markdown_1.default, null)));
}
exports.default = Documentation;
