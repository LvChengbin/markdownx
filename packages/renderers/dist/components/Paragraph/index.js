"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Paragraph/index.tsx
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
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            marginTop: theme.spacing(2),
            lineHeight: 2
        }
    });
});
;
function Paragraph(props) {
    const { children } = props;
    const styles = useStyles(props);
    return (react_1.default.createElement(Typography_1.default, { variant: "body1", className: styles.root }, children));
}
exports.default = Paragraph;
