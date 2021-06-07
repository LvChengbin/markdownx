/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/code.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/14/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';
import escapeTemplateLiterals from '../utils/escape-template-literals';

export default function code(): Renderer {

    return {
        imports : [
            [ 'Code', '@@component/Code' ]
        ],

        exec( text: string, lang = '' ): string {
            const matches = lang.match( /\{{3}(.*?)\}{3}/ );
            const invocation = matches?.[ 1 ] ?? '';
            lang = lang.replace( /\s+\{{3}.+$/, '' );

            return invocation ? `
                <Code code={\`${escapeTemplateLiterals( text )}\`} lang="${lang}" component={${invocation}} />
            ` : `
                <Code code={\`${escapeTemplateLiterals( text )}\`} lang="${lang}" />
            `;
        }
    };
}
