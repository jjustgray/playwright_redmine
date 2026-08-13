# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: featurePage.spec.ts >> Redmine tests >> TC-01: Navigation to "issue tracking system" feature page from main page
- Location: tests\featurePage.spec.ts:5:7

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\[^\)]*RedmineIssues/
Received string:  "https://www.redmine.org/projects/redmine/wiki/RedmineIssues"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    12 × locator resolved to <html lang="en">…</html>
       - unexpected value "https://www.redmine.org/projects/redmine/wiki/RedmineIssues"

```

```yaml
- list:
  - listitem:
    - link "Sign in":
      - /url: /login
  - listitem:
    - link "Register":
      - /url: /account/register
- list:
  - listitem:
    - link "Home":
      - /url: /
  - listitem:
    - link "Projects":
      - /url: /projects
  - listitem:
    - link "Help":
      - /url: https://www.redmine.org/guide
- link "Search":
  - /url: /projects/redmine/search?scope=subprojects
- text: ":"
- textbox "Search:"
- text: Redmine
- heading "Redmine" [level=1]
- list:
  - listitem:
    - link "Overview":
      - /url: /projects/redmine
  - listitem:
    - link "Download":
      - /url: /projects/redmine/wiki/Download
  - listitem:
    - link "Activity":
      - /url: /projects/redmine/activity
  - listitem:
    - link "Roadmap":
      - /url: /projects/redmine/roadmap
  - listitem:
    - link "Issues":
      - /url: /projects/redmine/issues
  - listitem:
    - link "News":
      - /url: /projects/redmine/news
  - listitem:
    - link "Wiki":
      - /url: /projects/redmine/wiki
  - listitem:
    - link "Forums":
      - /url: /projects/redmine/boards
  - listitem:
    - link "Repository":
      - /url: /projects/redmine/repository
- heading "Latest releases" [level=3]
- paragraph:
  - link "5.1.13 (2026-06-15)":
    - /url: /projects/redmine/wiki/Download
  - link "6.0.10 (2026-06-15)":
    - /url: /projects/redmine/wiki/Download
  - link "6.1.3 (2026-06-15)":
    - /url: /projects/redmine/wiki/Download
  - link "7.0.0 (2026-06-30)":
    - /url: /projects/redmine/wiki/Download
- heading "Resources" [level=3]
- paragraph:
  - link "User's Guide":
    - /url: /projects/redmine/wiki/Guide
  - link "Developer's Guide":
    - /url: /projects/redmine/wiki/Developer_Guide
  - link "Changelog":
    - /url: /projects/redmine/wiki/Changelog
  - text: ","
  - link "Security":
    - /url: /projects/redmine/wiki/Security_Advisories
  - link "FAQ":
    - /url: /projects/redmine/wiki/FAQ
  - text: ","
  - link "HowTo's":
    - /url: /projects/redmine/wiki/HowTos
  - link "Plugins":
    - /url: /plugins
  - text: ","
  - link "Themes":
    - /url: /projects/redmine/wiki/Theme_List
  - link "Privacy Policy":
    - /url: /projects/redmine/wiki/PrivacyPolicy
- heading "Core Development" [level=3]
- paragraph:
  - link "Official Subversion repository":
    - /url: https://svn.redmine.org/redmine/
  - link "GitHub Mirror":
    - /url: https://github.com/redmine/redmine
  - link "Continuous Integration":
    - /url: /projects/redmine/wiki/Continuous_Integration
- paragraph:
  - link:
    - /url: https://github.com/redmine/redmine/actions/workflows/tests.yml
  - link:
    - /url: https://github.com/redmine/redmine/actions/workflows/linters.yml
- heading "Wiki" [level=3]
- list:
  - listitem:
    - link "Start page":
      - /url: /
  - listitem:
    - link "Index by title":
      - /url: /projects/redmine/wiki/index
  - listitem:
    - link "Index by date":
      - /url: /projects/redmine/wiki/date_index
- insertion:
  - iframe
- paragraph:
  - link "Guide":
    - /url: /projects/redmine/wiki/Guide
  - text: »
  - link "User Guide":
    - /url: /projects/redmine/wiki/User_Guide
  - text: »
- heading "Issue Tracking" [level=1]
- list:
  - listitem:
    - strong: Table of contents
  - listitem:
    - link "Issue Tracking":
      - /url: "#Issue-Tracking"
    - list:
      - listitem:
        - link "Listing of the issue":
          - /url: "#Listing-of-the-issue"
        - list:
          - listitem:
            - link "Related issues":
              - /url: "#Related-issues"
          - listitem:
            - link "Watchers":
              - /url: "#Watchers"
          - listitem:
            - link "Associated revisions":
              - /url: "#Associated-revisions"
      - listitem:
        - link "Adding a new issue":
          - /url: "#Adding-a-new-issue"
      - listitem:
        - link "Updating an existing issue":
          - /url: "#Updating-an-existing-issue"
      - listitem:
        - link "Editing an existing issue's Subject or Description":
          - /url: "#Editing-an-existing-issues-Subject-or-Description"
      - listitem:
        - link "Subtasks":
          - /url: "#Subtasks"
        - list:
          - listitem:
            - link "Filtering & sorting":
              - /url: "#Filtering-amp-sorting"
          - listitem:
            - link "Relations between the parent task and its subtasks":
              - /url: "#Relations-between-the-parent-task-and-its-subtasks"
