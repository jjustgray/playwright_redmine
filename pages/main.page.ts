import { Page, Locator, expect } from "@playwright/test";

class MainPage {
    readonly page: Page;
    readonly featuresHeader: Locator;
    readonly issueTrackingSystemLink: Locator;
    readonly issueTrackingSystemPageHeader: Locator;
    readonly searchButton: Locator;
    readonly roadmapLink: Locator;

    constructor(page: Page) {
        this.page = page;
        this.featuresHeader = page.locator('h2:has(a[href="#Features"])');
        this.issueTrackingSystemLink = page.locator('a[href="/projects/redmine/wiki/RedmineIssues"]');
        this.issueTrackingSystemPageHeader = page.locator('h1:has-text("Issue Tracking")');
        this.searchButton = page.locator('div#quick-search form label:has(a[href="/projects/redmine/search?scope=subprojects"])');
        this.roadmapLink = page.locator('a[href="/projects/redmine/roadmap"]');
    }

    async verifyFeaturesHeaderVisibility() : Promise<void> {
        await expect(this.featuresHeader).toBeVisible();
    }

    async findIssueTrackingSystemLink() : Promise<void> {
        await expect(this.issueTrackingSystemLink).toBeVisible();
        await this.issueTrackingSystemLink.hover();
    }

    async clickIssueTrackingSystemLink() : Promise<void> {
        await this.issueTrackingSystemLink.click();
    }

    async verifyIssueTrackingSystemPage() : Promise<void> {
        await expect(this.page).toHaveURL(/RedmineIssues/);
        await expect(this.issueTrackingSystemPageHeader).toBeVisible();
    }

    async findAndClickSearchButton() : Promise<void> {
        await expect(this.searchButton).toBeVisible();
        await this.searchButton.click();
    }

    async findAndOpenRoadmapPage() : Promise<void> {
        await expect(this.roadmapLink).toBeVisible();
        await this.roadmapLink.click();
    }
}

export default MainPage;