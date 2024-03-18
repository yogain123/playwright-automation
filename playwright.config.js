// playwright.config.js
module.exports = {
  use: {
    // Run tests in headless mode.
    headless: true,

    // Path to the browser executable.
    // executablePath:
    //   "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",

    // Configure viewport and user-agent for all tests.
    // viewport: { width: 1280, height: 720 },
    // userAgent: 'my-user-agent',

    // Other global settings, like slowMo, can be set here.
    launchOptions: {
      slowMo: 200, // Adds a 1000ms delay to Playwright actions for visualization
    },
  },

  // Other configurations like projects, test directory, etc.
  // projects: [
  //   { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  //   { name: 'firefox', use: { ...devices['Desktop Firefox'] } },
  //   { name: 'webkit', use: { ...devices['Desktop Safari'] } },
  // ],
};
