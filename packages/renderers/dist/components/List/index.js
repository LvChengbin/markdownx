"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: List/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
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
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("@material-ui/core/styles");
const List_1 = __importDefault(require("@material-ui/core/List"));
const useStyles = styles_1.makeStyles(() => {
    return styles_1.createStyles({
        root: {
            listStyle: 'disc',
            listStylePosition: 'inside'
        },
        ordered: {
            listStyleType: 'decimal'
        }
    });
});
;
function List(props) {
    const styles = useStyles(props);
    const { children, ordered } = props;
    return (React.createElement(List_1.default, { className: clsx_1.default(styles.root, ordered && styles.ordered) }, children));
}
exports.default = List;
