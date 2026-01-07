import { test, expect } from '@playwright/test';

test('Ist Test Case - Navigated to DEMOQA', async ({ page }) => {
    await page.goto('https://demoqa.com/');
});

test('2nd Test Case - Verify the title of DEMOQA', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await expect(page).toHaveTitle('DEMOQA');
});

test('3rd Test Case - Verify the Presence of Section Elements in DEMOQA', async ({ page }) => {
    await page.goto('https://demoqa.com/');
    await page.locator('.card').filter({ hasText: 'Elements' }).click();
});

test ('4th Test Case - Verify the current URL after clicking Elements section in DEMOQA', async ({ page }) => {
    await page.goto('https://demoqa.com/'); 
    await page.locator('.card').filter({ hasText: 'Elements' }).click();
    await expect(page).toHaveURL('https://demoqa.com/elements');
});

// -------------------- afterEach Hook --------------------
test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === 'passed') {
        console.log(`✅ Test "${testInfo.title}" Passed`);
    } else if (testInfo.status === 'failed') {
        console.log(`❌ Test "${testInfo.title}" Failed`);
    }
});
 