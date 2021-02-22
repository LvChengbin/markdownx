"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: Toc/index.tsx
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
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
const Link_1 = __importDefault(require("@material-ui/core/Link"));
const Close_1 = __importDefault(require("@material-ui/icons/Close"));
const Toc_1 = __importDefault(require("@material-ui/icons/Toc"));
const useStyles = styles_1.makeStyles((theme) => {
    return styles_1.createStyles({
        root: {
            position: 'fixed',
            zIndex: theme.zIndex.appBar - 1,
            right: theme.spacing(4),
            width: 300,
            height: '100vh',
            top: 0,
            // transition : 'all .3s ease-out',
            display: 'flex',
            flexDirection: 'row-reverse',
            overflow: 'hidden',
            boxShadow: theme.shadows[2],
            background: theme.palette.common.white,
            [theme.breakpoints.down('md')]: {
                display: 'none'
            }
        },
        list: {
            padding: theme.spacing(2),
            width: '100%',
            height: '100%',
            overflow: 'auto',
            position: 'relative'
        },
        close: {
            position: 'absolute',
            top: theme.spacing(1),
            right: theme.spacing(1),
            color: theme.palette.grey[400],
            cursor: 'pointer',
            '&:hover': {
                color: theme.palette.primary.light
            }
        },
        switch: {
            width: 50,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            color: theme.palette.primary.light,
            background: theme.palette.common.white,
            cursor: 'pointer',
            display: 'none',
            position: 'absolute',
            right: 0,
            top: 0,
            zIndex: theme.zIndex.appBar
        },
        link: {},
        level1: {},
        level2: {
            marginLeft: theme.spacing(2)
        },
        level3: {
            marginLeft: theme.spacing(4)
        },
        level4: {
            marginLeft: theme.spacing(6)
        },
        level5: {
            marginLeft: theme.spacing(8)
        },
        level6: {
            marginLeft: theme.spacing(10)
        },
        collapse: {
            top: theme.spacing(4),
            right: theme.spacing(4),
            width: 50,
            height: 50,
            borderRadius: '50%',
            '& $switch': {
                display: 'flex'
            }
        }
    });
});
function Toc(props) {
    const styles = useStyles();
    const { toc } = props;
    const [collapse, setCollapse] = react_1.useState(true);
    return (react_1.default.createElement("div", { className: clsx_1.default(styles.root, collapse && styles.collapse) },
        react_1.default.createElement("div", { className: styles.switch, onClick: () => setCollapse(false) },
            react_1.default.createElement(Toc_1.default, null)),
        react_1.default.createElement("div", { className: styles.list },
            react_1.default.createElement("div", { className: styles.close, onClick: () => setCollapse(true) },
                react_1.default.createElement(Close_1.default, null)),
            toc.map((x, i) => {
                return (react_1.default.createElement("p", { key: i, className: clsx_1.default(styles.link, styles[`level${x.level}`]) },
                    react_1.default.createElement(Link_1.default, { href: x.anchor }, x.text)));
            }))));
}
exports.default = Toc;
