import { test, expect } from '@playwright/test';

test.afterEach(async ({}, testInfo) => {
  if (testInfo.status === 'passed') {
    console.log(`✅ Test "${testInfo.title}" Passed`);
  } else if (testInfo.status === 'failed') {
    console.log(`❌ Test "${testInfo.title}" Failed`);
  }
});

test('First test: check page title', async ({ page }) => {
    
    // Go to a website
    await page.goto('https://demoqa.com/');

    // Check the page title
    await expect(page).toHaveTitle('DEMOQA');

});

test('Second test: check page Element', async ({ page }) => {
  
    // Go to a website
    await page.goto('https://demoqa.com/');
  
    // locate Elements
    const cardBody = page.locator('.card-body', { hasText: 'Elements' });
    await cardBody.click();

});

test('Third test: check current URL', async ({ page }) => {
    // Go to a website
    await page.goto('https://demoqa.com/');
 
    // locate Elements
    const cardBody = page.locator('.card-body', { hasText: 'Elements' });
    await cardBody.click();

    // Get the current URL and Verify the URL
    await expect(page).toHaveURL('https://demoqa.com/elements');

});
 
test('Fourth test: check new section Text Box', async ({ page }) => {
    // Go to a website
    await page.goto('https://demoqa.com/');
 
    // locate Elements
    const cardBody = page.locator('.card-body', { hasText: 'Elements' });
    await cardBody.click();

    // Get the current URL and Verify the URL
    await expect(page).toHaveURL('https://demoqa.com/elements');


    //
    const divElement = await page.locator('div.header-text', { hasText: 'Elements' });
    await divElement.click();

    //Locate the Text Box
    const spanElement = await page.locator('span.text',{hasText:'Text Box'});
    await spanElement.click();

    // Get the current URL
    const currentURL2 = page.url();

    // Verify the URL
    expect(currentURL2).toBe('https://demoqa.com/text-box');
});

 

