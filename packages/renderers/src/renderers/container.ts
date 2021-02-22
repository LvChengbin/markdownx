/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/container.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import { Renderer } from '@markdownx/compiler';

export default function container(): Renderer {
    return {
        imports : [
            [ 'Container', '@@component/Container' ]
        ],
        exec( content: string ): string {
            return `
                <Container>${content}</Container>
            `;
        }
    };
}