- paragraph: Issues are the heart of the Redmine business. An issue is bound to a project, owned by a user, can be related to a version, etc.
- heading "Listing of the issue" [level=2]
- paragraph: From a selected issue page, you can see the work in progress that is done to fix the issue. The messages are displayed in chronological order, (to change the order - see the setting in 'My Accounts'). It is possible to quote others' messages as well as to edit yours.
- heading "Related issues" [level=3]
- paragraph: "'Related issues' allow developers to link issues to each other in order to remove duplicates or simplify their workflow."
- text: "It is possible to link issues based on various relations. Current relations are:"
- list:
  - listitem:
    - strong: related to
    - text: "- Just adds a link to the other issue."
- list:
  - listitem:
    - strong: duplicates
    - text: "- Links issues so that closing one, will close the other (e.g. closing A will close B) For example, if issue B"
    - strong: duplicates
    - text: "A: - closing B will leave A open - closing A will automatically close B"
- list:
  - listitem:
    - strong: duplicated by
    - text: "- Reciprocal of"
    - emphasis: duplicates
    - text: . For example, if issue A is
    - strong: duplicated by
    - text: "issue B: - closing B will leave A open - closing A will automatically close B"
- list:
  - listitem:
    - strong: blocks
    - text: "- Links issues so that closing one can be blocked by an issue which is still open If issue B blocks A, A can't be closed unless B is."
  - listitem:
    - strong: blocked by
    - text: "- Reciprocal of"
    - emphasis: blocks
    - text: .
- list:
  - listitem:
    - strong: precedes
    - text: "- Links issues to define an \"order\", where A needs to be completed x days before B can be started on If B follows A, you can't give B a starting date equal or less than the ending date of A."
  - listitem:
    - strong: follows
    - text: "- Reciprocal of"
    - emphasis: precedes
    - text: . If issue B follows A (ex A ends the 21/04 and B begins the 22/04) and you add +2 day at the ending date of A, the starting and ending dates of B will be +2 too.
- list:
  - listitem:
    - strong: copied from
    - text: "- Links issues to identify whether it was copied, and from which issue it was copied from."
  - listitem:
    - strong: copied to
    - text: "- Reciprocal of"
    - emphasis: copied from
    - text: .
- paragraph:
  - img "Redmine Related Issues"
- paragraph:
  - text: Administrators can define the
  - link "permissions":
    - /url: /projects/redmine/wiki/RedmineRoles#Permissions
  - text: of users to add and edit such relations.
- insertion:
  - iframe
- heading "Watchers" [level=3]
- paragraph: Display a list of all the users who are watching this issue. If the issue is updated, those users will be notified.
- paragraph:
  - text: If you are logged in as a project administrator, it is possible for you to add users to the watch list on this page. By clicking on the Add link, a drop-down menu with a
  - strong: Add
  - text: button appear, which allows you to select which user to add to the watch list.
- paragraph:
  - img "Redmine Watchers"
- paragraph:
  - text: Administrators can define the
  - link "permissions":
    - /url: /projects/redmine/wiki/RedmineRoles#Permissions
  - text: of users to add/delete watchers as well as to see the list of watchers.
- heading "Associated revisions" [level=3]
- paragraph:
  - text: If the administrator has defined
  - link "Referencing Issues Keywords":
    - /url: /projects/redmine/wiki/RedmineSettings#Referencing-issues-in-commit-messages
  - text: ", a developer that uses such keyword(s) will see its commit message displayed on the issue page, under the Associated revisions block (generally to the right of the first reply)."
- paragraph:
  - img "Redmine Associated Revision"
- paragraph: Revisions can also be associated to issues manually, from a changeset (revision) view in the Repository browser. The manual associations are reversible. They can be revoked by using the broken chain icon to the right of an added association, again in the changeset view.
- paragraph
- heading "Adding a new issue" [level=2]
- insertion:
  - iframe
- paragraph:
  - text: People can create a new issue when they meet the
  - link "roles and permissions":
    - /url: /projects/redmine/wiki/RedmineRoles
  - text: configured by the Redmine Administrator (
  - 'link "Role: Issue Tracking > Add Issues"':
    - /url: /projects/redmine/wiki/RedmineRoles#Permissions
  - text: ). When creating a new issue, one of the most important items is the
  - link "tracker field":
    - /url: /projects/redmine/wiki/RedmineIssueTrackingSetup#Trackers
  - text: ", which defines the nature of the issue. By default, Redmine comes with three different trackers:"
  - emphasis: bug
  - text: ","
  - emphasis: feature
  - text: ", and"
  - emphasis: support
  - text: .
