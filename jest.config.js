const nextJest = require('next/jest')

const createJestConfig = nextJest({
    dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
    moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
        '^adapters/(.*)$': '<rootDir>/adapters/$1',
        '^components/(.*)$': '<rootDir>/components/$1',
        '^contexts/(.*)$': '<rootDir>/contexts/$1',
        '^hooks/(.*)$': '<rootDir>/hooks/$1',
        '^mocks/(.*)$': '<rootDir>/mocks/$1',
        '^models/(.*)$': '<rootDir>/models/$1',
        '^pages/(.*)$': '<rootDir>/pages/$1',
        '^redux/(.*)$': '<rootDir>/redux/$1',
        '^services/(.*)$': '<rootDir>/services/$1',
        '^styles/(.*)$': '<rootDir>/styles/$1',
        '^utilities/(.*)$': '<rootDir>/utilities/$1',
    },
    testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
