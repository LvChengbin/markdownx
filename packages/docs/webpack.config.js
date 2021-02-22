/******************************************************************
 * Copyright (C) 2021 Markdownx
 *
 * File: docs/webpack.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 02/22/2021
 * Description:
 ******************************************************************/

const path = require( 'path' );
const HtmlPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry : {
        main : './src/index.tsx'
    },
    resolve : {
        extensions : [ '.ts', '.tsx', '.js', '.jsx', '.md', '.mdx' ],
        symlinks : false,
        alias : {
            '@@markdown' : path.resolve( __dirname, 'src/markdown' )
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
                loader : '@markdownx/loader',
                options : { type : 'tsx' }
            } ]
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
                title : 'Markdownx Documentation'
            },
            template : './src/index.html'
        } )
    ],
    devServer : {
        port : '11000',
        historyApiFallback : true,
        hot : true,
        watchOptions : {
            watchContentBase : true,
            aggregateTimeout : 100,
            poll : false
        }
    }
};
