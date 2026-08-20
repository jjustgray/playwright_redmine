import { Page, Locator, expect } from "@playwright/test";

class MainPage {
    readonly page: Page;
    readonly featuresHeader: Locator;
    readonly issueTrackingSystemLink: Locator;
    readonly issueTrackingSystemPageHeader: Locator;
    readonly searchButton: Locator;
    readonly roadmapLink: Locator;
    readonly issues: Locator;

    constructor(page: Page) {
        this.page = page;
        this.featuresHeader = page.getByRole('heading', { name: 'Features' });
        this.issueTrackingSystemLink = page.getByRole('link', { name: 'Issue tracking system' });
        this.issueTrackingSystemPageHeader = page.getByRole('heading', { name: 'Issue Tracking', exact: true });
        this.searchButton = page.getByRole('link', { name: 'Search' });
        this.roadmapLink = page.getByRole('link', { name: 'Roadmap' });
        this.issues = page.getByRole('link', { name: 'Issues', exact: true });
    }

    async clickIssueTrackingSystemLink() : Promise<void> {
        await this.issueTrackingSystemLink.click();
    }

    async findAndClickSearchButton() : Promise<void> {
        await this.searchButton.click();
    }

    async findAndOpenRoadmapPage() : Promise<void> {
        await this.roadmapLink.click();
    }

    async goToIssuesPage(): Promise<void> {
        await this.issues.click();
    }
}

export default MainPage;