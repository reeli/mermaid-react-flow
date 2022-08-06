export default {
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageProvider: "babel",
  testEnvironment: "jsdom",
  transform: {
    "^.+\.[t|j]sx?$": "babel-jest"
  },
  extensionsToTreatAsEsm: [".tsx", ".ts"],
  transformIgnorePatterns: [
    "<rootDir>/node_modules"
  ],
  resetMocks: false,
};
