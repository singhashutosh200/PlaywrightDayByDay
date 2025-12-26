import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/homePage';
import { ElementsPage } from '../pages/elementsPage';

test('Check page title', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await expect(page).toHaveTitle('DEMOQA');
});

test('Navigate to Elements page', async ({ page }) => {
    const home = new HomePage(page);
    await home.goto();
    await home.clickElementsCard(); // URL check inside POM
});

test('Navigate to Text Box section', async ({ page }) => {
    const home = new HomePage(page);
    const elements = new ElementsPage(page);

    await home.goto();
    await home.clickElementsCard();
    await elements.clickHeader();
    await elements.clickTextBox(); // URL check inside POM
});

// -------------------- afterEach Hook --------------------
test.afterEach(async ({}, testInfo) => {
    if (testInfo.status === 'passed') {
        console.log(`✅ Test "${testInfo.title}" Passed`);
    } else if (testInfo.status === 'failed') {
        console.log(`❌ Test "${testInfo.title}" Failed`);
    }
});
