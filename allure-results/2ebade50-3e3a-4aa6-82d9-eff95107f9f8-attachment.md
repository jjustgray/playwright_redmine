# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: searchFunction.spec.ts >> Redmine tests >> TC-02: Search function by words in headers
- Location: tests\searchFunction.spec.ts:6:7

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('dl#search-results dt a')
Expected: visible
Error: strict mode violation: locator('dl#search-results dt a') resolved to 25 elements:
    1) <a href="/projects/redmine/repository/svn/revisions/24866">…</a> aka getByRole('link', { name: 'Revision 24866 (svn): Fixes' })
    2) <a href="/issues/44228">…</a> aka getByRole('link', { name: 'Defect #44228 (New):' })
    3) <a href="/issues/44227">…</a> aka getByRole('link', { name: 'Defect #44227 (New): Internal' })
    4) <a href="/issues/44218">…</a> aka getByRole('link', { name: 'Defect #44218 (New): Log time' })
    5) <a href="/issues/44132">…</a> aka getByRole('link', { name: 'Defect #44132 (New): Project' })
    6) <a href="/projects/redmine/repository/svn/revisions/24678">…</a> aka getByRole('link', { name: 'Revision 24678 (svn): Remove' })
    7) <a href="/projects/redmine/repository/svn/revisions/24674">Revision 24674 (svn): Fix stored XSS in Textile f…</a> aka getByRole('link', { name: 'Revision 24674 (svn): Fix' })
    8) <a href="/projects/redmine/repository/svn/revisions/24656">…</a> aka getByRole('link', { name: 'Revision 24656 (svn): Fix' })
    9) <a href="/boards/2/topics/72179?r=72181#message-72181">…</a> aka getByRole('link', { name: 'Help: RE: Server returns' }).first()
    10) <a href="/boards/2/topics/72179?r=72180#message-72180">…</a> aka getByRole('link', { name: 'Help: RE: Server returns' }).nth(1)
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('dl#search-results dt a')

