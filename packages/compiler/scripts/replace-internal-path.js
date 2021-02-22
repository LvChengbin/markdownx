/******************************************************************
 * Copyright (C) 2020 LvChengbin
 * 
 * File: scripts/replace-internal-path.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/13/2020
 * Description: 
 ******************************************************************/

const replace = require( 'replace' );
const { name } = require( '../package.json' );

replace( {
    regex : '@@component',
    replacement : `${name}/dist/components`,
    paths : [ 'dist' ],
    recursive : true,
    silent : true
} );
