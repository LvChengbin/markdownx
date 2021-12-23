/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: compiler/webpack.demo.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/15/2021
 * Description:
 ******************************************************************/

const HtmlPlugin = require( 'html-webpack-plugin' );

module.exports = ( env, argv ) => {

    const isProductionMode = argv.mode === 'production';

    return {
        entry : {
            main : './demo/index.tsx'
        },
        output : {
            publicPath : '/'
        },
        resolve : {
            extensions : [ '.ts', '.tsx', '.js', '.jsx' ],
            symlinks : false
        },
        module : {
            rules : [ {
                test : /\.m?js/,
                resolve : {
                    fullySpecified : false
                }
            }, {
                test : /\.tsx?$/,
                use : [ {
                    loader : 'ts-loader',
                    options : {
                        transpileOnly : !isProductionMode,
                        experimentalWatchApi : !isProductionMode,
                        configFile : 'tsconfig.demo.json',
                    }
                } ]
            }, {
                test : /\.(jpe?g|png|gif|svg|webp)$/i,
                loader : 'file-loader'
            } ]
        },
        plugins : [
            new HtmlPlugin( {
                meta : {
                    viewport : 'width=device-width, initial-scale=1, shrink-to-fit=no',
                    charset : 'utf-8'
                },
                templateContent : `
                    <!DOCTYPE html>
                    <html>
                        <head>
                            <title>Documentations: @nextseason/react-ui'</title>
                            <style>html { scroll-behavior : smooth }</style>
                        </head>
                        <body>
                            <div id="root"></div>
                        </body>
                    </html>
                `
            } )
        ],
        devServer : {
            port : 20000,
            historyApiFallback : true,
            hot : true
        }
    };
};