```

# Page snapshot

```yaml
- generic [ref=f29e1]:
  - generic [ref=f29e4]:
    - generic [ref=f29e5]:
      - generic [ref=f29e6]:
        - list:
          - listitem [ref=f29e7]:
            - link "Sign in" [ref=f29e8]:
              - /url: /login
          - listitem [ref=f29e9]:
            - link "Register" [ref=f29e10]:
              - /url: /account/register
      - list:
        - listitem [ref=f29e11]:
          - link "Home" [ref=f29e12]:
            - /url: /
        - listitem [ref=f29e13]:
          - link "Projects" [ref=f29e14]:
            - /url: /projects
        - listitem [ref=f29e15]:
          - link "Help" [ref=f29e16]:
            - /url: https://www.redmine.org/guide
    - generic [ref=f29e17]:
      - generic [ref=f29e18]:
        - generic [ref=f29e19]:
          - generic [ref=f29e20]:
            - link "Search" [ref=f29e21]:
              - /url: /projects/redmine/search?scope=subprojects
            - text: ":"
          - textbox "Search:" [ref=f29e22]: Error
        - generic [ref=f29e23]: Redmine
      - heading "Redmine" [level=1] [ref=f29e25]
      - list [ref=f29e27]:
        - listitem [ref=f29e28]:
          - link "Overview" [ref=f29e29]:
            - /url: /projects/redmine
        - listitem [ref=f29e30]:
          - link "Download" [ref=f29e31]:
            - /url: /projects/redmine/wiki/Download
        - listitem [ref=f29e32]:
          - link "Activity" [ref=f29e33]:
            - /url: /projects/redmine/activity
        - listitem [ref=f29e34]:
          - link "Roadmap" [ref=f29e35]:
            - /url: /projects/redmine/roadmap
        - listitem [ref=f29e36]:
          - link "Issues" [ref=f29e37]:
            - /url: /projects/redmine/issues
        - listitem [ref=f29e38]:
          - link "News" [ref=f29e39]:
            - /url: /projects/redmine/news
        - listitem [ref=f29e40]:
          - link "Wiki" [ref=f29e41]:
            - /url: /projects/redmine/wiki
        - listitem [ref=f29e42]:
          - link "Forums" [ref=f29e43]:
            - /url: /projects/redmine/boards
        - listitem [ref=f29e44]:
          - link "Repository" [ref=f29e45]:
            - /url: /projects/redmine/repository
    - generic [ref=f29e46]:
      - generic [ref=f29e47]:
        - insertion [ref=f29e48]:
          - generic [ref=f29e51]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=f29e53]: Discover more
            - link "Project" [ref=f29e54] [cursor=pointer]
            - link "customers" [ref=f29e59] [cursor=pointer]
            - link "Technical Reference" [ref=f29e64] [cursor=pointer]
            - link "Project Management" [ref=f29e69] [cursor=pointer]
            - link "manage" [ref=f29e74] [cursor=pointer]
            - link "Networking" [ref=f29e79] [cursor=pointer]
            - link "Human Resources" [ref=f29e84] [cursor=pointer]
            - link "Business & Productivity Software" [ref=f29e89] [cursor=pointer]
        - generic:
          - insertion:
            - iframe [ref=f29e95]:
              
      - generic [ref=f29e96]:
        - heading "Search" [level=2] [ref=f29e97]
        - generic [ref=f29e98]:
          - generic [ref=f29e99]:
            - generic [ref=f29e100]: Searchfield
            - paragraph [ref=f29e101]:
              - textbox "Searchfield" [active] [ref=f29e102]: Error
              - generic [ref=f29e103]: Search scope
              - combobox "Search scope" [ref=f29e104]:
                - option "All Projects"
                - option "Redmine and its subprojects" [selected]
                - option "Redmine"
              - generic [ref=f29e105]:
                - checkbox "All words" [checked] [ref=f29e106]
                - text: All words
              - generic [ref=f29e107]:
                - checkbox "Search titles only" [checked] [ref=f29e108]
                - text: Search titles only
            - group [ref=f29e109]:
              - link "Check all / Uncheck all" [ref=f29e111]:
                - /url: "#"
              - paragraph [ref=f29e112]:
                - generic [ref=f29e113]:
                  - checkbox "Issues" [checked] [ref=f29e114]
                  - link "Issues" [ref=f29e115]:
                    - /url: "#"
                - generic [ref=f29e116]:
                  - checkbox "News" [checked] [ref=f29e117]
                  - link "News" [ref=f29e118]:
                    - /url: "#"
                - generic [ref=f29e119]:
                  - checkbox "Documents" [checked] [ref=f29e120]
                  - link "Documents" [ref=f29e121]:
                    - /url: "#"
                - generic [ref=f29e122]:
                  - checkbox "Changesets" [checked] [ref=f29e123]
                  - link "Changesets" [ref=f29e124]:
                    - /url: "#"
                - generic [ref=f29e125]:
                  - checkbox "Wiki pages" [checked] [ref=f29e126]
                  - link "Wiki pages" [ref=f29e127]:
                    - /url: "#"
                - generic [ref=f29e128]:
                  - checkbox "Messages" [checked] [ref=f29e129]
                  - link "Messages" [ref=f29e130]:
                    - /url: "#"
                - generic [ref=f29e131]:
                  - checkbox "Projects" [checked] [ref=f29e132]
                  - link "Projects" [ref=f29e133]:
                    - /url: "#"
                - generic [ref=f29e134]:
                  - checkbox "Redmine plugins" [checked] [ref=f29e135]
                  - link "Redmine plugins" [ref=f29e136]:
                    - /url: "#"
                - link "Content Management" [ref=f29e137] [cursor=pointer]:
                  - generic [ref=f29e138]: Content
                  - text: Management
            - group "Options" [ref=f29e142]
          - paragraph [ref=f29e144]:
            - button "Search" [ref=f29e145] [cursor=pointer]
        - generic [ref=f29e146]:
          - list:
            - listitem [ref=f29e147]:
              - link "Messages (5042)" [ref=f29e148]:
                - /url: /projects/redmine/search?all_words=1&messages=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f29e149]:
              - link "Issues (1407)" [ref=f29e150]:
                - /url: /projects/redmine/search?all_words=1&issues=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f29e151]:
              - link "Changesets (872)" [ref=f29e152]:
                - /url: /projects/redmine/search?all_words=1&changesets=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f29e153]:
              - link "Wiki pages (1)" [ref=f29e154]:
                - /url: /projects/redmine/search?all_words=1&q=Error&scope=subprojects&titles_only=1&wiki_pages=1
        - heading "Results (7322)" [level=3] [ref=f29e155]
        - generic [ref=f29e156]:
          - term [ref=f29e157]:
            - 'link "Revision 24866 (svn): Fixes \"''Proc.new'': tried to create Proc object without a block (ArgumentError)\" error introduced by r24865 (#43209)." [ref=f29e158]':
              - /url: /projects/redmine/repository/svn/revisions/24866
          - definition [ref=f29e159]: 2026-07-28 00:20
          - term [ref=f29e160]:
            - 'link "Defect #44228 (New): Uploading an attachment ... te in the filename causes an Internal Server Error" [ref=f29e161]':
              - /url: /issues/44228
          - definition [ref=f29e162]:
            - generic [ref=f29e163]: "Uploading an attachment with a filename that ... lename=hello%00world.txt@, raises an ArgumentError and results in an Internal Server Error. This issue was originally pointed out by us ... ile.extname(filename)@. Ruby raises @ArgumentError: path name contains null byte@ when the file ... causing Redmine to return an Internal Server Error instead of handling the input gracefully. ... istent with @Attachment#sanitize_filename@."
            - text: 2026-07-03 04:28
          - term [ref=f29e164]:
            - 'link "Defect #44227 (New): Internal Server Error(500) due to null byte in attachment filename" [ref=f29e165]':
              - /url: /issues/44227
          - definition [ref=f29e166]:
            - generic [ref=f29e167]: "Hi, While generating the \"Project Health R ... e process was terminating with the following error. <pre> [2026-07-01T15:38:09.707910 #3483] ERROR -- : [abae02e9-5c6e-4629-8705-2d36c2d37c30] error: /usr/share/redmine/instances/default/plugin ... name': path name contains null byte (ArgumentError) extension = File.extname(attachmen ... to find out which attachment was causing the error. <pre> !!! ANALYSING: ID: 7784 - NAME: \" ... -e7cdf6ef0e2a] Completed 500 Internal Server Error in 9ms (ActiveRecord: 3.4ms (9 queries, 0 ca ... 3acb3e9-28fb-4773-b83a-e7cdf6ef0e2a] ArgumentError (path name contains null byte): [53acb3e9-2 ... XXXXXXXX\" LocalPath = \"/home/hahayidu/TestError.txt\" with open(LocalPath, \"w\", encoding=\"ut ... is is the test\") BrokenFileName = \"Test%00Error..."
            - text: 2026-07-02 19:47
          - term [ref=f29e168]:
            - 'link "Defect #44218 (New): Log time block disappears on validation error when closing issue with \"Accept time logs on closed issues\" disabled" [ref=f29e169]':
              - /url: /issues/44218
          - definition [ref=f29e170]:
            - generic [ref=f29e171]: "## Steps to reproduce 1. Have \"Accept time ... sible so the user can correct the validation error. ## Actual behavior The Log time block disappears after the validation error is shown, making it impossible to correct ... _loggable? || (!@issue.was_closed? && @issue.errors.any?) %> This uses the existing `was_clo ... iginal status before the failed save attempt."
            - text: 2026-06-26 14:32
          - term [ref=f29e172]:
            - 'link "Defect #44132 (New): Project creation returns HTTP 500 (`Mysql2::Error: Record has changed since last read in table ... rrent project create/destroy on MySQL/MariaDB" [ref=f29e173]':
              - /url: /issues/44132
          - definition [ref=f29e174]:
            - generic [ref=f29e175]: "Note: the bug report details were created wit ... *destroyed* at the same time. The underlying error is: <pre>ActiveRecord::StatementInvalid (Mysql2::Error: Record has changed since last read in tabl ... restarting transaction)</pre> (MariaDB error *1020*, @ER_CHECKREAD@.) The exception is no ... The create transaction aborts with @Mysql2::Error: Record has changed since last read in table ... ERENT project Completed 500 Internal Server Error in 56ms (ActiveRecord: 37.9ms (21 queries, 2 ... - : ActiveRecord::StatementInvalid (Mysql2::Error: Record has changed since last read in table ... restarting transaction): Causes: Mysql2::Error (Record has changed since last read in table ... are broken, # this will run into deadlock errors all the time otherwise. Issue.with_advis ... orage&#45;engine level on MariaDB, producing error..."
            - text: 2026-06-01 11:21
          - term [ref=f29e176]:
            - 'link "Revision 24678 (svn): Remove unused i18n key: error_not_allowed_to_log_time_for_other_users (#44065)." [ref=f29e177]':
              - /url: /projects/redmine/repository/svn/revisions/24678
          - definition [ref=f29e178]: 2026-05-22 06:26
          - term [ref=f29e179]:
            - 'link "Revision 24674 (svn): Fix stored XSS in Textile formatter via code class bypass (#44047)." [ref=f29e180]':
              - /url: /projects/redmine/repository/svn/revisions/24674
          - definition [ref=f29e181]:
            - generic [ref=f29e182]: "RedCloth3#rip_offtags skipped HTML-escaping w ... left children intact -- letting <script>, onerror handlers, and javascript: links survive. Fi ... node.inner_html with escaped node.inner_text."
            - text: 2026-05-21 19:24
          - term [ref=f29e183]:
            - 'link "Revision 24656 (svn): Fix syntax error (#43640)." [ref=f29e184]':
              - /url: /projects/redmine/repository/svn/revisions/24656
          - definition [ref=f29e185]: 2026-05-15 10:13
          - term [ref=f29e186]:
            - 'link "Help: RE: Server returns status 403 / several errors" [ref=f29e187]':
              - /url: /boards/2/topics/72179?r=72181#message-72181
          - definition [ref=f29e188]:
            - generic [ref=f29e189]: Hello Florian Thank you for your helpful t ... ys nearly at our wits' end over the numerous errors, the problem turned out to be very easy to ... had been altered in a way that caused these errors. We didn't need to investigate any further.
            - text: 2026-05-12 07:51
          - term [ref=f29e190]:
            - 'link "Help: RE: Server returns status 403 / several errors" [ref=f29e191]':
              - /url: /boards/2/topics/72179?r=72180#message-72180
          - definition [ref=f29e192]:
            - generic [ref=f29e193]: Hi Michael, this is expected behavior in R ... ine deletes it automatically. BR Florian
            - text: 2026-05-10 21:26
          - term [ref=f29e194]:
            - 'link "Help: Server returns status 403 / several errors" [ref=f29e195]':
              - /url: /boards/2/topics/72179
          - definition [ref=f29e196]:
            - generic [ref=f29e197]: Hello Although my system is up to date, we have numerous errors that make it impossible to work reliably. ... srf-Token request header is present.* The errors occur (permission denied) when editing TRAC ... are correct. Any idea, how to solve? The errors occured from one day to the next. Alle Plug ... updated to the newest version. BR, Michael
            - text: 2026-05-10 14:42
          - term [ref=f29e198]:
            - 'link "Help: RE: internal server error after moving the docker container to another server" [ref=f29e199]':
              - /url: /boards/2/topics/68581?r=72140#message-72140
          - definition [ref=f29e200]:
            - generic [ref=f29e201]: The config directory of Redmine contains a lo ... @config/secrets.yml@ depending on your setup
            - text: 2026-04-09 17:03
          - term [ref=f29e202]:
            - 'link "Revision 24514 (svn): Fixes argumentError occurs on /oauth/authorize when REST API is disabled (#43698)." [ref=f29e203]':
              - /url: /projects/redmine/repository/svn/revisions/24514
          - definition [ref=f29e204]: 2026-03-19 07:13
          - term [ref=f29e205]:
            - 'link "Revision 24439 (svn): Improve visibility of error message during file upload (#43381)." [ref=f29e206]':
              - /url: /projects/redmine/repository/svn/revisions/24439
          - definition [ref=f29e207]:
            - generic [ref=f29e208]: Patch by Kenta Kumojima (user:kumojima).
            - text: 2026-02-20 23:45
          - term [ref=f29e209]:
            - 'link "Open discussion: Fix for FIPS systems: OpenSSL::Digest::DigestError (Digest initialization failed: initialization error)" [ref=f29e210]':
              - /url: /boards/1/topics/72100
          - definition [ref=f29e211]:
            - generic [ref=f29e212]: "After installing Redmine 6.1.1 on RedHat 9.7 ... oduction.log showed: \"OpenSSL::Digest::DigestError (Digest initialization failed: initialization error)\" Fix: added a line to config/application ... SSL::Digest::SHA256 Hope this is useful!"
            - text: 2026-02-18 16:23
          - term [ref=f29e213]:
            - 'link "Defect #43809 (Closed): db migrate error after upgrade to Redmine 6.1.0.devel.24240" [ref=f29e214]':
              - /url: /issues/43809
          - definition [ref=f29e215]:
            - generic [ref=f29e216]: "Error message: bundle exec rake db:migrate RAIL ... ** Execute environment rake aborted! NameError: uninitialized constant ActiveJob::QueueAdapters::SuckerPunchAdapter (NameError) const_get(name.to_s.camelize << ... db:migrate => db:load_config => environment"
            - text: 2026-02-10 08:40
          - term [ref=f29e217]:
            - 'link "Defect #43807 (New): Internal Server Error when posting SQL into Comment" [ref=f29e218]':
              - /url: /issues/43807
          - definition [ref=f29e219]:
            - generic [ref=f29e220]: "Hey Guys, First of all, thanks for your awes ... e SQL command and Redmine throws an HTML 500 error. I'm not really sure if it's also a security ... m dbo.tbl_Rolle; </code></pre> The Error in production.log <pre><code class=\"shell\"> ActiveRecord::StatementInvalid (TinyTds::Error: Explicit value must be specified for identi ... TION identity column.): Causes: TinyTds::Error (Explicit value must be specified for identi ... 2.3 | | Database Adapter | SQLServer |"
            - text: 2026-02-09 14:02
          - term [ref=f29e221]:
            - 'link "Defect #43699 (Closed): Fatal error during database migration process" [ref=f29e222]':
              - /url: /issues/43699
          - definition [ref=f29e223]:
            - generic [ref=f29e224]: "So a few years back (2019) we switched from b ... tweaking the running MariaDB instance had an error about `oauth_applications` already existing. ... tables and tried a third time. The original error about renaming the (now non-existent) table ... make any more sense to a Redmine developer."
            - text: 2026-01-21 02:52
          - term [ref=f29e225]:
            - 'link "Defect #43698 (Closed): ArgumentError occurs on /oauth/authorize when REST API is disabled" [ref=f29e226]':
              - /url: /issues/43698
          - definition [ref=f29e227]:
            - generic [ref=f29e228]: "When the REST web service is disabled in Redm ... ation endpoint causes an exception: @ArgumentError (wrong number of arguments (given 1, expecte ... of returning a normal 403 response: @ArgumentError (wrong number of arguments (given 1, expecte ... ception happens when render_403 calls render_error. However, Doorkeeper::AuthorizationController also defines a method named render_error, and that method takes no arguments. Due to ... precedence, the Doorkeeper version of render_error is called instead of Redmine’s render_error, which leads to: * Redmine calls: render_error <something> * Doorkeeper receives 1 argument but expects 0 → ArgumentError h3. Notes Normally, OAuth cannot be us ... d this during testing and created this issue."
            - text: 2026-01-21 01:38
          - term [ref=f29e229]:
            - 'link "Revision 24294 (svn): Integrate flash and error messages RTL styles from rtl.css into application.css using logical properties (#43515)." [ref=f29e230]':
              - /url: /projects/redmine/repository/svn/revisions/24294
          - definition [ref=f29e231]: 2026-01-11 03:47
          - term [ref=f29e232]:
            - 'link "Revision 24259 (svn): Fix 500 error when saving a custom field with an invalid regular expression (#43521)." [ref=f29e233]':
              - /url: /projects/redmine/repository/svn/revisions/24259
          - definition [ref=f29e234]: 2026-01-05 09:21
          - term [ref=f29e235]:
            - 'link "Revision 24234 (svn): Fixes error executing the include macro (Page not found) in projects list (#43526)." [ref=f29e236]':
              - /url: /projects/redmine/repository/svn/revisions/24234
          - definition [ref=f29e237]:
            - generic [ref=f29e238]: Patch by Mizuki ISHIKAWA (user:ishikawa999).
            - text: 2025-12-28 03:55
          - term [ref=f29e239]:
            - 'link "Revision 24230 (svn): Revert r24229 (#43619)." [ref=f29e240]':
              - /url: /projects/redmine/repository/svn/revisions/24230
          - definition [ref=f29e241]:
            - generic [ref=f29e242]: The change causes PG::GroupingError on PostgreSQL.
            - text: 2025-12-24 08:05
          - term [ref=f29e243]:
            - 'link "Defect #43572 (Closed): OpenSSL digest initialization error on accessing Activity" [ref=f29e244]':
              - /url: /issues/43572
          - definition [ref=f29e245]:
            - generic [ref=f29e246]: "I've recently migrated a database/install fro ... all projects), it throws an internal server error. The logs seem to indicate it's an issue wit ... -3185be462982] Completed 500 Internal Server Error in 25ms (ActiveRecord: 11.3ms (20 queries, 1 ... 26-a21f-3185be462982] OpenSSL::Digest::DigestError (Digest initialization failed: initialization error): [d777ae79-7a3b-4326-a21f-3185be462982] [ ... no plugin installed MySQL Version: 8.4"
            - text: 2025-12-09 15:51
          - term [ref=f29e247]:
            - 'link "Defect #43526 (Closed): When using the include macro in the project description, an execution error occurs in the project list (list view)" [ref=f29e248]':
              - /url: /issues/43526
          - definition [ref=f29e249]:
            - generic [ref=f29e250]: When the include macro is used in a project’s ... ect list in board view, but it fails with an error in the project list in list view. *Steps ... the macro fails to render and the following error is shown instead of the description. @Error executing the include macro (Page not found) ... d load, and it results in a “Page not found” error. When the project is explicitly specified, ... views, including the project list list view.
            - text: 2025-11-26 01:58
        - generic [ref=f29e251]:
          - list [ref=f29e252]:
            - listitem [ref=f29e253]: « Previous
            - listitem [ref=f29e254]: "1"
            - listitem [ref=f29e255]:
              - link "2" [ref=f29e256]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=2&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f29e257]:
              - link "3" [ref=f29e258]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=3&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f29e259]: …
            - listitem [ref=f29e260]:
              - link "293" [ref=f29e261]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=293&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f29e262]:
              - link "Next »" [ref=f29e263]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=2&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
          - generic [ref=f29e264]: (1-25/7322)
    - generic [ref=f29e265]:
      - text: Powered by
      - link "Redmine" [ref=f29e266]:
        - /url: https://www.redmine.org/
      - text: © 2006-2023 Jean-Philippe Lang
  - log [ref=f29e267]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | class SearchPage {
  4  |     readonly page: Page;
  5  |     readonly searchForm: Locator;
  6  |     readonly titlesOnlyOption: Locator;
  7  |     readonly inputField: Locator;
  8  |     readonly submitButton: Locator;
  9  |     readonly resultsTable: Locator;
  10 |     readonly recordTitles: Locator;
  11 | 
  12 |     constructor(page: Page) {
  13 |         this.page = page;
  14 |         this.searchForm = page.locator('div#content form#search-form');
  15 |         this.titlesOnlyOption = page.locator('input#titles_only');
  16 |         this.inputField = page.locator('input#search-input');
  17 |         this.submitButton = page.locator('form p input[type="submit"]');
  18 |         this.resultsTable = page.locator('dl#search-results');
  19 |         this.recordTitles = page.locator('dl#search-results dt a');
  20 |     }
  21 | 
  22 |     async verifySearchFormVisibility() {
  23 |         await expect(this.searchForm).toBeVisible();
  24 |     }
  25 | 
  26 |     async findAndClickTitlesOnlyOption() {
  27 |         await expect(this.titlesOnlyOption).toBeVisible();
  28 |         await this.titlesOnlyOption.click();
  29 |     }
  30 | 
  31 |     async findInputField() {
  32 |         await expect(this.inputField).toBeVisible();
  33 |     }
  34 | 
  35 |     async enterTextForSearch(text: string) {
  36 |         await this.inputField.fill(text);
  37 |     }
  38 | 
  39 |     async submitSearch() {
  40 |         await expect(this.submitButton).toBeVisible();
  41 |         await this.submitButton.click();
  42 |     }
  43 | 
  44 |     async verifySearchResults(text: string) {
  45 |         await expect(this.resultsTable).toBeVisible();
> 46 |         await expect(this.recordTitles).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  47 | 
  48 |         for (let i = 0; i < 3; i++) {
  49 |             await expect(this.recordTitles.nth(i)).toHaveText(new RegExp(text));
  50 |         }
  51 |     }
  52 | }
  53 | 
  54 | export default SearchPage;
```