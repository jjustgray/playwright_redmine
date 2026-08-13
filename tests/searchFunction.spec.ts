import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import SearchPage from '../pages/search.page';

test.describe('Redmine tests', () => {
  test.skip('TC-02: Search function by words in headers', async ({ page }) => {
    await page.goto('https://www.redmine.org/');

    const mainPage = new MainPage(page);
    await mainPage.findAndClickSearchButton();

    const searchPage = new SearchPage(page);
    await searchPage.verifySearchFormVisibility();
    await searchPage.findAndClickTitlesOnlyOption();
    await searchPage.findInputField();
    await searchPage.enterTextForSearch('Error');
    await searchPage.submitSearch();
    await searchPage.verifySearchResults('Error');
  });
});
