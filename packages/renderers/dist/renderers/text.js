"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/text.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
function text() {
    return {
        imports: [
            ['Typography', '@material-ui/core/Typography']
        ],
        exec(text) {
            return `
                <Typography variant="body1">
                    ${text}
                </Typography>
            `;
        }
    };
}
exports.default = text;
