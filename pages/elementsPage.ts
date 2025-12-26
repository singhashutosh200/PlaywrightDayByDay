import { Page, Locator, expect } from '@playwright/test';

export class ElementsPage {
    readonly page: Page;
    readonly headerText: Locator;
    readonly textBoxOption: Locator;

    constructor(page: Page) {
        this.page = page;
        this.headerText = page.locator('div.header-text', { hasText: 'Elements' });
        this.textBoxOption = page.locator('span.text', { hasText: 'Text Box' });
    }

    async clickHeader() {
        await this.headerText.click();
    }

    async clickTextBox() {
        await this.textBoxOption.click();
        await expect(this.page).toHaveURL('https://demoqa.com/text-box');
    }
}
