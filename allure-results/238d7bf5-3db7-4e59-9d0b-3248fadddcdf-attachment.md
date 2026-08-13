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
    ...

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for locator('dl#search-results dt a')

```

# Page snapshot

```yaml
- generic [ref=f17e1]:
  - generic [ref=f17e4]:
    - generic [ref=f17e5]:
      - generic [ref=f17e6]:
        - list:
          - listitem [ref=f17e7]:
            - link "Sign in" [ref=f17e8] [cursor=pointer]:
              - /url: /login
          - listitem [ref=f17e9]:
            - link "Register" [ref=f17e10] [cursor=pointer]:
              - /url: /account/register
      - list:
        - listitem [ref=f17e11]:
          - link "Home" [ref=f17e12] [cursor=pointer]:
            - /url: /
        - listitem [ref=f17e13]:
          - link "Projects" [ref=f17e14] [cursor=pointer]:
            - /url: /projects
        - listitem [ref=f17e15]:
          - link "Help" [ref=f17e16] [cursor=pointer]:
            - /url: https://www.redmine.org/guide
    - generic [ref=f17e17]:
      - generic [ref=f17e18]:
        - generic [ref=f17e19]:
          - generic [ref=f17e20]:
            - link "Search" [ref=f17e21] [cursor=pointer]:
              - /url: /projects/redmine/search?scope=subprojects
            - text: ":"
          - textbox "Search:" [ref=f17e22]: Error
        - generic [ref=f17e23]: Redmine
      - heading "Redmine" [level=1] [ref=f17e25]
      - list [ref=f17e27]:
        - listitem [ref=f17e28]:
          - link "Overview" [ref=f17e29] [cursor=pointer]:
            - /url: /projects/redmine
        - listitem [ref=f17e30]:
          - link "Download" [ref=f17e31] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
        - listitem [ref=f17e32]:
          - link "Activity" [ref=f17e33] [cursor=pointer]:
            - /url: /projects/redmine/activity
        - listitem [ref=f17e34]:
          - link "Roadmap" [ref=f17e35] [cursor=pointer]:
            - /url: /projects/redmine/roadmap
        - listitem [ref=f17e36]:
          - link "Issues" [ref=f17e37] [cursor=pointer]:
            - /url: /projects/redmine/issues
        - listitem [ref=f17e38]:
          - link "News" [ref=f17e39] [cursor=pointer]:
            - /url: /projects/redmine/news
        - listitem [ref=f17e40]:
          - link "Wiki" [ref=f17e41] [cursor=pointer]:
            - /url: /projects/redmine/wiki
        - listitem [ref=f17e42]:
          - link "Forums" [ref=f17e43] [cursor=pointer]:
            - /url: /projects/redmine/boards
        - listitem [ref=f17e44]:
          - link "Repository" [ref=f17e45] [cursor=pointer]:
            - /url: /projects/redmine/repository
    - generic [ref=f17e46]:
      - insertion [ref=f17e48]:
        - iframe [ref=f17e50]:
          - generic [ref=f19e1]:
            - generic [ref=f19e3]:
              - link:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ct9ty9JN9avvmBd69iM0Pjdbt8QKK_vD0iAHml_vxiBbQv9rgrwkQASDBl_QHYKX-4Y60MaABtPDcywLIAQKpAuVo1pK8A1g-qAMByAPJBKoE4gNP0O5d4FNuUaQlUz3AX43JE1CTs7UY_EsF_9_-CAUEmR3wbOj6QbkjXWVR7SeqJanRU4pNrVW589vjZNfM6bjCY-PvyTRUnRcV6kirdARcIkUmkzdNg7rprxwQ015poHiipfaGRWFzBRSA4mP4tEG-idEzhxk10coRHgvGCzHIAL2FPkDt4GYJcnHA2Yjiz_R0mm9GZ2datQqw4wvTfxwc_YCduIKY8-j2MxnRfJ5_nqhADOpVBZD5jm_Q2tJCKv6efJ0J2usKr3ug6cm4Xsl203nTyIOPhhYLzdKxKFeo_AWm0sCgt2WiLbyWoK0F9LpUc54TbMZ_BgCVibhJ5A_zPiV9klAMOMMvqSmEeKC9yvbyBl7SZvwBjNmcNXCINLYWH387YVOnEksKjmxxb0sOXGNK6W_rFaUKMG8rt_KnurJq_TrrNkPu3cVyvw2ebB5O2aFNxre5DmCpJa7-LkvMJSCAiWV1fadE8TKlV5IRfluE6-4JUaSowBL6TuKEA1RwW2vZl0mL88ClEX8aJqrEdCde-HC8gW3kvbo6_El6xMxbfOqVtUCTl7xamx13h1fmmMcNcbkeU_SwGyeDE0jyWic_NRq029QYdBqbSpi4r9YESWhkJVQCyb8CtCiU7HiVmsAE-qDG2-YFiAWeo9aHWaAGAoAHtI-jtAGoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB_7osQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB5_hsQKoB6brsQKoB9XJG6gHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WJjO29aqnZYDYAGxCdm0XZmCbri0gAoBmAsByAsBogw3YhMKEW1yLmdyaWxsLmdyaWxsQXBwahgKFmNvbS5tci5ncmlsbC5ncmlsbF9hcHB4AYgBAZABAaoNAlVByA0B6g0TCIi23daqnZYDFd4eogMdDWs7LvANAogOBdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgK5TxgCIgEA0BgB6BgBwhkCCAE&ae=1&gclid=EAIaIQobChMI-7Dd1qqdlgMV3h6iAx0NazsuEAEYASAAEgLGmfD_BwE&num=1&cid=CAQS8wEAEQoqgUpueqTEjjaIux2hp0OwX76KiRTM0H0sGyrYikJu9_Yudkgnxwyiz072edsvXQ_ejtwm8ZQXcU0wrjE99rkYz66xvh8l8m_AoUPPQVrvwfrjzEEh8l7D0kOb9-5e5Uqzg--N0H1RSePSiNTkUavBlZ4Ax-nZvi_rOWQ4XNMwzeN2HcctILwJZ6xHRbkQ-Yu1K0aXK9bj16lReKUzkkSpvbFXRZlKVjWhS6IH8m48hdYahWIzAfO6WnhBKqsteuOVV7jvU_sUz2P6v25PaN3FYtPt--CTmNxmUTMkGRQaQRuGR1W4ggefWv5aDGu-Df4YAQ&sig=AOD64_1qSFfPVc0KS73mvywN99rQubgvPg&client=ca-pub-0447284344517370&rf=2&nb=2&adurl=https://mrgrill.ua/%3Futm_source%3Dgdn%26utm_medium%3Dcpm%26utm_campaign%3Dprmd%26utm_term%3D02.06-09.08%26gad_source%3D5%26gad_campaignid%3D23906849182%26gclid%3DEAIaIQobChMI-7Dd1qqdlgMV3h6iAx0NazsuEAEYASAAEgLGmfD_BwE
              - generic [ref=f19e4] [cursor=pointer]
              - button [ref=f19e9] [cursor=pointer]
            - iframe
      - generic [ref=f17e51]:
        - heading "Search" [level=2] [ref=f17e52]
        - generic [ref=f17e53]:
          - generic [ref=f17e54]:
            - generic [ref=f17e55]: Searchfield
            - paragraph [ref=f17e56]:
              - textbox "Searchfield" [active] [ref=f17e57]: Error
              - generic [ref=f17e58]: Search scope
              - combobox "Search scope" [ref=f17e59]:
                - option "All Projects"
                - option "Redmine and its subprojects" [selected]
                - option "Redmine"
              - generic [ref=f17e60]:
                - checkbox "All words" [checked] [ref=f17e61]
                - text: All words
              - generic [ref=f17e62]:
                - checkbox "Search titles only" [checked] [ref=f17e63]
                - text: Search titles only
            - group [ref=f17e64]:
              - link "Check all / Uncheck all" [ref=f17e66] [cursor=pointer]:
                - /url: "#"
              - paragraph [ref=f17e67]:
                - generic [ref=f17e68]:
                  - checkbox "Issues" [checked] [ref=f17e69]
                  - link "Issues" [ref=f17e70] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e71]:
                  - checkbox "News" [checked] [ref=f17e72]
                  - link "News" [ref=f17e73] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e74]:
                  - checkbox "Documents" [checked] [ref=f17e75]
                  - link "Documents" [ref=f17e76] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e77]:
                  - checkbox "Changesets" [checked] [ref=f17e78]
                  - link "Changesets" [ref=f17e79] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e80]:
                  - checkbox "Wiki pages" [checked] [ref=f17e81]
                  - link "Wiki pages" [ref=f17e82] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e83]:
                  - checkbox "Messages" [checked] [ref=f17e84]
                  - link "Messages" [ref=f17e85] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e86]:
                  - checkbox "Projects" [checked] [ref=f17e87]
                  - link "Projects" [ref=f17e88] [cursor=pointer]:
                    - /url: "#"
                - generic [ref=f17e89]:
                  - checkbox "Redmine plugins" [checked] [ref=f17e90]
                  - link "Redmine plugins" [ref=f17e91] [cursor=pointer]:
                    - /url: "#"
                - link "Content Management" [ref=f17e92] [cursor=pointer]:
                  - generic [ref=f17e93]: Content
                  - text: Management
            - group "Options" [ref=f17e97]
          - paragraph [ref=f17e99]:
            - button "Search" [ref=f17e100] [cursor=pointer]
        - generic [ref=f17e101]:
          - list:
            - listitem [ref=f17e102]:
              - link "Messages (5042)" [ref=f17e103] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&messages=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f17e104]:
              - link "Issues (1407)" [ref=f17e105] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&issues=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f17e106]:
              - link "Changesets (872)" [ref=f17e107] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&changesets=1&q=Error&scope=subprojects&titles_only=1
            - listitem [ref=f17e108]:
              - link "Wiki pages (1)" [ref=f17e109] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&q=Error&scope=subprojects&titles_only=1&wiki_pages=1
        - heading "Results (7322)" [level=3] [ref=f17e110]
        - generic [ref=f17e111]:
          - term [ref=f17e112]:
            - 'link "Revision 24866 (svn): Fixes \"''Proc.new'': tried to create Proc object without a block (ArgumentError)\" error introduced by r24865 (#43209)." [ref=f17e113] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24866
          - definition [ref=f17e114]: 2026-07-28 00:20
          - term [ref=f17e115]:
            - 'link "Defect #44228 (New): Uploading an attachment ... te in the filename causes an Internal Server Error" [ref=f17e116] [cursor=pointer]':
              - /url: /issues/44228
          - definition [ref=f17e117]:
            - generic [ref=f17e118]: "Uploading an attachment with a filename that ... lename=hello%00world.txt@, raises an ArgumentError and results in an Internal Server Error. This issue was originally pointed out by us ... ile.extname(filename)@. Ruby raises @ArgumentError: path name contains null byte@ when the file ... causing Redmine to return an Internal Server Error instead of handling the input gracefully. ... istent with @Attachment#sanitize_filename@."
            - text: 2026-07-03 04:28
          - term [ref=f17e119]:
            - 'link "Defect #44227 (New): Internal Server Error(500) due to null byte in attachment filename" [ref=f17e120] [cursor=pointer]':
              - /url: /issues/44227
          - definition [ref=f17e121]:
            - generic [ref=f17e122]: "Hi, While generating the \"Project Health R ... e process was terminating with the following error. <pre> [2026-07-01T15:38:09.707910 #3483] ERROR -- : [abae02e9-5c6e-4629-8705-2d36c2d37c30] error: /usr/share/redmine/instances/default/plugin ... name': path name contains null byte (ArgumentError) extension = File.extname(attachmen ... to find out which attachment was causing the error. <pre> !!! ANALYSING: ID: 7784 - NAME: \" ... -e7cdf6ef0e2a] Completed 500 Internal Server Error in 9ms (ActiveRecord: 3.4ms (9 queries, 0 ca ... 3acb3e9-28fb-4773-b83a-e7cdf6ef0e2a] ArgumentError (path name contains null byte): [53acb3e9-2 ... XXXXXXXX\" LocalPath = \"/home/hahayidu/TestError.txt\" with open(LocalPath, \"w\", encoding=\"ut ... is is the test\") BrokenFileName = \"Test%00Error..."
            - text: 2026-07-02 19:47
          - term [ref=f17e123]:
            - 'link "Defect #44218 (New): Log time block disappears on validation error when closing issue with \"Accept time logs on closed issues\" disabled" [ref=f17e124] [cursor=pointer]':
              - /url: /issues/44218
          - definition [ref=f17e125]:
            - generic [ref=f17e126]: "## Steps to reproduce 1. Have \"Accept time ... sible so the user can correct the validation error. ## Actual behavior The Log time block disappears after the validation error is shown, making it impossible to correct ... _loggable? || (!@issue.was_closed? && @issue.errors.any?) %> This uses the existing `was_clo ... iginal status before the failed save attempt."
            - text: 2026-06-26 14:32
          - term [ref=f17e127]:
            - 'link "Defect #44132 (New): Project creation returns HTTP 500 (`Mysql2::Error: Record has changed since last read in table ... rrent project create/destroy on MySQL/MariaDB" [ref=f17e128] [cursor=pointer]':
              - /url: /issues/44132
          - definition [ref=f17e129]:
            - generic [ref=f17e130]: "Note: the bug report details were created wit ... *destroyed* at the same time. The underlying error is: <pre>ActiveRecord::StatementInvalid (Mysql2::Error: Record has changed since last read in tabl ... restarting transaction)</pre> (MariaDB error *1020*, @ER_CHECKREAD@.) The exception is no ... The create transaction aborts with @Mysql2::Error: Record has changed since last read in table ... ERENT project Completed 500 Internal Server Error in 56ms (ActiveRecord: 37.9ms (21 queries, 2 ... - : ActiveRecord::StatementInvalid (Mysql2::Error: Record has changed since last read in table ... restarting transaction): Causes: Mysql2::Error (Record has changed since last read in table ... are broken, # this will run into deadlock errors all the time otherwise. Issue.with_advis ... orage&#45;engine level on MariaDB, producing error..."
            - text: 2026-06-01 11:21
          - term [ref=f17e131]:
            - 'link "Revision 24678 (svn): Remove unused i18n key: error_not_allowed_to_log_time_for_other_users (#44065)." [ref=f17e132] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24678
          - definition [ref=f17e133]: 2026-05-22 06:26
          - term [ref=f17e134]:
            - 'link "Revision 24674 (svn): Fix stored XSS in Textile formatter via code class bypass (#44047)." [ref=f17e135] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24674
          - definition [ref=f17e136]:
            - generic [ref=f17e137]: "RedCloth3#rip_offtags skipped HTML-escaping w ... left children intact -- letting <script>, onerror handlers, and javascript: links survive. Fi ... node.inner_html with escaped node.inner_text."
            - text: 2026-05-21 19:24
          - term [ref=f17e138]:
            - 'link "Revision 24656 (svn): Fix syntax error (#43640)." [ref=f17e139] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24656
          - definition [ref=f17e140]: 2026-05-15 10:13
          - term [ref=f17e141]:
            - 'link "Help: RE: Server returns status 403 / several errors" [ref=f17e142] [cursor=pointer]':
              - /url: /boards/2/topics/72179?r=72181#message-72181
          - definition [ref=f17e143]:
            - generic [ref=f17e144]: Hello Florian Thank you for your helpful t ... ys nearly at our wits' end over the numerous errors, the problem turned out to be very easy to ... had been altered in a way that caused these errors. We didn't need to investigate any further.
            - text: 2026-05-12 07:51
          - term [ref=f17e145]:
            - 'link "Help: RE: Server returns status 403 / several errors" [ref=f17e146] [cursor=pointer]':
              - /url: /boards/2/topics/72179?r=72180#message-72180
          - definition [ref=f17e147]:
            - generic [ref=f17e148]: Hi Michael, this is expected behavior in R ... ine deletes it automatically. BR Florian
            - text: 2026-05-10 21:26
          - term [ref=f17e149]:
            - 'link "Help: Server returns status 403 / several errors" [ref=f17e150] [cursor=pointer]':
              - /url: /boards/2/topics/72179
          - definition [ref=f17e151]:
            - generic [ref=f17e152]: Hello Although my system is up to date, we have numerous errors that make it impossible to work reliably. ... srf-Token request header is present.* The errors occur (permission denied) when editing TRAC ... are correct. Any idea, how to solve? The errors occured from one day to the next. Alle Plug ... updated to the newest version. BR, Michael
            - text: 2026-05-10 14:42
          - term [ref=f17e153]:
            - 'link "Help: RE: internal server error after moving the docker container to another server" [ref=f17e154] [cursor=pointer]':
              - /url: /boards/2/topics/68581?r=72140#message-72140
          - definition [ref=f17e155]:
            - generic [ref=f17e156]: The config directory of Redmine contains a lo ... @config/secrets.yml@ depending on your setup
            - text: 2026-04-09 17:03
          - term [ref=f17e157]:
            - 'link "Revision 24514 (svn): Fixes argumentError occurs on /oauth/authorize when REST API is disabled (#43698)." [ref=f17e158] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24514
          - definition [ref=f17e159]: 2026-03-19 07:13
          - term [ref=f17e160]:
            - 'link "Revision 24439 (svn): Improve visibility of error message during file upload (#43381)." [ref=f17e161] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24439
          - definition [ref=f17e162]:
            - generic [ref=f17e163]: Patch by Kenta Kumojima (user:kumojima).
            - text: 2026-02-20 23:45
          - term [ref=f17e164]:
            - 'link "Open discussion: Fix for FIPS systems: OpenSSL::Digest::DigestError (Digest initialization failed: initialization error)" [ref=f17e165] [cursor=pointer]':
              - /url: /boards/1/topics/72100
          - definition [ref=f17e166]:
            - generic [ref=f17e167]: "After installing Redmine 6.1.1 on RedHat 9.7 ... oduction.log showed: \"OpenSSL::Digest::DigestError (Digest initialization failed: initialization error)\" Fix: added a line to config/application ... SSL::Digest::SHA256 Hope this is useful!"
            - text: 2026-02-18 16:23
          - term [ref=f17e168]:
            - 'link "Defect #43809 (Closed): db migrate error after upgrade to Redmine 6.1.0.devel.24240" [ref=f17e169] [cursor=pointer]':
              - /url: /issues/43809
          - definition [ref=f17e170]:
            - generic [ref=f17e171]: "Error message: bundle exec rake db:migrate RAIL ... ** Execute environment rake aborted! NameError: uninitialized constant ActiveJob::QueueAdapters::SuckerPunchAdapter (NameError) const_get(name.to_s.camelize << ... db:migrate => db:load_config => environment"
            - text: 2026-02-10 08:40
          - term [ref=f17e172]:
            - 'link "Defect #43807 (New): Internal Server Error when posting SQL into Comment" [ref=f17e173] [cursor=pointer]':
              - /url: /issues/43807
          - definition [ref=f17e174]:
            - generic [ref=f17e175]: "Hey Guys, First of all, thanks for your awes ... e SQL command and Redmine throws an HTML 500 error. I'm not really sure if it's also a security ... m dbo.tbl_Rolle; </code></pre> The Error in production.log <pre><code class=\"shell\"> ActiveRecord::StatementInvalid (TinyTds::Error: Explicit value must be specified for identi ... TION identity column.): Causes: TinyTds::Error (Explicit value must be specified for identi ... 2.3 | | Database Adapter | SQLServer |"
            - text: 2026-02-09 14:02
          - term [ref=f17e176]:
            - 'link "Defect #43699 (Closed): Fatal error during database migration process" [ref=f17e177] [cursor=pointer]':
              - /url: /issues/43699
          - definition [ref=f17e178]:
            - generic [ref=f17e179]: "So a few years back (2019) we switched from b ... tweaking the running MariaDB instance had an error about `oauth_applications` already existing. ... tables and tried a third time. The original error about renaming the (now non-existent) table ... make any more sense to a Redmine developer."
            - text: 2026-01-21 02:52
          - term [ref=f17e180]:
            - 'link "Defect #43698 (Closed): ArgumentError occurs on /oauth/authorize when REST API is disabled" [ref=f17e181] [cursor=pointer]':
              - /url: /issues/43698
          - definition [ref=f17e182]:
            - generic [ref=f17e183]: "When the REST web service is disabled in Redm ... ation endpoint causes an exception: @ArgumentError (wrong number of arguments (given 1, expecte ... of returning a normal 403 response: @ArgumentError (wrong number of arguments (given 1, expecte ... ception happens when render_403 calls render_error. However, Doorkeeper::AuthorizationController also defines a method named render_error, and that method takes no arguments. Due to ... precedence, the Doorkeeper version of render_error is called instead of Redmine’s render_error, which leads to: * Redmine calls: render_error <something> * Doorkeeper receives 1 argument but expects 0 → ArgumentError h3. Notes Normally, OAuth cannot be us ... d this during testing and created this issue."
            - text: 2026-01-21 01:38
          - term [ref=f17e184]:
            - 'link "Revision 24294 (svn): Integrate flash and error messages RTL styles from rtl.css into application.css using logical properties (#43515)." [ref=f17e185] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24294
          - definition [ref=f17e186]: 2026-01-11 03:47
          - term [ref=f17e187]:
            - 'link "Revision 24259 (svn): Fix 500 error when saving a custom field with an invalid regular expression (#43521)." [ref=f17e188] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24259
          - definition [ref=f17e189]: 2026-01-05 09:21
          - term [ref=f17e190]:
            - 'link "Revision 24234 (svn): Fixes error executing the include macro (Page not found) in projects list (#43526)." [ref=f17e191] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24234
          - definition [ref=f17e192]:
            - generic [ref=f17e193]: Patch by Mizuki ISHIKAWA (user:ishikawa999).
            - text: 2025-12-28 03:55
          - term [ref=f17e194]:
            - 'link "Revision 24230 (svn): Revert r24229 (#43619)." [ref=f17e195] [cursor=pointer]':
              - /url: /projects/redmine/repository/svn/revisions/24230
          - definition [ref=f17e196]:
            - generic [ref=f17e197]: The change causes PG::GroupingError on PostgreSQL.
            - text: 2025-12-24 08:05
          - term [ref=f17e198]:
            - 'link "Defect #43572 (Closed): OpenSSL digest initialization error on accessing Activity" [ref=f17e199] [cursor=pointer]':
              - /url: /issues/43572
          - definition [ref=f17e200]:
            - generic [ref=f17e201]: "I've recently migrated a database/install fro ... all projects), it throws an internal server error. The logs seem to indicate it's an issue wit ... -3185be462982] Completed 500 Internal Server Error in 25ms (ActiveRecord: 11.3ms (20 queries, 1 ... 26-a21f-3185be462982] OpenSSL::Digest::DigestError (Digest initialization failed: initialization error): [d777ae79-7a3b-4326-a21f-3185be462982] [ ... no plugin installed MySQL Version: 8.4"
            - text: 2025-12-09 15:51
          - term [ref=f17e202]:
            - 'link "Defect #43526 (Closed): When using the include macro in the project description, an execution error occurs in the project list (list view)" [ref=f17e203] [cursor=pointer]':
              - /url: /issues/43526
          - definition [ref=f17e204]:
            - generic [ref=f17e205]: When the include macro is used in a project’s ... ect list in board view, but it fails with an error in the project list in list view. *Steps ... the macro fails to render and the following error is shown instead of the description. @Error executing the include macro (Page not found) ... d load, and it results in a “Page not found” error. When the project is explicitly specified, ... views, including the project list list view.
            - text: 2025-11-26 01:58
        - generic [ref=f17e206]:
          - list [ref=f17e207]:
            - listitem [ref=f17e208]: « Previous
            - listitem [ref=f17e209]: "1"
            - listitem [ref=f17e210]:
              - link "2" [ref=f17e211] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=2&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f17e212]:
              - link "3" [ref=f17e213] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=3&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f17e214]: …
            - listitem [ref=f17e215]:
              - link "293" [ref=f17e216] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=293&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
            - listitem [ref=f17e217]:
              - link "Next »" [ref=f17e218] [cursor=pointer]:
                - /url: /projects/redmine/search?all_words=1&attachments=0&changesets=1&commit=Search&documents=1&issues=1&messages=1&news=1&options=0&page=2&projects=1&q=Error&redmine_plugins=1&scope=subprojects&titles_only=1&utf8=%E2%9C%93&wiki_pages=1
          - generic [ref=f17e219]: (1-25/7322)
    - generic [ref=f17e220]:
      - text: Powered by
      - link "Redmine" [ref=f17e221] [cursor=pointer]:
        - /url: https://www.redmine.org/
      - text: © 2006-2023 Jean-Philippe Lang
  - log [ref=f17e222]
  - insertion [ref=f17e224]:
    - generic [ref=f17e227]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=f17e229]: Discover more
      - link "Project Management Software" [ref=f17e230] [cursor=pointer]
      - link "Freeware & Shareware" [ref=f17e235] [cursor=pointer]
      - link "Data Management" [ref=f17e240] [cursor=pointer]
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