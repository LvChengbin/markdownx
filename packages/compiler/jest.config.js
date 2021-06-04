/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: compiler/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/15/2021
 * Description:
 ******************************************************************/

module.exports = {
    ...require( '../../jest.config.js' ),
    rootDir : __dirname,
    name : '@markdownx/compiler',
    displayName : '@markdownx/compiler',
    collectCoverageFrom : [
        'src/**/*.ts',
        '!**/*.d.ts'
    ]
};
