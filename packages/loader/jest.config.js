/******************************************************************
 * Copyright (C) 2021 Markdownx
 *
 * File: loader/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 02/22/2021
 * Description:
 ******************************************************************/

module.exports = {
    preset : 'ts-jest',
    testMatch : [
        '**/test/**/*.spec.ts'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        'src/**/*.ts'
    ],
    testEnvironment : 'node'
};
