/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/text.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';

export default function text(): Renderer {
    return {
        imports : [
            [ 'Typography', '@material-ui/core/Typography' ]
        ],
        exec( text: string ): string {
            return `
                <Typography variant="body1">
                    ${text}
                </Typography>
            `;
        }
    };
}
