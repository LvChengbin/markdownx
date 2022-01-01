/******************************************************************
 * Copyright (C) 2022 LvChengbin
 *
 * File: renderers/html.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 01/01/2022
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';
import escapeTemplateLiterals from '../utils/escape-template-literals';

export default function html(): Renderer {

    return {
        imports : [
            [ 'HTML', '@@component/HTML' ]
        ],

        exec( content: string ): string {
            return `
                <HTML content={\`${escapeTemplateLiterals( content )}\`} />
            `;
        }
    };
}
