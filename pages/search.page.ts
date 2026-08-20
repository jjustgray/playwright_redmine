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
        
    }

    async findAndClickTitlesOnlyOption() : Promise<void> {
        await this.titlesOnlyOption.click();
    }

    async enterTextForSearch(text: string) : Promise<void> {
        await this.inputField.fill(text);
    }

    async submitSearch() : Promise<void> {
        await this.submitButton.click();
    }
}

export default SearchPage;