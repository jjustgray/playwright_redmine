import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';

test.describe('Redmine tests', () => {
  test.beforeEach(async ( {page}) => {
    await page.goto('https://www.redmine.org/projects/redmine/issues');
  });

  test('TC-04: Closed issue status is correct in table of issues and on their pages', async ( { page } ) => {
    
  });
});