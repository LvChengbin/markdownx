/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: utils/decode-quotes.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/13/2021
 * Description:
 ******************************************************************/

const entities = {
    'quot' : '"',
    '#39' : '\''
};

export default function decodeQuotes( data: string ): string {
    return data.replace( /&([a-z0-9#]+);/ig, ( m, n ) => {
        n = n.toLowerCase();
        return entities[ n ] ?? m;
    } );
}
