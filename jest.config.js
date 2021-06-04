/******************************************************************
 * Copyright (C) 2021 LvChengbin
 *
 * File: markdownx/jest.config.js
 * Author: LvChengbin<lvchengbin59@gmail.com>
 * Time: 05/18/2021
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
        '**/src/**/*.ts',
        '!**/*.d.ts'
    ],
    testEnvironment : 'node',
    globals : {
        'ts-jest' : {
            isolatedModules : true
        }
    },
    transformIgnorePatterns : [
        '\\.pnp\\.[^\\\/]+$'
    ],
    moduleNameMapper : {
        '@markdownx/(.*)' : `${__dirname}/packages/$1/src/index.ts`
    }
}
