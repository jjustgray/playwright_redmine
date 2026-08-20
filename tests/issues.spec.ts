import { test, expect } from '@playwright/test';
import IssuesPage from '../pages/issues.page';
import MainPage from '../pages/main.page';

test.describe('Redmine tests', () => {
  test.beforeEach('', async ({page}) => {
    await page.goto('https://www.redmine.org/');
    const mainPage = new MainPage(page);
    await expect(mainPage.issues).toBeVisible();
    await mainPage.goToIssuesPage();
  });

  test('TC-04: Closed issue status is correct in table of issues and on their pages', async ( { page } ) => {
    const issuesPage = new IssuesPage(page);
    await expect(issuesPage.statusFilterButton).toBeVisible();
    await issuesPage.setClosedStatus();
    await expect(issuesPage.submitFormButton).toBeVisible();
    await expect(issuesPage.submitFormButton).toBeEnabled();
    await issuesPage.submitForm();
    await expect(issuesPage.firstRowStatus).toHaveText('Closed');
    await expect(issuesPage.firstRowId).toBeVisible();
    await expect(issuesPage.firstRowId).toBeEnabled();
    await issuesPage.goToFirstRowPage();
    await expect(issuesPage.closedStatusSpan).toBeVisible();
  });

  test('TC-05: Issue filter by category on issue page', async ( {page} ) => {
    const issuesPage = new IssuesPage(page);
    await expect(issuesPage.addFilterButton).toBeVisible();
    await issuesPage.addCategoryFilter();
    await expect(issuesPage.operatorsCategoryButton).toBeVisible();
    await issuesPage.setCategory('18'); //category Feeds value_id
    await issuesPage.submitForm();
    await issuesPage.goToFirstRowPage();
    await expect(issuesPage.issueCategory).toHaveText('Feeds');
  });
});