- heading "Updating an existing issue" [level=2]
- paragraph: "(TODO: describe and upload a screen-shot of update panel)"
- paragraph:
  - text: To edit the issue, Click
  - emphasis: Update
  - text: "link (having a pencil icon) at the top or the bottom of the issue page:"
- paragraph:
  - img "Screenshot for Update an existing issue"
- paragraph:
  - text: Depending you your role permissions (see
  - link "roles and permissions":
    - /url: /projects/redmine/wiki/RedmineRoles
  - text: ), you will see a complete or a limited set of editable issue properties.
- heading "Editing an existing issue's Subject or Description" [level=2]
- paragraph:
  - text: In order to edit an existing issue, your role has to have the
  - link "Issue Tracking > Edit Issues":
    - /url: /projects/redmine/wiki/RedmineRoles#Permissions
  - text: right in the
  - link "roles and permissions":
    - /url: /projects/redmine/wiki/RedmineRoles
  - text: configuration.
- list:
  - listitem: Open the issue
  - listitem:
    - text: Click
    - emphasis: Update
    - text: link (having a pen icon) at the top or the bottom of the issue page.
- paragraph: The description of the issue has pencil icon right next to it that you can click to change the description.
- paragraph:
  - img "New location to change the description of an issue"
- heading "Subtasks" [level=2]
- insertion
- paragraph:
  - text: Sometimes it is useful to break huge tasks down into smaller subtasks to have more control over the task or to assign smaller parts of it to different users. One can create a subtask by either clicking the 'Add' link in the subtasks section of the parent task or by filling the parents task id into the 'parents task' field of the subtask. This is also possible after creation by
  - link "updating the task":
    - /url: "#Updating-an-existing-issue"
  - text: . Because it's just a normal task a subtask can also have subtasks. There is no limit in the depth of this stack.
- paragraph:
  - text: Subtasks can belong to a different project than the parent task. This functionality is configurable in the
  - link "settings section":
    - /url: /projects/redmine/wiki/RedmineSettings#Allow-cross-project-subtasks
  - text: in the administration menu. Defining subtasks requires the permission 'Manage subtasks' which can be set in the
  - link "roles and permissions section":
    - /url: /projects/redmine/wiki/RedmineRoles
  - text: in the administration menu. If a project gets copied the whole tree beneath the parent task is copied, too. When copying only the parent task one can choose if the subtasks should also be copied.
- heading "Filtering & sorting" [level=3]
- paragraph: One can show the parents task id as sortable column in the issues list and there is also a filter option for it. When the list is sorted by the parent task id the subtasks hierarchy is displayed in an indented tree structure.
- paragraph: As long as the tasks share the same target version the tree structure is also visible in the gantt view.
- heading "Relations between the parent task and its subtasks" [level=3]
- paragraph: Some properties of the parent task are influenced by the subtasks underneath. The following relations exist between the parent task and its subtasks.
- list:
  - listitem: The parent task's done percentage is the weighted average ratio of subtasks.
  - listitem: The parent task's start is the lowest date of subtasks.
  - listitem: The parent task's due date is the highest due date of subtasks.
  - listitem: The parent task's spent time is the sum of the subtasks' spent times.
  - listitem: The parent task's estimation time is the sum of the subtasks' estimation times.
  - listitem: The parent task's priority is the highest of the subtasks' priorities.
  - listitem: Subtasks are rescheduled when a 'precedes' relation is set on a parent task.
- group "Files (10)"
- paragraph
- text: Powered by
- link "Redmine":
  - /url: https://www.redmine.org/
- text: © 2006-2023 Jean-Philippe Lang
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
- log
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | class MainPage {
  4  |     readonly page: Page;
  5  |     readonly featuresHeader: Locator;
  6  |     readonly issueTrackingSystemLink: Locator;
  7  | 
  8  |     constructor(page: Page) {
  9  |         this.page = page;
  10 |         this.featuresHeader = page.locator('h2:has(a[href="#Features"])');
  11 |         this.issueTrackingSystemLink = page.locator('a[href="/projects/redmine/wiki/RedmineIssues"]');
  12 |     }
  13 | 
  14 |     async verifyFeaturesHeaderVisibility() {
  15 |         await expect(this.featuresHeader).toBeVisible();
  16 |     }
  17 | 
  18 |     async findIssueTrackingSystemLink() {
  19 |         await expect(this.issueTrackingSystemLink).toBeVisible();
  20 |         await this.issueTrackingSystemLink.hover();
  21 |     }
  22 | 
  23 |     async clickIssueTrackingSystemLink() {
  24 |         await this.issueTrackingSystemLink.click();
  25 |     }
  26 | 
  27 |     async verifyIssueTrackingSystemPage() {
> 28 |         await expect(this.page).toHaveURL(/\[^\)]*RedmineIssues/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  29 |         await expect(this.page.locator('h1')).toHaveText('Issue Tracking');
  30 |     }
  31 | 
  32 | 
  33 | }
  34 | 
  35 | export default MainPage;
```