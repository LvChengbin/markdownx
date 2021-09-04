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
    setupFilesAfterEnv : [ 'jest-extended', '@testing-library/jest-dom' ],
    testMatch : [
        '**/test/**/*.spec.ts?(x)'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        '**/src/**/*.ts?(x)',
        '!**/*.d.ts'
    ],
    testEnvironment : 'node',
    globals : {
        'ts-jest' : {
            isolatedModules : true,
            tsconfig : 'tsconfig.spec.json'
        }
    },
    transformIgnorePatterns : [
        '\\.pnp\\.[^\\/]+$'
    ],
    moduleNameMapper : {
        '@markdownx/(.*)' : `${__dirname}/packages/$1/src/index.ts`
    }
};
