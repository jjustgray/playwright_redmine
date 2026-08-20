import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';

test.describe('Redmine tests', () => {
  test('TC-01: Navigation to "issue tracking system" feature page from main page', async ( { page } ) => {
    await page.goto('https://www.redmine.org/');

    const mainPage = new MainPage(page);

    await expect(mainPage.featuresHeader).toBeVisible();
    await expect(mainPage.issueTrackingSystemLink).toBeVisible();
    await mainPage.clickIssueTrackingSystemLink();
    await expect(mainPage.page).toHaveURL(/RedmineIssues/);
    await expect(mainPage.issueTrackingSystemPageHeader).toBeVisible();
  });
});
