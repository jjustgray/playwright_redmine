import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import SearchPage from '../pages/search.page';

test.describe('Redmine tests', () => {
  test.skip('TC-02: Search function by words in headers', async ({ page }) => {
    await page.goto('https://www.redmine.org/');

    const mainPage = new MainPage(page);
    await expect(mainPage.searchButton).toBeVisible();
    await mainPage.findAndClickSearchButton();

    const searchPage = new SearchPage(page);
    await expect(searchPage.searchForm).toBeVisible();
    await expect(searchPage.titlesOnlyOption).toBeVisible();
    await searchPage.findAndClickTitlesOnlyOption();
    await searchPage.enterTextForSearch('Error');
    await expect(searchPage.submitButton).toBeVisible();
    await searchPage.submitSearch();
    await expect(searchPage.resultsTable).toBeVisible();
    
    const recordCount = await searchPage.recordTitles.count();
    expect(recordCount).toBeGreaterThan(3);
    for (let i = 0; i < 3; i++) {
      await expect(searchPage.recordTitles.nth(i)).toContainText('error', { ignoreCase: true });
    }
  });
});
