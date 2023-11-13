const { defineConfig } = require("cypress");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
import { configureAllureAdapterPlugins } from '@mmisty/cypress-allure-adapter/plugins';

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://opensource-demo.orangehrmlive.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      configureAllureAdapterPlugins(on, config);
      allureWriter(on, config);
      return config;
    },
    execTimeout: 1200000,
    env: {
      allureReuseAfterSpec: true,
      download_dir: "./cypress/downloads",
      snapshotOnly: true,
      allure: true,
    },
    // "retries": {
    //   "runMode": 1,
    //   "openMode": 1
    // },
    allure: true,
    allureResultsPath: "allure-results",
    videosFolder: "allure-results/",
    screenshotOnRunFailure: true,
  },
});
