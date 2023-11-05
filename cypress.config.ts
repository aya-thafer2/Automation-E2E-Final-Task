const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      allureWriter(on, config);
      return config;
    },
    execTimeout: 1200000,
    env: {
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
      snapshotOnly: true
    },
    "retries": {
      "runMode": 1,
      "openMode": 1
    },
    allureResultsPath: "allure-results",
    allure:true,
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
