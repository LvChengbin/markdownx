/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: build/webpack.base.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

const path = require( 'path' );

const CODE_ROOT_PATH = path.resolve( __dirname, '..' );

module.exports = {
    entry : {},
    output : {},
    resolve : {
        extensions : [ '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx' ],
        symlinks : false,
        alias : {
            '@@component' : path.resolve( CODE_ROOT_PATH, 'src/components' ),
            '@@markdown' : path.resolve( CODE_ROOT_PATH, 'docs/markdown' ),
        }
    },
    module : {
        rules : [ {
            test : /\.mdx?$/,
            use : [ {
                    loader : 'ts-loader',
                    options : {
                        appendTsxSuffixTo : [ /\.mdx?$/ ]
                    }
                }, {
                    loader : path.resolve( CODE_ROOT_PATH, 'dist/index.js' ),
                    options : {
                        type : 'tsx'
                    }
                }
            ]
        }, {
            test : /\.tsx?$/,
            use : [ {
                loader : 'ts-loader',
                options : {
                    appendTsxSuffixTo : [ /\.mdx?$/ ]
                }
            } ]
        } ]
    }
}
