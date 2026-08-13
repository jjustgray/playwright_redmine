import { Page, Locator, expect } from "@playwright/test";

class RoadmapPage {
    readonly page: Page;
    readonly articleHeader: Locator;

    constructor(page: Page) {
        this.page = page;
        this.articleHeader = page.locator('h3');
    }

    async scrollAndFindArticleByHeader(header: string) : Promise<void> {
        const articleHeader = this.page.locator(`h3:has-text("${header}")`);
        await expect(articleHeader).toBeVisible();
        await articleHeader.scrollIntoViewIfNeeded();
    }

}

export default RoadmapPage;