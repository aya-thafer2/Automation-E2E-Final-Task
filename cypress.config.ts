const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      return config;
    },
    execTimeout: 1200000,
    env: {
      //allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
    },
    "retries": {
      "runMode": 1,
      "openMode": 1
    },
    //allure: true,
    //allureResultsPath: "allure-results",
    //videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
