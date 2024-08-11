/** @type {import('ts-jest').JestConfigWithTsJest} **/
export default {
  testMatch: ['**/dist/__tests__/**/*.test.js'],
  testPathIgnorePatterns: ['<rootDir>/__tests__/'],
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
};