/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: utils/joint-attrs.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 07/04/2021
 * Description:
 ******************************************************************/

import jointAttrs from '../../../src/renderers/utils/joint-attrs';

describe( 'utils/joint-attrs', () => {
    it( 'should generate string with all nonnull attributes', () => {
        const attrs = jointAttrs( { x : 1, y : 2 } );
        expect( attrs ).toEqual( 'x="1" y="2"' );
    } );

    it( 'should skip undefined values', () => {
        const attrs = jointAttrs( { x : undefined, y : 2 } );
        expect( attrs ).toEqual( 'y="2"' );
    } );

    it( 'should skip null values', () => {
        const attrs = jointAttrs( { x : null, y : 2 } );
        expect( attrs ).toEqual( 'y="2"' );
    } );
} );
