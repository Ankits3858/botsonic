const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true, // Enable video recording
  videoUploadOnPasses: true, // Optionally, don't upload videos for passing tests
  reporter: 'mochawesome',
 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true,
  },
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    "video": true,
    "screenshotsFolder": "images",
    reporterOptions: {
      charts: true,
      reportPageTitle: 'botsonic',
      embeddedScreenshots: true,
      inlineAssets: true,
      saveAllAttempts: false,
    },
    setupNodeEvents(on, config) {
      on('after:spec', (spec, results) => {
        if (results && results.video) {
          const videoPath = results.video;

          // You can add custom logic here to handle the video path or rename the video
          // for individual test cases.
        }
      });
      // implement node event listeners here
      this.screenshotOnRunFailure = true;
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    specPattern: "cypress/integration/botsonic/*.js"
  },
  env:
  {
    staging: "https://aerie.sandbox.volary.tech/login",
    production:"https://app.writesonic.com/login?redirect_url=https%3A%2F%2Fbot.writesonic.com&source=botsonic"
  },
});
