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
        this.statusFilterButton = page.locator('select#operators_status_id');
        this.submitFormButton = page.locator('a.icon.icon-checked');
        const firstRow = page.getByRole('table').getByRole('row').nth(1);
        this.firstRowId = firstRow.getByRole('cell', { name: /^\d+$/ }).getByRole('link');
        this.firstRowStatus = firstRow.getByRole('cell').nth(2);
        this.closedStatusSpan = page.getByText('Closed', { exact: true });

        this.addFilterButton = page.getByLabel('Add filter').or(page.locator('select#add_filter_select'));
        this.operatorsCategoryButton = page.locator('select#operators_category_id');
        this.selectCategoryButton = page.locator('select#values_category_id_1');
        this.issueCategory = page.getByRole('row', { name: 'Category:' }).getByRole('cell').nth(1);
    }

    async setClosedStatus(): Promise<void> {
        await this.statusFilterButton.selectOption('c');
    }

    async submitForm(): Promise<void> {
        await this.submitFormButton.click();
    }

    async goToFirstRowPage(): Promise<void> {
        await this.firstRowId.click()
    }

    async addCategoryFilter(): Promise<void> {
        await this.addFilterButton.selectOption('category_id');
    }

    async setCategory(value: string): Promise<void> {
        await this.operatorsCategoryButton.selectOption('=');
        await this.selectCategoryButton.selectOption(value);
    }
}

export default IssuesPage;