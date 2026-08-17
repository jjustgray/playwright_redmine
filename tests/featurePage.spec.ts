import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';

test.describe('Redmine tests', () => {
  test('TC-01: Navigation to "issue tracking system" feature page from main page', async ( { page } ) => {
    await page.goto('https://www.redmine.org/');

    const mainPage = new MainPage(page);

    await mainPage.verifyFeaturesHeaderVisibility();

    await mainPage.findIssueTrackingSystemLink();

    await mainPage.clickIssueTrackingSystemLink();

    await mainPage.verifyIssueTrackingSystemPage();
  });
});
