"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: TableCell/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
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
const React = __importStar(require("react"));
const styles_1 = require("@material-ui/core/styles");
const TableCell_1 = __importDefault(require("@material-ui/core/TableCell"));
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            border: `solid 1px ${theme.palette.grey[300]}`
        }
    });
});
function TableCell(props) {
    const styles = useStyles();
    return (React.createElement(TableCell_1.default, { className: styles.root }, props.children));
}
exports.default = TableCell;
