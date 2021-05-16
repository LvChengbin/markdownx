/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: test/parser.spec.ts
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/03/2020
 * Description:
 ******************************************************************/

/* eslint no-template-curly-in-string: off */

import parser from '../src/parser';

describe( 'parser', () => {

    describe( 'parser.code', () => {
        describe( 'parser.code.interpolate', () => {
            const fn = parser.code.interpolate;

            it( 'empty string', () => {
                expect( fn( '', { moduleId : '' } ) ).toEqual( {
                    imports : [],
                    invocation : ''
                } );
            } );

            it( 'template without vars', () => {
                expect( fn( '<Button />', { moduleId : '' } ) ).toEqual( {
                    imports : [],
                    invocation : '<Button />'
                } );
            } );

            it( 'template with only MOUDULE', () => {
                expect( fn( '<${MODULE} />', {
                    moduleId : 'M1'
                } ) ).toEqual( {
                    imports : [ 'M1' ],
                    invocation : '<M1 />'
                } );
            } );

            it( 'template with MODULE.xxx', () => {
                expect( fn( '<${MODULE.fn} />', {
                    moduleId : 'M1'
                } ) ).toEqual( {
                    imports : [ 'M1' ],
                    invocation : '<M1.fn />'
                } );
            } );

            it( 'template with MODULE.EXPORTS', () => {
                expect( fn( '<${MODULE.EXPORTS.fn} />', {
                    moduleId : 'M1'
                } ) ).toEqual( {
                    imports : [ '{ fn as M1__fn }' ],
                    invocation : '<M1__fn />'
                } );
            } );

            it( 'complex template', () => {
                expect( fn( '<${MODULE} /> <${MODULE} /> <${MODULE.EXPORTS.fn} /> <${MODULE.EXPORTS.fn2} /> <${MODULE.fn} /> <${MODULE.fn2} />', {
                    moduleId : 'M1'
                } ) ).toEqual( {
                    imports : [
                        'M1',
                        '{ fn as M1__fn }',
                        '{ fn2 as M1__fn2 }'
                    ],
                    invocation : '<M1 /> <M1 /> <M1__fn /> <M1__fn2 /> <M1.fn /> <M1.fn2 />'
                } );
            } );

        } );

        describe( 'parser.code.token', () => {
            const fn = parser.code.token;

            it( 'parse token', () => {
                expect( fn( {
                    type : 'code',
                    raw : '```jsx {{{ <${MODULE} /> }}}\n alert( 100 );\n```\n',
                    lang : 'jsx {{{ <${MODULE} /> }}}',
                    text : ' alert( 100 );'
                }, {
                    moduleId : 'M1'
                } ) ).toEqual( {
                    imports : [ 'M1' ],
                    token : {
                        type : 'code',
                        raw : '```jsx {{{ <${MODULE} /> }}}\n alert( 100 );\n```\n',
                        lang : 'jsx',
                        text : ' alert( 100 );',
                        invocation : ' <M1 /> '
                    }
                } );
            } );
        } );
    } );
} );
