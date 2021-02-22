"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Copy/index.tsx
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
const react_1 = __importStar(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("@material-ui/core/styles");
const FileCopy_1 = __importDefault(require("@material-ui/icons/FileCopy"));
;
const useStyles = styles_1.makeStyles(() => {
    return styles_1.createStyles({
        root: {
            display: 'inline-block',
            cursor: 'pointer'
        },
        input: {
            opacity: 0,
            width: 0,
            height: 0,
            position: 'fixed',
            left: '-99999px',
            top: '-99999px'
        },
        icon: {
            fontSize: 'inherit'
        }
    });
});
function Copy(props) {
    const styles = useStyles(props);
    const { content, className } = props;
    const input = react_1.useRef(null);
    const handleCopy = () => {
        input?.current?.select?.();
        document.execCommand('copy');
    };
    return (react_1.default.createElement("div", { className: clsx_1.default(styles.root, className) },
        react_1.default.createElement(FileCopy_1.default, { fontSize: "small", onClick: handleCopy, className: styles.icon }),
        react_1.default.createElement("textarea", { className: styles.input, ref: input, value: content, readOnly: true })));
}
exports.default = Copy;
