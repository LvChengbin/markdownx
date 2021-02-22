/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/table.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/15/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';
import { transTags } from '../utils/trans';

export default function table(): Renderer {
    return {
        imports : [
            [ 'Table', '@@component/Table' ],
            [ 'TableHead', '@@component/TableHead' ],
            [ 'TableBody', '@@component/TableBody' ],
            [ 'TableRow', '@@component/TableRow' ],
            [ 'TableCell', '@@component/TableCell' ]
        ],
        exec( header: string, body: string ): string {

            header = transTags( header, 'tr', 'TableRow' );
            header = transTags( header, 'th', 'TableCell' );

            body = transTags( body, 'tr', 'TableRow' );
            body = transTags( body, 'td', 'TableCell' );

            return `
                <Table>
                    <TableHead>${header}</TableHead>
                    <TableBody>${body}</TableBody>
                </Table>
            `;
        }
    };
}
