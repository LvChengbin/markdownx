/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/codespan.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';
import escapeTemplateLiterals from '../utils/escape-template-literals';

export default function codespan(): Renderer {

    return {
        imports : [
            [ 'Codespan', '@@component/Codespan' ]
        ],
        exec( code: string ): string {
            return `
                <Codespan code={\`${escapeTemplateLiterals( code )}\`} />
            `;
        }
    };
}
