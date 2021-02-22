/******************************************************************
 * Copyright (C) 2020 LvChengbin
 *
 * File: build/webpack.doc.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/12/2020
 * Description:
 ******************************************************************/

const path = require( 'path' );
const HtmlPlugin = require( 'html-webpack-plugin' );

const CODE_ROOT_PATH = path.resolve( __dirname, '..' );

module.exports = {
    entry : {
        main : './docs/index.tsx'
    },
    output : {},
    resolve : {
        extensions : [ '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx' ],
        symlinks : false,
        alias : {
            '@@component' : path.resolve( CODE_ROOT_PATH, 'src/components' ),
            '@@markdown' : path.resolve( CODE_ROOT_PATH, 'docs/markdown' )
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
            } ],
        }, {
            test : /\.tsx?$/,
            use : [ {
                loader : 'ts-loader',
                options : {
                    appendTsxSuffixTo : [ /\.mdx?$/ ]
                }
            } ]
        } ]
    },
    plugins : [
        new HtmlPlugin( {
            meta : {
                viewport : 'width=device-width, initial-scale=1, shrink-to-fit=no',
                title : 'Markdownx Documentation',
            },
            template : './docs/index.html'
        } )
    ],
    devServer : {
        port : 10003,
        historyApiFallback : true,
        hot : true,
        watchOptions : {
            watchContentBase : true,
            aggregateTimeout : 100,
            poll : false,
            ignored : [ '**/build/**' ]
        }
    }
}
