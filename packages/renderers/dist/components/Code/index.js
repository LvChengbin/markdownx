"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Code/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/26/2020
 * Description:
 ******************************************************************/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const clsx_1 = __importDefault(require("clsx"));
const styles_1 = require("@material-ui/core/styles");
const react_syntax_highlighter_1 = require("react-syntax-highlighter");
const prism_1 = require("react-syntax-highlighter/dist/esm/styles/prism");
const Copy_1 = __importDefault(require("../Copy"));
;
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            position: 'relative',
            marginTop: theme.spacing(2)
        },
        block: {
            padding: theme.spacing(2),
            background: theme.palette.grey[200],
            borderRadius: theme.shape.borderRadius,
            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(1)
            }
        },
        btnbox: {
            position: 'absolute',
            right: theme.spacing(1.5),
            top: theme.spacing(1.5),
            color: theme.palette.common.white
        },
        btn: {
            opacity: .6,
            cursor: 'pointer',
            fontSize: '14px',
            '&:hover': {
                opacity: 1
            }
        },
        demo: {
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            alignItems: 'center',
            padding: theme.spacing(4, 2),
            border: `solid 1px ${theme.palette.grey[300]}`,
            borderRadius: theme.shape.borderRadius,
            marginBottom: theme.spacing(2),
            background: theme.palette.common.white,
            '&>*': {
                margin: theme.spacing(1)
            },
            [theme.breakpoints.down('md')]: {
                padding: theme.spacing(2, 1)
            }
        },
        code: {
            margin: 0,
            position: 'relative',
            '& pre': {
                margin: '0!important'
            }
        }
    });
});
function Code(props) {
    const styles = useStyles(props);
    const { lang, code, component } = props;
    return (react_1.default.createElement("div", { className: clsx_1.default(styles.root, component && styles.block) },
        component && (react_1.default.createElement("div", { className: styles.demo }, component)),
        react_1.default.createElement("div", { className: styles.code },
            react_1.default.createElement("div", { className: styles.btnbox },
                react_1.default.createElement(Copy_1.default, { content: code, className: styles.btn })),
            react_1.default.createElement(react_syntax_highlighter_1.Prism, { language: lang, style: prism_1.okaidia }, code))));
}
exports.default = Code;
