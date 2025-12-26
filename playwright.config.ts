// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // Folder where your test files are
  timeout: 30000,               // Maximum time per test in ms
  retries: 2,                   // Retry failed tests once
  use: {
    headless: false,             // Run browsers in headless mode
    ignoreHTTPSErrors: true,    // Ignore HTTPS errors
    video: 'on-first-retry',    // Record video if test fails
    screenshot: 'only-on-failure'
  },
   projects: [
      {
  name: 'chromium',
  use: {
    browserName: 'chromium',    // Runs tests in Chromium (Chrome/Edge engine)
    //headless: false,          // Opens browser in visible mode (not headless)
    viewport: null,             // No default viewport; uses full window size
    launchOptions: {
      args: ['--start-maximized'], // Starts the browser window maximized
        },
      },
    },
 /*
  {
    name: 'webkit',
    use: {
        browserName: 'webkit',      // Tells Playwright to use the WebKit browser (Safari engine)
        //headless: false,          // Runs the browser in **headed mode**, so you can see the browser window
        viewport: null,             // Disables default viewport, so the browser window uses the full size
        launchOptions: {
          args: ['--start-maximized'], // Starts the browser window maximized
        },
      },
    },
        {
      name: 'firefox',
      use: {
        browserName: 'firefox',     // Use Firefox for running tests
        //headless: false,          // Opens browser in visible mode (not headless)
        viewport: null,             // No default viewport; browser uses full window size
        launchOptions: {args: ['--start-maximized'],},// Starts the Firefox window maximized
        
      },
    },
*/
  ],
});
