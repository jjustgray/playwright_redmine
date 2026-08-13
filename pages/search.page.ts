import { Page, Locator, expect } from "@playwright/test";

class SearchPage {
    readonly page: Page;
    readonly searchForm: Locator;
    readonly titlesOnlyOption: Locator;
    readonly inputField: Locator;
    readonly submitButton: Locator;
    readonly resultsTable: Locator;
    readonly recordTitles: Locator;

    constructor(page: Page) {
        this.page = page;
        this.searchForm = page.locator('div#content form#search-form');
        this.titlesOnlyOption = page.locator('input#titles_only');
        this.inputField = page.locator('input#search-input');
        this.submitButton = page.locator('form p input[type="submit"]');
        this.resultsTable = page.locator('dl#search-results');
        this.recordTitles = page.locator('dl#search-results dt a');
    }

    async verifySearchFormVisibility() : Promise<void> {
        await expect(this.searchForm).toBeVisible();
    }

    async findAndClickTitlesOnlyOption() : Promise<void> {
        await expect(this.titlesOnlyOption).toBeVisible();
        await this.titlesOnlyOption.click();
    }

    async findInputField() : Promise<void> {
        await expect(this.inputField).toBeVisible();
    }

    async enterTextForSearch(text: string) : Promise<void> {
        await this.inputField.fill(text);
    }

    async submitSearch() : Promise<void> {
        await expect(this.submitButton).toBeVisible();
        await this.submitButton.click();
    }

    async verifySearchResults(text: string) {
        await expect(this.resultsTable).toBeVisible();
        const recordCount = await this.recordTitles.count();
        expect(recordCount).toBeGreaterThan(3);

        for (let i = 0; i < 3; i++) {
            await expect(this.recordTitles.nth(i)).toHaveText(new RegExp(text));
        }
    }
}

export default SearchPage;