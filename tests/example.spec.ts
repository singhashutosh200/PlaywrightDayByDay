import { test, expect } from '@playwright/test';

test('get started Login to Naukri', async ({ page }) => {
  await page.goto('https://www.naukri.com/');

  // Click the get started link.
  await page.locator('#login_Layer').click(); 
   
});
// -------------------- afterEach Hook --------------------
test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === 'passed') {
        console.log(`✅ Test "${testInfo.title}" Passed`);
    } else if (testInfo.status === 'failed') {
        console.log(`❌ Test "${testInfo.title}" Failed`);
    }
});