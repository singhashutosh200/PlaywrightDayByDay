import { Page, Locator, expect } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly elementsCard: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elementsCard = page.locator('.card-body', { hasText: 'Elements' });
    }

    async goto() {
        await this.page.goto('https://demoqa.com/');
    }

    async clickElementsCard() {
        await this.elementsCard.click();
        await expect(this.page).toHaveURL('https://demoqa.com/elements');
    }
}
