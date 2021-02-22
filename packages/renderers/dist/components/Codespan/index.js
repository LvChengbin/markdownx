"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Codespan/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const styles_1 = require("@material-ui/core/styles");
;
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            color: theme.palette.primary.main,
            background: theme.palette.grey[200],
            fontSize: 14,
            borderRadius: 3,
            padding: '2px 4px',
            margin: 4
        }
    });
});
function Codespan(props) {
    const styles = useStyles(props);
    const { code } = props;
    return (react_1.default.createElement("span", { className: styles.root, dangerouslySetInnerHTML: { __html: code ?? '' } }));
}
exports.default = Codespan;
