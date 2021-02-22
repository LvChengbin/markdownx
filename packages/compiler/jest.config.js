module.exports = {
    testMatch : [
        '**/test/**/*.spec.js',
        '**/test/**/*.spec.ts',
        '**/test/**/*.spec.jsx',
        '**/test/**/*.spec.tsx'
    ],
    coverageReporters : [
        'text-summary',
        'text',
        'lcov'
    ],
    collectCoverageFrom : [
        'src/**/*.js'
    ],
    testEnvironment : 'node'
}
