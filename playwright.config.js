// @ts-check
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  /* Run tests in files in parallel */
  fullyParallel: false,

  /* Fail the build on CI if test.only is left */
  forbidOnly: !!process.env.CI,

  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  /* Use 1 worker on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter */
  reporter: [
    ['list'],
    ['allure-playwright']
  ],

  /* Shared settings */
  use: {
    headless: false, // ✅ Browser will be visible
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Browser projects */
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'], // ❌ removed headless:true
      },
    },
  ],

  /* Optional: Run local server before tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://localhost:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});