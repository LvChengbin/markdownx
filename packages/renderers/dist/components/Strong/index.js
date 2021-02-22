"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Strong/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("@material-ui/core/styles");
const Typography_1 = __importDefault(require("@material-ui/core/Typography"));
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            fontWeight: theme.typography.fontWeightBold,
            margin: `${theme.spacing(1)}px 0`
        },
        notice: {
            color: theme.palette.info.dark
        },
        warning: {
            color: theme.palette.warning.dark
        },
        error: {
            color: theme.palette.error.dark
        }
    });
});
function Strong(props) {
    const styles = useStyles(props);
    const { raw, content } = props;
    const error = /^(!!!!|error|danger|严重警告|严重声明)/i.test(raw);
    const warning = /^(!!!|warn|caveat|警告|注意|声明|⚠️)/i.test(raw);
    const notice = /^(!!|notice|tip|info|hint|提示|贴示|小贴示|小提示)/i.test(raw);
    return (react_1.default.createElement(Typography_1.default, { component: "strong", className: clsx_1.default(styles.root, error && styles.error, warning && styles.warning, notice && styles.notice) }, content));
}
exports.default = Strong;
