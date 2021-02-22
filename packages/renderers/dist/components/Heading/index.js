"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Heading/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
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
const Copy_1 = __importDefault(require("../Copy"));
;
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {},
        heading: {
            '&:hover $anchor': {
                opacity: 1
            },
            '&:hover $copy': {
                opacity: .8
            }
        },
        anchor: {
            textDecoration: 'none',
            paddingRight: theme.spacing(.5),
            color: theme.palette.grey[500],
            marginLeft: '-.8em',
            opacity: 0
        },
        copy: {
            opacity: 0,
            fontSize: '.8em',
            marginLeft: theme.spacing(1),
            verticalAlign: '-2px'
        },
        h1: {},
        h2: {
            marginTop: theme.spacing(1)
        },
        h3: {
            marginTop: theme.spacing(1)
        },
        h4: {
            marginTop: theme.spacing(1)
        },
        h5: {
            marginTop: theme.spacing(1)
        },
        h6: {
            marginTop: theme.spacing(1)
        }
    });
});
function Heading(props) {
    const styles = useStyles(props);
    const { level = '1', text, anchor } = props;
    const url = new URL(window.location.href);
    url.hash = anchor;
    return (react_1.default.createElement("div", { className: styles.root, id: url.hash.slice(1) },
        react_1.default.createElement(Typography_1.default, { variant: `h${level}`, className: clsx_1.default(styles.heading, styles[`h${level}`]) },
            react_1.default.createElement("a", { href: anchor, className: styles.anchor }, "#"),
            text,
            react_1.default.createElement(Copy_1.default, { content: url.href, className: styles.copy }))));
}
exports.default = Heading;
