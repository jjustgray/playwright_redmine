import { test, expect } from '@playwright/test';
import IssuesPage from '../pages/issues.page';
import MainPage from '../pages/main.page';

test.describe('Redmine tests', () => {
  test.beforeEach('', async ({page}) => {
    await page.goto('https://www.redmine.org/');
    const mainPage = new MainPage(page);
    await mainPage.goToIssuesPage();
  });

  test('TC-04: Closed issue status is correct in table of issues and on their pages', async ( { page } ) => {
    const issuesPage = new IssuesPage(page);
    issuesPage.setClosedStatus();
    await issuesPage.submitForm();
    issuesPage.checkFirstRowStatus();
    await issuesPage.goToFirstRowPage();
    issuesPage.checkIssueStatus();
  });

  test('TC-05: Issue filter by category on issue page', async ( {page} ) => {
    const issuesPage = new IssuesPage(page);
    issuesPage.addCategoryFilter();
    await issuesPage.setCategory('18'); //category Feeds value_id
    await issuesPage.submitForm();
    await issuesPage.goToFirstRowPage();
    issuesPage.checkIssueCategory();
  });
});