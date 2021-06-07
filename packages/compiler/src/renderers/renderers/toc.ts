/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: renderers/toc.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/04/2020
 * Description:
 ******************************************************************/

import { Renderer } from '../../interfaces';
import generateAnchor from '../generate-anchor';

export default function toc(): Renderer {
    return {
        imports : [
            [ 'Toc', '@@component/Toc' ]
        ],
        exec( toc: { text: string; level: number }[] ): string {

            const jsx: string[] = [];

            toc.map( x => {
                jsx.push( `{
                    text : <>${x.text}</>,
                    level : ${x.level},
                    anchor : '${generateAnchor( x.text )}'
                }` );
            } );

            return `
                <Toc toc={[${jsx.join( ',' )}]} />
            `;
        }
    };
}
