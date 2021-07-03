/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: renderers/link.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/03/2021
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';
import jointAttrs from '../utils/joint-attrs';

export default function link(): Renderer {
    return {
        imports : [
            [ 'Link', '@@component/Link' ]
        ],
        exec( href: string, title: string, text: string ): string {

            const attrs = jointAttrs( { title, text } );

            return `
                <Link href="${href}" ${attrs} />
            `;
        }
    };
}
