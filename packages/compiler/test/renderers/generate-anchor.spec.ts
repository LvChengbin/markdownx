/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: test/generate-anchor.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/06/2021
 * Description:
 ******************************************************************/

import generateAnchor from '../../src/renderers/generate-anchor';

describe( 'generateAnchor', () => {
    const cases = [
        [ 'a b c', '#a-b-c' ],
        [ 'a  b', '#a-b' ]
    ];

    for( const item of cases ) {
        it( item[ 0 ], () => {
            expect( generateAnchor( item[ 0 ] ) ).toEqual( item[ 1 ] );
        } );
    }
} );
