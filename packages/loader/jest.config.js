/******************************************************************
 * Copyright (C) 2021 Markdownx
 *
 * File: loader/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 02/22/2021
 * Description:
 ******************************************************************/

module.exports = {
    ...require( '../../jest.config.js' ),
    rootDir : __dirname,
    name : '@markdownx/loader',
    displayName : '@markdownx/loader',
    collectCoverageFrom : [
        'src/**/*.ts',
        '!**/*.d.ts'
    ]
};
