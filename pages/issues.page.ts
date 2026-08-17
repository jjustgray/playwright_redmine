import { Page, Locator, expect } from "@playwright/test";

class IssuesPage {
    readonly page: Page;
    readonly statusFilterButton: Locator;
    readonly submitFormButton: Locator;
    readonly firstRowId: Locator;
    readonly firstRowStatus: Locator;

    readonly closedStatusSpan: Locator;

    readonly addFilterButton: Locator;
    readonly operatorsCategoryButton: Locator;
    readonly selectCategoryButton: Locator;
    
    readonly issueCategory: Locator;

    constructor(page: Page) {
        this.page = page;
        this.statusFilterButton = page.locator('table#filters-table select#operators_status_id');
        this.submitFormButton = page.locator('div#query_form_with_buttons a.icon.icon-checked');
        this.firstRowId = page.locator('table.list.issues tbody tr').first().locator('td.id a');
        this.firstRowStatus = page.locator('table.list.issues tbody tr').first().locator('td.status');
        this.closedStatusSpan = page.locator('div#content span.badge.badge-status-closed');

        this.addFilterButton = page.locator('select#add_filter_select');
        this.operatorsCategoryButton = page.locator('select#operators_category_id');
        this.selectCategoryButton = page.locator('select#values_category_id_1');
        this.issueCategory = page.locator('div.splitcontentleft div.category.attribute div.value');
    }

    async setClosedStatus(): Promise<void> {
        await expect(this.statusFilterButton).toBeVisible();
        await this.statusFilterButton.selectOption('c');
    }

    async submitForm(): Promise<void> {
        await expect(this.submitFormButton).toBeVisible();
        await expect(this.submitFormButton).toBeEnabled();
        await this.submitFormButton.click();
    }

    async checkFirstRowStatus(): Promise<void> {
        await expect(this.firstRowStatus).toHaveText('Closed');
    }

    async goToFirstRowPage(): Promise<void> {
        await expect(this.firstRowId).toBeVisible();
        await expect(this.firstRowId).toBeEnabled();
        await this.firstRowId.click()
    }

    async checkIssueStatus(): Promise<void> {
        await expect(this.closedStatusSpan).toBeVisible();
    }

    async addCategoryFilter(): Promise<void> {
        await expect(this.addFilterButton).toBeVisible();
        await this.addFilterButton.selectOption('category_id');
    }

    async setCategory(value: string): Promise<void> {
        await expect(this.operatorsCategoryButton).toBeVisible();
        await this.operatorsCategoryButton.selectOption('=');
        await expect(this.selectCategoryButton).toBeVisible();
        await this.selectCategoryButton.selectOption(value);
    }

    async checkIssueCategory(): Promise<void> {
        await expect(this.issueCategory).toHaveText('Feeds');
    }
}

export default IssuesPage;