import { Page, Locator, expect } from "@playwright/test";

class RoadmapPage {
    readonly page: Page;
    readonly subject: Locator;
    readonly buttons: Locator;
    readonly actionsMenu: Locator;
    readonly deleteButton: Locator;
    readonly closeAdButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.subject = page.locator('td.subject:has(a)');
        this.buttons = this.subject.locator('..').locator('td.buttons');
        this.actionsMenu = page.locator('div#context-menu');
        this.deleteButton = this.actionsMenu.locator('ul li a.icon-del');
        this.closeAdButton = page.locator('ins > span > svg > path');
    }

    async findFirstIssue(): Promise<string> {
        const firstIssue = this.subject.nth(0);
        await expect(firstIssue).toBeVisible();
        return await firstIssue.innerText();
    }

    async deleteIssue(): Promise<void> {
        const firstIssueButtons = this.buttons.nth(0);
        await expect(firstIssueButtons).toBeVisible();
        await firstIssueButtons.click();
        await expect(this.actionsMenu).toBeVisible();
        await expect(this.deleteButton).toBeVisible();
        await this.deleteButton.click();
    }

    async verifyTaskIsNotDeleted(previousText: string) {
        const newText = await this.subject.nth(0).innerText();
        expect(newText).toBe(previousText);
    }

    async closeAdIfPresent(timeout = 3000): Promise<void> {
        try {
        // Быстрая проверка видимости элемента с ограничением по времени
        if (await this.closeAdButton.isVisible({ timeout })) {
            await this.closeAdButton.click();
        }
        } catch {
        // Если банер не появился — просто продолжаем выполнение теста
        }
    }
}

export default RoadmapPage;