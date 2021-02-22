"use strict";
/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/table.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
const trans_1 = require("../utils/trans");
function table() {
    return {
        imports: [
            ['Table', '@markdownx/renderers/dist/components/Table'],
            ['TableHead', '@markdownx/renderers/dist/components/TableHead'],
            ['TableBody', '@markdownx/renderers/dist/components/TableBody'],
            ['TableRow', '@markdownx/renderers/dist/components/TableRow'],
            ['TableCell', '@markdownx/renderers/dist/components/TableCell']
        ],
        exec(header, body) {
            header = trans_1.transTags(header, 'tr', 'TableRow');
            header = trans_1.transTags(header, 'th', 'TableCell');
            body = trans_1.transTags(body, 'tr', 'TableRow');
            body = trans_1.transTags(body, 'td', 'TableCell');
            return `
                <Table>
                    <TableHead>${header}</TableHead>
                    <TableBody>${body}</TableBody>
                </Table>
            `;
        }
    };
}
exports.default = table;
