/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/strong.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/12/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';
import escapeTemplateLiterals from '../utils/escape-template-literals';

export default function strong(): Renderer {
    return {
        imports : [
            [ 'Strong', '@@component/Strong' ]
        ],
        exec( text: string ): string {
            return `
                <Strong raw={\`${escapeTemplateLiterals( text )}\`} content={<>${text}</>} />
            `;
        }
    };
}
