/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: scripts/replace-internal-path.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 06/07/2021
 * Description:
 ******************************************************************/

const replace = require( 'replace' );
const { name } = require( '../package.json' );

replace( {
    regex : '@@component',
    replacement : `${name}/lib/renderers/components`,
    paths : [ 'lib' ],
    recursive : true,
    silent : true
} );
