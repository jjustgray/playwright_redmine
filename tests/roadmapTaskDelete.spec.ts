import { test, expect } from '@playwright/test';
import MainPage from '../pages/main.page';
import RoadmapPage from '../pages/roadmap.page';

test.describe('Redmine tests', () => {
  test('TC-03: Delete task in roadmap (negative)', async ( { page } ) => {
    await page.goto('https://www.redmine.org/');

    const mainPage = new MainPage(page);
    await expect(mainPage.roadmapLink).toBeVisible();
    await mainPage.findAndOpenRoadmapPage();

    const roadmapPage = new RoadmapPage(page);
    await roadmapPage.closeAdIfPresent();
    const issueText = await roadmapPage.findFirstIssue();
    await roadmapPage.deleteIssue();
    expect(roadmapPage.subject.nth(0).innerText()).toBe(issueText);
  });
});
