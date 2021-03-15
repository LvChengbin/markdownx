/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: compiler/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 03/15/2021
 * Description:
 ******************************************************************/

module.exports = {
    preset : 'ts-jest',
    setupFilesAfterEnv : [ 'jest-extended' ],
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
