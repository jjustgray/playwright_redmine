# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: featurePage.spec.ts >> Redmine tests >> TC-01: Navigation to "issue tracking system" feature page from main page
- Location: tests/featurePage.spec.ts:5:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Issue tracking system' })
Expected: visible
Error: strict mode violation: getByRole('link', { name: 'Issue tracking system' }) resolved to 2 elements:
    1) <div role="link" tabindex="0" data-google-vignette="false" data-google-interstitial="false" aria-label="Issue tracking system" class="google-anno-skip goog-rentry">…</div> aka getByRole('link', { name: 'Issue tracking system', exact: true })
    2) <a class="wiki-page" href="/projects/redmine/wiki/RedmineIssues">issue tracking system</a> aka getByRole('link', { name: 'issue tracking system', exact: true })

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('link', { name: 'Issue tracking system' })

```

# Page snapshot

```yaml
- generic [ref=e4]:
  - generic [ref=e5]:
    - generic [ref=e6]:
      - list:
        - listitem [ref=e7]:
          - link "Sign in" [ref=e8] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e9]:
          - link "Register" [ref=e10] [cursor=pointer]:
            - /url: /account/register
    - list:
      - listitem [ref=e11]:
        - link "Home" [ref=e12] [cursor=pointer]:
          - /url: /
      - listitem [ref=e13]:
        - link "Projects" [ref=e14] [cursor=pointer]:
          - /url: /projects
      - listitem [ref=e15]:
        - link "Help" [ref=e16] [cursor=pointer]:
          - /url: https://www.redmine.org/guide
  - generic [ref=e17]:
    - generic [ref=e18]:
      - generic [ref=e19]:
        - generic [ref=e20]:
          - link "Search" [ref=e21] [cursor=pointer]:
            - /url: /projects/redmine/search?scope=subprojects
          - text: ":"
        - textbox "Search:" [ref=e22]
      - generic [ref=e23]: Redmine
    - heading "Redmine" [level=1] [ref=e25]
    - list [ref=e27]:
      - listitem [ref=e28]:
        - link "Overview" [ref=e29] [cursor=pointer]:
          - /url: /projects/redmine
      - listitem [ref=e30]:
        - link "Download" [ref=e31] [cursor=pointer]:
          - /url: /projects/redmine/wiki/Download
      - listitem [ref=e32]:
        - link "Activity" [ref=e33] [cursor=pointer]:
          - /url: /projects/redmine/activity
      - listitem [ref=e34]:
        - link "Roadmap" [ref=e35] [cursor=pointer]:
          - /url: /projects/redmine/roadmap
      - listitem [ref=e36]:
        - link "Issues" [ref=e37] [cursor=pointer]:
          - /url: /projects/redmine/issues
      - listitem [ref=e38]:
        - link "News" [ref=e39] [cursor=pointer]:
          - /url: /projects/redmine/news
      - listitem [ref=e40]:
        - link "Wiki" [ref=e41] [cursor=pointer]:
          - /url: /projects/redmine/wiki
      - listitem [ref=e42]:
        - link "Forums" [ref=e43] [cursor=pointer]:
          - /url: /projects/redmine/boards
      - listitem [ref=e44]:
        - link "Repository" [ref=e45] [cursor=pointer]:
          - /url: /projects/redmine/repository
  - generic [ref=e46]:
    - generic [ref=e47]:
      - generic [ref=e48]:
        - heading "Latest releases" [level=3] [ref=e49]
        - paragraph [ref=e50]:
          - link "5.1.13 (2026-06-15)" [ref=e51] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
          - link "6.0.10 (2026-06-15)" [ref=e52] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
          - link "6.1.3 (2026-06-15)" [ref=e53] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
          - link "7.0.0 (2026-06-30)" [ref=e54] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
        - heading "Resources" [level=3] [ref=e55]
        - paragraph [ref=e56]:
          - link "User's Guide" [ref=e57] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Guide
          - link "Developer's Guide" [ref=e58] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Developer_Guide
          - link "Changelog" [ref=e59] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Changelog
          - text: ","
          - link "Security" [ref=e60] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Security_Advisories
          - link "FAQ" [ref=e61] [cursor=pointer]:
            - /url: /projects/redmine/wiki/FAQ
          - text: ","
          - link "HowTo's" [ref=e62] [cursor=pointer]:
            - /url: /projects/redmine/wiki/HowTos
          - link "Plugins" [ref=e63] [cursor=pointer]:
            - /url: /plugins
          - text: ","
          - link "Themes" [ref=e64] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Theme_List
          - link "Privacy Policy" [ref=e65] [cursor=pointer]:
            - /url: /projects/redmine/wiki/PrivacyPolicy
        - heading "Core Development" [level=3] [ref=e66]
        - paragraph [ref=e67]:
          - link "Official Subversion repository" [ref=e68] [cursor=pointer]:
            - /url: https://svn.redmine.org/redmine/
          - link "GitHub Mirror" [ref=e69] [cursor=pointer]:
            - /url: https://github.com/redmine/redmine
          - link "Continuous Integration" [ref=e70] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Continuous_Integration
        - paragraph [ref=e71]:
          - link [ref=e72] [cursor=pointer]:
            - /url: https://github.com/redmine/redmine/actions/workflows/tests.yml
          - link [ref=e73] [cursor=pointer]:
            - /url: https://github.com/redmine/redmine/actions/workflows/linters.yml
      - heading "Wiki" [level=3] [ref=e74]
      - list [ref=e75]:
        - listitem [ref=e76]:
          - link "Start page" [ref=e77] [cursor=pointer]:
            - /url: /
        - listitem [ref=e78]:
          - link "Index by title" [ref=e79] [cursor=pointer]:
            - /url: /projects/redmine/wiki/index
        - listitem [ref=e80]:
          - link "Index by date" [ref=e81] [cursor=pointer]:
            - /url: /projects/redmine/wiki/date_index
      - insertion [ref=e82]:
        - generic [ref=e85]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e87]: Discover more
          - link "Redmine plugin development" [ref=e88] [cursor=pointer]
          - link "Open source software" [ref=e93] [cursor=pointer]
          - link "Workflow automation tools" [ref=e98] [cursor=pointer]
          - link "Open Source" [ref=e103] [cursor=pointer]
          - link "Redmine hosting service" [ref=e108] [cursor=pointer]
          - link "Issue tracking system" [ref=e113] [cursor=pointer]
          - link "Gantt chart software" [ref=e118] [cursor=pointer]
          - link "Project management tools" [ref=e123] [cursor=pointer]
      - generic:
        - insertion:
          - iframe [ref=e129]:
            
    - generic [ref=e130]:
      - generic [ref=e131]:
        - heading "Redmine" [level=1] [ref=e132]
        - list [ref=e133]:
          - listitem [ref=e134]:
            - strong [ref=e135]: Table of contents
          - listitem [ref=e136]:
            - link "Redmine" [ref=e137] [cursor=pointer]:
              - /url: "#Redmine"
            - list [ref=e138]:
              - listitem [ref=e139]:
                - link "Features" [ref=e140] [cursor=pointer]:
                  - /url: "#Features"
              - listitem [ref=e141]:
                - link "Documentation" [ref=e142] [cursor=pointer]:
                  - /url: "#Documentation"
              - listitem [ref=e143]:
                - link "Online demo" [ref=e144] [cursor=pointer]:
                  - /url: "#Online-demo"
              - listitem [ref=e145]:
                - link "Support & getting help" [ref=e146] [cursor=pointer]:
                  - /url: "#Support-amp-getting-help"
              - listitem [ref=e147]:
                - link "Contributing and helping out" [ref=e148] [cursor=pointer]:
                  - /url: "#Contributing-and-helping-out"
              - listitem [ref=e149]:
                - link "Who uses Redmine?" [ref=e150] [cursor=pointer]:
                  - /url: "#Who-uses-Redmine"
              - listitem [ref=e151]:
                - link "Redmine books" [ref=e152] [cursor=pointer]:
                  - /url: "#Redmine-books"
        - paragraph [ref=e153]:
          - text: Redmine is a flexible
          - link "project management" [ref=e154] [cursor=pointer]:
            - /url: "#"
          - text: web application that can be self-hosted. It can be configured for different ways of working. Written using the Ruby on Rails framework, it is cross-platform and cross-database.
          - link "Redmine hosting service" [ref=e157] [cursor=pointer]:
            - generic [ref=e158]: Redmine
            - text: hosting service
        - paragraph [ref=e162]:
          - text: Redmine is
          - link "open source" [ref=e163] [cursor=pointer]:
            - /url: "#"
          - text: and released under the terms of the
          - link "GNU General Public License v2" [ref=e166] [cursor=pointer]:
            - /url: http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
          - text: (GPL).
        - heading "Features" [level=2] [ref=e167]
        - paragraph [ref=e168]: "Some of the main features of Redmine are:"
        - list [ref=e169]:
          - listitem [ref=e170]:
            - link "Multiple projects support" [ref=e171] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineProjects
          - listitem [ref=e172]:
            - text: Flexible
            - link "role based access control" [ref=e173] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineRoles
          - listitem [ref=e174]:
            - text: Flexible
            - link "issue tracking system" [ref=e175] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineIssues
          - listitem [ref=e176]:
            - link "Gantt chart" [ref=e177] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineGantt
            - text: and
            - link "calendar" [ref=e178] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineCalendar
          - listitem [ref=e179]:
            - link "News" [ref=e180] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineNews
            - text: ","
            - link "documents" [ref=e181] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineDocuments
            - text: "&"
            - link "files" [ref=e182] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineFiles
            - link "management" [ref=e183] [cursor=pointer]:
              - /url: "#"
          - listitem [ref=e186]: Feeds & email notifications
          - listitem [ref=e187]:
            - text: Per project
            - link "wiki" [ref=e188] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineWikis
          - listitem [ref=e189]:
            - text: Per project
            - link "forums" [ref=e190] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineForums
          - listitem [ref=e191]:
            - link "Time tracking" [ref=e192] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineTimeTracking
          - listitem [ref=e193]:
            - link "Custom fields" [ref=e194] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineCustomFields
            - text: for issues, time-entries, projects and users
          - listitem [ref=e195]:
            - link "SCM integration" [ref=e196] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineRepository
            - text: (Subversion, Git, Mercurial, Bazaar and CVS)
          - listitem [ref=e197]:
            - link "Issue creation via email" [ref=e198] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineReceivingEmails
          - listitem [ref=e199]:
            - text: Multiple
            - link "LDAP authentication" [ref=e200] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineLDAP
            - text: support
          - listitem [ref=e201]:
            - link "User self-registration" [ref=e202] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineRegister
            - text: support
          - listitem [ref=e203]: Multilanguage support
          - listitem [ref=e204]:
            - link "Multiple databases" [ref=e205] [cursor=pointer]:
              - /url: /projects/redmine/wiki/RedmineInstall#Supported-database-back-ends
            - text: support
        - paragraph [ref=e206]:
          - text: Read more about
          - link "Redmine features" [ref=e207] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Features
          - text: .
        - heading "Documentation" [level=2] [ref=e208]
        - insertion [ref=e210]:
          - generic [ref=e213]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=e215]: Discover more
            - link "Project Management" [ref=e216] [cursor=pointer]
            - link "Software customization service" [ref=e221] [cursor=pointer]
            - link "Software development" [ref=e226] [cursor=pointer]
        - paragraph [ref=e231]:
          - text: You can read the
          - strong [ref=e232]:
            - link "Redmine guide" [ref=e233] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Guide
          - text: .
          - link "Redmine hosting service" [ref=e234] [cursor=pointer]:
            - generic [ref=e235]: Redmine
            - text: hosting service
        - list [ref=e239]:
          - listitem [ref=e240]:
            - link "User's Guide" [ref=e241] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Guide
          - listitem [ref=e242]:
            - link "Developer's Guide" [ref=e243] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Developer_Guide
          - listitem [ref=e244]:
            - link "DeepWiki Documentation" [ref=e245] [cursor=pointer]:
              - /url: https://deepwiki.com/redmine/redmine
            - text: (Auto-generated by DeepWiki)
        - text: "Other resources:"
        - list [ref=e246]:
          - listitem [ref=e247]:
            - link "Changelog" [ref=e248] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Changelog
          - listitem [ref=e249]:
            - link "Security Advisories" [ref=e250] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Security_Advisories
          - listitem [ref=e251]:
            - link "Frequently Asked Questions" [ref=e252] [cursor=pointer]:
              - /url: /projects/redmine/wiki/FAQ
          - listitem [ref=e253]:
            - link "HowTos" [ref=e254] [cursor=pointer]:
              - /url: /projects/redmine/wiki/HowTos
          - listitem [ref=e255]:
            - link "Plugins" [ref=e256] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Plugins
          - listitem [ref=e257]:
            - link "Themes" [ref=e258] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Themes
          - listitem [ref=e259]:
            - link "Logo and Icon" [ref=e260] [cursor=pointer]:
              - /url: /projects/redmine/wiki/Logo
          - listitem [ref=e261]:
            - link "Third Party Tools" [ref=e262] [cursor=pointer]:
              - /url: /projects/redmine/wiki/ThirdPartyTools
        - heading "Online demo" [level=2] [ref=e263]
        - paragraph [ref=e264]:
          - text: A shared online
          - emphasis [ref=e265]: unofficial
          - text: demo site can be found at
          - link "https://demo.redminecloud.net/" [ref=e266] [cursor=pointer]:
            - /url: https://demo.redminecloud.net/
          - text: . It has been set up to give registered users the ability to create their own projects. This means that once you register, you can create your own project on there and try out the project administration features. Please note that this demo site is an unofficial, third-party site and has no connection to Redmine.org.
        - heading "Support & getting help" [level=2] [ref=e267]
        - paragraph [ref=e268]:
          - text: For getting help or discussing Redmine, you can browse the
          - strong [ref=e269]:
            - link "Redmine forums" [ref=e270] [cursor=pointer]:
              - /url: http://www.redmine.org/projects/redmine/boards
          - text: hosted right here in Redmine.
        - paragraph [ref=e271]:
          - text: We also have a
          - strong [ref=e272]:
            - link "chatroom" [ref=e273] [cursor=pointer]:
              - /url: /projects/redmine/wiki/IRC
          - text: "-"
          - 'link "join #redmine" [ref=e274] [cursor=pointer]':
            - /url: https://web.libera.chat/?channel=#redmine
          - text: on the
          - link "libera.chat" [ref=e275] [cursor=pointer]:
            - /url: https://libera.chat
          - text: IRC network.
        - paragraph [ref=e276]:
          - text: There's also an unofficial workspace on
          - strong [ref=e277]:
            - link "Slack" [ref=e278] [cursor=pointer]:
              - /url: https://join.slack.com/t/redmineorg/shared_invite/zt-ew74bkww-9~Cs~L2oSioRXDljumZ_zg
          - text: where you can ask questions and participate in discussions with other Redmine users.
        - paragraph [ref=e279]:
          - text: Before submitting a bug report, a patch or a feature request here, please read the
          - link "Submission guidelines" [ref=e280] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Submissions
          - text: .
        - heading "Contributing and helping out" [level=2] [ref=e281]
        - paragraph [ref=e282]:
          - text: Redmine is built and maintained by community volunteers. If you enjoy using it and would like to give back to the community, the
          - link "Contribute" [ref=e283] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Contribute
          - text: page has several ideas. Software development experience is not required. Check out the
          - link "Teams" [ref=e284] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Teams
          - text: Page if you are interested in a specific area to contribute regularly.
        - paragraph [ref=e285]:
          - text: You can also make a donation and get listed on the
          - link "Redmine Donors page" [ref=e286] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Donors
          - text: .
        - heading "Who uses Redmine?" [level=2] [ref=e287]
        - paragraph [ref=e288]:
          - link "This page lists" [ref=e289] [cursor=pointer]:
            - /url: /projects/redmine/wiki/WeAreUsingRedmine
          - text: some companies and projects using Redmine.
        - heading "Redmine books" [level=2] [ref=e290]
        - table [ref=e291]:
          - rowgroup [ref=e292]:
            - row [ref=e293]:
              - cell [ref=e294]:
                - link [ref=e295] [cursor=pointer]:
                  - /url: https://www.packtpub.com/product/mastering-redmine-second-edition/9781785881305
              - cell [ref=e296]:
                - link [ref=e297] [cursor=pointer]:
                  - /url: http://www.packtpub.com/redmine-plugin-extension-and-development/book
              - cell [ref=e298]:
                - link [ref=e299] [cursor=pointer]:
                  - /url: https://www.packtpub.com/big-data-and-business-intelligence/redmine-cookbook
            - row [ref=e300]:
              - cell [ref=e301]:
                - emphasis [ref=e302]: Mastering Redmine 2nd Edition
                - text: is a comprehensive guide with tips, tricks and best practices for using Redmine.You can
                - link "buy it online" [ref=e303] [cursor=pointer]:
                  - /url: https://www.packtpub.com/product/mastering-redmine-second-edition/9781785881305
                - text: .
              - cell [ref=e304]:
                - emphasis [ref=e305]: Redmine Plugin Extension and Development
                - text: provides an overview of the tools available to developers who want to extend Redmine to work their way.You can
                - link "buy it online" [ref=e306] [cursor=pointer]:
                  - /url: https://www.packtpub.com/product/redmine-plugin-extension-and-development/9781783288748
                - text: .
              - cell [ref=e307]:
                - emphasis [ref=e308]: Redmine Cookbook
                - text: ": over 80 hands-on recipes to improve your skills in project management, team management, process improvement, and Redmine administration.You can"
                - link "buy it online" [ref=e309] [cursor=pointer]:
                  - /url: https://www.packtpub.com/product/redmine-cookbook/9781785286131
                - text: .
      - group "Files (0)" [ref=e310]
      - paragraph [ref=e312]: locked
  - generic [ref=e313]:
    - text: Powered by
    - link "Redmine" [ref=e314] [cursor=pointer]:
      - /url: https://www.redmine.org/
    - text: © 2006-2023 Jean-Philippe Lang
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | import MainPage from '../pages/main.page';
  3  | 
  4  | test.describe('Redmine tests', () => {
  5  |   test('TC-01: Navigation to "issue tracking system" feature page from main page', async ( { page } ) => {
  6  |     await page.goto('https://www.redmine.org/');
  7  | 
  8  |     const mainPage = new MainPage(page);
  9  | 
  10 |     await expect(mainPage.featuresHeader).toBeVisible();
> 11 |     await expect(mainPage.issueTrackingSystemLink).toBeVisible();
     |                                                    ^ Error: expect(locator).toBeVisible() failed
  12 |     await mainPage.clickIssueTrackingSystemLink();
  13 |     await expect(mainPage.page).toHaveURL(/RedmineIssues/);
  14 |     await expect(mainPage.issueTrackingSystemPageHeader).toBeVisible();
  15 |   });
  16 | });
  17 | 
```