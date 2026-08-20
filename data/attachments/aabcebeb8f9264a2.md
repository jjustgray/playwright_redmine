# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: issues.spec.ts >> Redmine tests >> TC-05: Issue filter by category on issue page
- Location: tests/issues.spec.ts:27:7

# Error details

```
Error: locator.click: Error: strict mode violation: locator('a.icon.icon-checked') resolved to 2 elements:
    1) <a href="#" class="icon icon-checked" onclick="$("#query_form").submit(); return false;">Apply</a> aka getByRole('link', { name: 'Apply' })
    2) <a href="#" class="icon icon-checked" title="Check all / Uncheck all" onclick="toggleCheckboxesBySelector('#csv-export-block-columns input[type=checkbox]'); return false;"></a> aka getByTitle('Check all / Uncheck all')

Call log:
  - waiting for locator('a.icon.icon-checked')

```

# Page snapshot

```yaml
- generic [active] [ref=f8e1]:
  - generic [ref=f8e4]:
    - generic [ref=f8e5]:
      - generic [ref=f8e6]:
        - list:
          - listitem [ref=f8e7]:
            - link "Sign in" [ref=f8e8] [cursor=pointer]:
              - /url: /login
          - listitem [ref=f8e9]:
            - link "Register" [ref=f8e10] [cursor=pointer]:
              - /url: /account/register
      - list:
        - listitem [ref=f8e11]:
          - link "Home" [ref=f8e12] [cursor=pointer]:
            - /url: /
        - listitem [ref=f8e13]:
          - link "Projects" [ref=f8e14] [cursor=pointer]:
            - /url: /projects
        - listitem [ref=f8e15]:
          - link "Help" [ref=f8e16] [cursor=pointer]:
            - /url: https://www.redmine.org/guide
    - generic [ref=f8e17]:
      - generic [ref=f8e18]:
        - generic [ref=f8e19]:
          - generic [ref=f8e20]:
            - link "Search" [ref=f8e21] [cursor=pointer]:
              - /url: /projects/redmine/search?scope=subprojects
            - text: ":"
          - textbox "Search:" [ref=f8e22]
        - generic [ref=f8e23]: Redmine
      - heading "Redmine" [level=1] [ref=f8e25]
      - list [ref=f8e27]:
        - listitem [ref=f8e28]:
          - link "Overview" [ref=f8e29] [cursor=pointer]:
            - /url: /projects/redmine
        - listitem [ref=f8e30]:
          - link "Download" [ref=f8e31] [cursor=pointer]:
            - /url: /projects/redmine/wiki/Download
        - listitem [ref=f8e32]:
          - link "Activity" [ref=f8e33] [cursor=pointer]:
            - /url: /projects/redmine/activity
        - listitem [ref=f8e34]:
          - link "Roadmap" [ref=f8e35] [cursor=pointer]:
            - /url: /projects/redmine/roadmap
        - listitem [ref=f8e36]:
          - link "Issues" [ref=f8e37] [cursor=pointer]:
            - /url: /projects/redmine/issues
        - listitem [ref=f8e38]:
          - link "News" [ref=f8e39] [cursor=pointer]:
            - /url: /projects/redmine/news
        - listitem [ref=f8e40]:
          - link "Wiki" [ref=f8e41] [cursor=pointer]:
            - /url: /projects/redmine/wiki
        - listitem [ref=f8e42]:
          - link "Forums" [ref=f8e43] [cursor=pointer]:
            - /url: /projects/redmine/boards
        - listitem [ref=f8e44]:
          - link "Repository" [ref=f8e45] [cursor=pointer]:
            - /url: /projects/redmine/repository
    - generic [ref=f8e46]:
      - generic [ref=f8e47]:
        - heading "Custom queries" [level=3] [ref=f8e48]
        - list [ref=f8e49]:
          - listitem [ref=f8e50]:
            - link "Documentation issues" [ref=f8e51] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=84
          - listitem [ref=f8e52]:
            - link "Open defects" [ref=f8e53] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=1
          - listitem [ref=f8e54]:
            - link "Open features" [ref=f8e55] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=2
          - listitem [ref=f8e56]:
            - link "Patch queue" [ref=f8e57] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=931
          - listitem [ref=f8e58]:
            - link "Plugin issues" [ref=f8e59] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=42
          - listitem [ref=f8e60]:
            - link "Translation patches" [ref=f8e61] [cursor=pointer]:
              - /url: /projects/redmine/issues?query_id=7
        - insertion [ref=f8e62]:
          - iframe [ref=f8e64]
      - generic [ref=f8e65]:
        - generic "Actions" [ref=f8e69] [cursor=pointer]
        - heading "Issues" [level=2] [ref=f8e70]
        - generic [ref=f8e72]:
          - generic [ref=f8e73]:
            - group "Filters" [ref=f8e74]:
              - generic:
                - table [ref=f8e76]:
                  - row [ref=f8e77]:
                    - cell "Status" [ref=f8e78]:
                      - checkbox "Status" [checked] [ref=f8e79]
                      - text: Status
                    - cell "open" [ref=f8e80]:
                      - combobox [ref=f8e81]:
                        - option "open" [selected]
                        - option "is"
                        - option "is not"
                        - option "closed"
                        - option "any"
                    - cell [ref=f8e82]
                  - row [ref=f8e83]:
                    - cell "Category" [ref=f8e84]:
                      - checkbox "Category" [checked] [ref=f8e85]
                      - text: Category
                    - cell "is" [ref=f8e86]:
                      - combobox [ref=f8e87]:
                        - option "is" [selected]
                        - option "is not"
                        - option "none"
                        - option "any"
                    - cell "Feeds" [ref=f8e88]:
                      - generic [ref=f8e89]:
                        - combobox [ref=f8e90]:
                          - option "Accounts / authentication"
                          - option "Activity view"
                          - option "Administration"
                          - option "Attachments"
                          - option "Calendar"
                          - option "Code cleanup/refactoring"
                          - option "Core Plugins"
                          - option "Custom fields"
                          - option "Database"
                          - option "Documentation"
                          - option "Documents"
                          - option "Email notifications"
                          - option "Email receiving"
                          - option "Feeds" [selected]
                          - option "Files"
                          - option "Filters"
                          - option "Forums"
                          - option "Gantt"
                          - option "Gems support"
                          - option "Groups"
                          - option "Hook requests"
                          - option "I18n"
                          - option "Importers"
                          - option "Issues"
                          - option "Issues filter"
                          - option "Issues list"
                          - option "Issues permissions"
                          - option "Issues planning"
                          - option "Issues workflow"
                          - option "LDAP"
                          - option "My page"
                          - option "News"
                          - option "OpenID"
                          - option "PDF export"
                          - option "Performance"
                          - option "Permissions and roles"
                          - option "Plugin API"
                          - option "Plugin Request"
                          - option "Project settings"
                          - option "Projects"
                          - option "Rails support"
                          - option "REST API"
                          - option "Roadmap"
                          - option "Ruby support"
                          - option "SCM"
                          - option "SCM extra"
                          - option "Search engine"
                          - option "Security"
                          - option "SEO"
                          - option "Text formatting"
                          - option "Themes"
                          - option "Third-party libraries"
                          - option "Time tracking"
                          - option "Translations"
                          - option "UI"
                          - option "UI - Responsive"
                          - option "Webhooks"
                          - option "Website (redmine.org)"
                          - option "Wiki"
                        - generic [ref=f8e91] [cursor=pointer]
                - generic [ref=f8e92]:
                  - text: Add filter
                  - combobox "Add filter" [ref=f8e93]:
                    - option [selected]
                    - option "Status" [disabled]
                    - option "Tracker"
                    - option "Priority"
                    - option "Author"
                    - option "Assignee"
                    - option "Target version"
                    - option "Category" [disabled]
                    - option "Subject"
                    - option "Description"
                    - option "File"
                    - option "Updated by"
                    - option "Last updated by"
                    - option "Subproject"
                    - option "Resolution"
                    - option "Affected version"
                    - option "Issue"
                    - option "Assignee's group"
                    - option "Assignee's role"
                    - option "Target version's Due date"
                    - option "Target version's Status"
                    - option "Created"
                    - option "Updated"
                    - option "Closed"
                    - option "Project's Status"
                    - option "Affected version's Due date"
                    - option "Affected version's Status"
                    - option "Related to"
                    - option "Is duplicate of"
                    - option "Has duplicate"
                    - option "Blocks"
                    - option "Blocked by"
                    - option "Precedes"
                    - option "Follows"
                    - option "Copied to"
                    - option "Copied from"
                    - option "Parent task"
                    - option "Subtasks"
            - group "Options" [ref=f8e94]
          - paragraph [ref=f8e96]:
            - link "Apply" [ref=f8e97] [cursor=pointer]:
              - /url: "#"
            - link "Clear" [ref=f8e98] [cursor=pointer]:
              - /url: /projects/redmine/issues?set_filter=1&sort=
        - table [ref=f8e101]:
          - rowgroup [ref=f8e102]:
            - row [ref=f8e103]:
              - columnheader [ref=f8e104]:
                - checkbox "Check all/Uncheck all" [ref=f8e105]
              - columnheader [ref=f8e106]:
                - link "#" [ref=f8e107] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=id
              - columnheader [ref=f8e108]:
                - link "Tracker" [ref=f8e109] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=tracker%2Cid%3Adesc
              - columnheader [ref=f8e110]:
                - link "Status" [ref=f8e111] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=status%2Cid%3Adesc
              - columnheader [ref=f8e112]:
                - link "Subject" [ref=f8e113] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=subject%2Cid%3Adesc
              - columnheader [ref=f8e114]:
                - link "Updated" [ref=f8e115] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=updated_on%3Adesc%2Cid%3Adesc
              - columnheader [ref=f8e116]:
                - link "Category" [ref=f8e117] [cursor=pointer]:
                  - /url: /projects/redmine/issues?sort=category%2Cid%3Adesc
              - columnheader [ref=f8e118]
          - rowgroup [ref=f8e119]:
            - row [ref=f8e120]:
              - cell [ref=f8e121]:
                - checkbox [ref=f8e122]
              - cell [ref=f8e123]:
                - link "44362" [ref=f8e124] [cursor=pointer]:
                  - /url: /issues/44362
              - cell "Feature" [ref=f8e125]
              - cell "New" [ref=f8e126]
              - cell [ref=f8e127]:
                - link "Preview PDF compatible Adobe Illustrator files" [ref=f8e128] [cursor=pointer]:
                  - /url: /issues/44362
              - cell "2026-08-20 13:54" [ref=f8e129]
              - cell "Attachments" [ref=f8e130]
              - cell [ref=f8e131]:
                - link "Actions" [ref=f8e132] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e133]:
              - cell [ref=f8e134]:
                - checkbox [ref=f8e135]
              - cell [ref=f8e136]:
                - link "44361" [ref=f8e137] [cursor=pointer]:
                  - /url: /issues/44361
              - cell "Defect" [ref=f8e138]
              - cell "New" [ref=f8e139]
              - cell [ref=f8e140]:
                - link "Preview returns a 404 error on the cross-project news form" [ref=f8e141] [cursor=pointer]:
                  - /url: /issues/44361
              - cell "2026-08-20 12:05" [ref=f8e142]
              - cell "News" [ref=f8e143]
              - cell [ref=f8e144]:
                - link "Actions" [ref=f8e145] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e146]:
              - cell [ref=f8e147]:
                - checkbox [ref=f8e148]
              - cell [ref=f8e149]:
                - link "44360" [ref=f8e150] [cursor=pointer]:
                  - /url: /issues/44360
              - cell "Defect" [ref=f8e151]
              - cell "Confirmed" [ref=f8e152]
              - cell [ref=f8e153]:
                - link "Lost password page is unreachable by admins when two-factor authentication setup is required" [ref=f8e154] [cursor=pointer]:
                  - /url: /issues/44360
              - cell "2026-08-20 12:38" [ref=f8e155]
              - cell "Accounts / authentication" [ref=f8e156]
              - cell [ref=f8e157]:
                - link "Actions" [ref=f8e158] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e159]:
              - cell [ref=f8e160]:
                - checkbox [ref=f8e161]
              - cell [ref=f8e162]:
                - link "44359" [ref=f8e163] [cursor=pointer]:
                  - /url: /issues/44359
              - cell "Patch" [ref=f8e164]
              - cell "New" [ref=f8e165]
              - cell [ref=f8e166]:
                - link "Drop support for Ruby 3.2" [ref=f8e167] [cursor=pointer]:
                  - /url: /issues/44359
              - cell "2026-08-20 12:20" [ref=f8e168]
              - cell "Ruby support" [ref=f8e169]
              - cell [ref=f8e170]:
                - link "Actions" [ref=f8e171] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e172]:
              - cell [ref=f8e173]:
                - checkbox [ref=f8e174]
              - cell [ref=f8e175]:
                - link "44358" [ref=f8e176] [cursor=pointer]:
                  - /url: /issues/44358
              - cell "Defect" [ref=f8e177]
              - cell "Confirmed" [ref=f8e178]
              - cell [ref=f8e179]:
                - 'link "Markdownized preview shows broken images: Pandoc emits <img src=\"media/...\"> but media is never extracted" [ref=f8e180] [cursor=pointer]':
                  - /url: /issues/44358
              - cell "2026-08-20 13:28" [ref=f8e181]
              - cell "Attachments" [ref=f8e182]
              - cell [ref=f8e183]:
                - link "Actions" [ref=f8e184] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e185]:
              - cell [ref=f8e186]:
                - checkbox [ref=f8e187]
              - cell [ref=f8e188]:
                - link "44353" [ref=f8e189] [cursor=pointer]:
                  - /url: /issues/44353
              - cell "Feature" [ref=f8e190]
              - cell "New" [ref=f8e191]
              - cell [ref=f8e192]:
                - 'link "Add project to wiki API response of endpoint /projects/{identifier}/wiki/index.{format}" [ref=f8e193] [cursor=pointer]':
                  - /url: /issues/44353
              - cell "2026-08-20 05:08" [ref=f8e194]
              - cell "REST API" [ref=f8e195]
              - cell [ref=f8e196]:
                - link "Actions" [ref=f8e197] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e198]:
              - cell [ref=f8e199]:
                - checkbox [ref=f8e200]
              - cell [ref=f8e201]:
                - link "44351" [ref=f8e202] [cursor=pointer]:
                  - /url: /issues/44351
              - cell "Defect" [ref=f8e203]
              - cell "Resolved" [ref=f8e204]
              - cell [ref=f8e205]:
                - link "Fix top menu position and icons in Classic theme" [ref=f8e206] [cursor=pointer]:
                  - /url: /issues/44351
              - cell "2026-08-19 21:09" [ref=f8e207]
              - cell "UI" [ref=f8e208]
              - cell [ref=f8e209]:
                - link "Actions" [ref=f8e210] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e211]:
              - cell [ref=f8e212]:
                - checkbox [ref=f8e213]
              - cell [ref=f8e214]:
                - link "44350" [ref=f8e215] [cursor=pointer]:
                  - /url: /issues/44350
              - cell "Defect" [ref=f8e216]
              - cell "New" [ref=f8e217]
              - cell [ref=f8e218]:
                - link "Project overview page is slow when the members box contains many members" [ref=f8e219] [cursor=pointer]:
                  - /url: /issues/44350
              - cell "2026-08-18 14:28" [ref=f8e220]
              - cell "Performance" [ref=f8e221]
              - cell [ref=f8e222]:
                - link "Actions" [ref=f8e223] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e224]:
              - cell [ref=f8e225]:
                - checkbox [ref=f8e226]
              - cell [ref=f8e227]:
                - link "44345" [ref=f8e228] [cursor=pointer]:
                  - /url: /issues/44345
              - cell "Feature" [ref=f8e229]
              - cell "Resolved" [ref=f8e230]
              - cell [ref=f8e231]:
                - link "Use SimpleCov's built-in HTML formatter instead of Redmine's own formatter" [ref=f8e232] [cursor=pointer]:
                  - /url: /issues/44345
              - cell "2026-08-19 21:22" [ref=f8e233]
              - cell "Code cleanup/refactoring" [ref=f8e234]
              - cell [ref=f8e235]:
                - link "Actions" [ref=f8e236] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e237]:
              - cell [ref=f8e238]:
                - checkbox [ref=f8e239]
              - cell [ref=f8e240]:
                - link "44344" [ref=f8e241] [cursor=pointer]:
                  - /url: /issues/44344
              - cell "Defect" [ref=f8e242]
              - cell "New" [ref=f8e243]
              - cell [ref=f8e244]:
                - link "Apache update on Redmine 4.1.1-4" [ref=f8e245] [cursor=pointer]:
                  - /url: /issues/44344
              - cell "2026-08-14 08:20" [ref=f8e246]
              - cell [ref=f8e247]
              - cell [ref=f8e248]:
                - link "Actions" [ref=f8e249] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e250]:
              - cell [ref=f8e251]:
                - checkbox [ref=f8e252]
              - cell [ref=f8e253]:
                - link "44342" [ref=f8e254] [cursor=pointer]:
                  - /url: /issues/44342
              - cell "Patch" [ref=f8e255]
              - cell "New" [ref=f8e256]
              - cell [ref=f8e257]:
                - link "Localize hours field placeholder" [ref=f8e258] [cursor=pointer]:
                  - /url: /issues/44342
              - cell "2026-08-13 18:04" [ref=f8e259]
              - cell "I18n" [ref=f8e260]
              - cell [ref=f8e261]:
                - link "Actions" [ref=f8e262] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e263]:
              - cell [ref=f8e264]:
                - checkbox [ref=f8e265]
              - cell [ref=f8e266]:
                - link "44341" [ref=f8e267] [cursor=pointer]:
                  - /url: /issues/44341
              - cell "Patch" [ref=f8e268]
              - cell "New" [ref=f8e269]
              - cell [ref=f8e270]:
                - link "Top menu hover highlight does not cover the height of the bar" [ref=f8e271] [cursor=pointer]:
                  - /url: /issues/44341
              - cell "2026-08-19 00:19" [ref=f8e272]
              - cell "UI" [ref=f8e273]
              - cell [ref=f8e274]:
                - link "Actions" [ref=f8e275] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e276]:
              - cell [ref=f8e277]:
                - checkbox [ref=f8e278]
              - cell [ref=f8e279]:
                - link "44337" [ref=f8e280] [cursor=pointer]:
                  - /url: /issues/44337
              - cell "Feature" [ref=f8e281]
              - cell "New" [ref=f8e282]
              - cell [ref=f8e283]:
                - link "Add an administration page listing all webhooks" [ref=f8e284] [cursor=pointer]:
                  - /url: /issues/44337
              - cell "2026-08-19 00:21" [ref=f8e285]
              - cell "Administration" [ref=f8e286]
              - cell [ref=f8e287]:
                - link "Actions" [ref=f8e288] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e289]:
              - cell [ref=f8e290]:
                - checkbox [ref=f8e291]
              - cell [ref=f8e292]:
                - link "44336" [ref=f8e293] [cursor=pointer]:
                  - /url: /issues/44336
              - cell "Defect" [ref=f8e294]
              - cell "New" [ref=f8e295]
              - cell [ref=f8e296]:
                - link "Automatic list marker insertion discards the textarea undo history and does not scroll the caret into view" [ref=f8e297] [cursor=pointer]:
                  - /url: /issues/44336
              - cell "2026-08-18 17:36" [ref=f8e298]
              - cell "UI" [ref=f8e299]
              - cell [ref=f8e300]:
                - link "Actions" [ref=f8e301] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e302]:
              - cell [ref=f8e303]:
                - checkbox [ref=f8e304]
              - cell [ref=f8e305]:
                - link "44335" [ref=f8e306] [cursor=pointer]:
                  - /url: /issues/44335
              - cell "Defect" [ref=f8e307]
              - cell "Resolved" [ref=f8e308]
              - cell [ref=f8e309]:
                - link "PDF preview of .ai attachments triggers an automatic download" [ref=f8e310] [cursor=pointer]:
                  - /url: /issues/44335
              - cell "2026-08-20 03:05" [ref=f8e311]
              - cell "Attachments" [ref=f8e312]
              - cell [ref=f8e313]:
                - link "Actions" [ref=f8e314] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e315]:
              - cell [ref=f8e316]:
                - checkbox [ref=f8e317]
              - cell [ref=f8e318]:
                - link "44330" [ref=f8e319] [cursor=pointer]:
                  - /url: /issues/44330
              - cell "Patch" [ref=f8e320]
              - cell "Resolved" [ref=f8e321]
              - cell [ref=f8e322]:
                - link "Convert CRLF line endings to LF in three test fixture files" [ref=f8e323] [cursor=pointer]:
                  - /url: /issues/44330
              - cell "2026-08-20 08:02" [ref=f8e324]
              - cell "Code cleanup/refactoring" [ref=f8e325]
              - cell [ref=f8e326]:
                - link "Actions" [ref=f8e327] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e328]:
              - cell [ref=f8e329]:
                - checkbox [ref=f8e330]
              - cell [ref=f8e331]:
                - link "44323" [ref=f8e332] [cursor=pointer]:
                  - /url: /issues/44323
              - cell "Patch" [ref=f8e333]
              - cell "New" [ref=f8e334]
              - cell [ref=f8e335]:
                - link "French translation update" [ref=f8e336] [cursor=pointer]:
                  - /url: /issues/44323
              - cell "2026-08-04 14:27" [ref=f8e337]
              - cell "Translations" [ref=f8e338]
              - cell [ref=f8e339]:
                - link "Actions" [ref=f8e340] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e341]:
              - cell [ref=f8e342]:
                - checkbox [ref=f8e343]
              - cell [ref=f8e344]:
                - link "44317" [ref=f8e345] [cursor=pointer]:
                  - /url: /issues/44317
              - cell "Defect" [ref=f8e346]
              - cell "Resolved" [ref=f8e347]
              - cell [ref=f8e348]:
                - link "Actions dropdown is not closed after copying a link" [ref=f8e349] [cursor=pointer]:
                  - /url: /issues/44317
              - cell "2026-08-18 21:39" [ref=f8e350]
              - cell "UI" [ref=f8e351]
              - cell [ref=f8e352]:
                - link "Actions" [ref=f8e353] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e354]:
              - cell [ref=f8e355]:
                - checkbox [ref=f8e356]
              - cell [ref=f8e357]:
                - link "44316" [ref=f8e358] [cursor=pointer]:
                  - /url: /issues/44316
              - cell "Feature" [ref=f8e359]
              - cell "New" [ref=f8e360]
              - cell [ref=f8e361]:
                - link "Automatically update parent issue status to \"In Progress\" when a subtask starts" [ref=f8e362] [cursor=pointer]:
                  - /url: /issues/44316
              - cell "2026-08-04 05:16" [ref=f8e363]
              - cell "Issues" [ref=f8e364]
              - cell [ref=f8e365]:
                - link "Actions" [ref=f8e366] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e367]:
              - cell [ref=f8e368]:
                - checkbox [ref=f8e369]
              - cell [ref=f8e370]:
                - link "44305" [ref=f8e371] [cursor=pointer]:
                  - /url: /issues/44305
              - cell "Feature" [ref=f8e372]
              - cell "New" [ref=f8e373]
              - cell [ref=f8e374]:
                - link "Add an official \"Legacy Theme\" as an optional built-in theme for Redmine 6.x and later" [ref=f8e375] [cursor=pointer]:
                  - /url: /issues/44305
              - cell "2026-07-31 09:35" [ref=f8e376]
              - cell "UI" [ref=f8e377]
              - cell [ref=f8e378]:
                - link "Actions" [ref=f8e379] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e380]:
              - cell [ref=f8e381]:
                - checkbox [ref=f8e382]
              - cell [ref=f8e383]:
                - link "44300" [ref=f8e384] [cursor=pointer]:
                  - /url: /issues/44300
              - cell "Defect" [ref=f8e385]
              - cell "New" [ref=f8e386]
              - cell [ref=f8e387]:
                - link "Mailer.with_deliveries(false) does not prevent emails from being sent" [ref=f8e388] [cursor=pointer]:
                  - /url: /issues/44300
              - cell "2026-08-20 06:29" [ref=f8e389]
              - cell "Email notifications" [ref=f8e390]
              - cell [ref=f8e391]:
                - link "Actions" [ref=f8e392] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e393]:
              - cell [ref=f8e394]:
                - checkbox [ref=f8e395]
              - cell [ref=f8e396]:
                - link "44299" [ref=f8e397] [cursor=pointer]:
                  - /url: /issues/44299
              - cell "Defect" [ref=f8e398]
              - cell "New" [ref=f8e399]
              - cell [ref=f8e400]:
                - 'link "Project copy: an issue that cannot be copied makes the whole copy fail silently" [ref=f8e401] [cursor=pointer]':
                  - /url: /issues/44299
              - cell "2026-07-30 15:24" [ref=f8e402]
              - cell "Projects" [ref=f8e403]
              - cell [ref=f8e404]:
                - link "Actions" [ref=f8e405] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e406]:
              - cell [ref=f8e407]:
                - checkbox [ref=f8e408]
              - cell [ref=f8e409]:
                - link "44295" [ref=f8e410] [cursor=pointer]:
                  - /url: /issues/44295
              - cell "Defect" [ref=f8e411]
              - cell "New" [ref=f8e412]
              - cell [ref=f8e413]:
                - link "issue PDF generation raising 504 Gateway Timeout" [ref=f8e414] [cursor=pointer]:
                  - /url: /issues/44295
              - cell "2026-07-29 08:50" [ref=f8e415]
              - cell "PDF export" [ref=f8e416]
              - cell [ref=f8e417]:
                - link "Actions" [ref=f8e418] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e419]:
              - cell [ref=f8e420]:
                - checkbox [ref=f8e421]
              - cell [ref=f8e422]:
                - link "44293" [ref=f8e423] [cursor=pointer]:
                  - /url: /issues/44293
              - cell "Patch" [ref=f8e424]
              - cell "New" [ref=f8e425]
              - cell [ref=f8e426]:
                - link "Add a caret to the account menu to indicate it opens a dropdown" [ref=f8e427] [cursor=pointer]:
                  - /url: /issues/44293
              - cell "2026-08-18 22:48" [ref=f8e428]
              - cell "UI" [ref=f8e429]
              - cell [ref=f8e430]:
                - link "Actions" [ref=f8e431] [cursor=pointer]:
                  - /url: "#"
            - row [ref=f8e432]:
              - cell [ref=f8e433]:
                - checkbox [ref=f8e434]
              - cell [ref=f8e435]:
                - link "44289" [ref=f8e436] [cursor=pointer]:
                  - /url: /issues/44289
              - cell "Defect" [ref=f8e437]
              - cell "New" [ref=f8e438]
              - cell [ref=f8e439]:
                - link "No status icon is displayed after checking for plugin updates on the Plugins page" [ref=f8e440] [cursor=pointer]:
                  - /url: /issues/44289
              - cell "2026-08-19 03:25" [ref=f8e441]
              - cell "Administration" [ref=f8e442]
              - cell [ref=f8e443]:
                - link "Actions" [ref=f8e444] [cursor=pointer]:
                  - /url: "#"
        - generic [ref=f8e445]:
          - list [ref=f8e446]:
            - listitem [ref=f8e447]: « Previous
            - listitem [ref=f8e448]: "1"
            - listitem [ref=f8e449]:
              - link "2" [ref=f8e450] [cursor=pointer]:
                - /url: /projects/redmine/issues?page=2
            - listitem [ref=f8e451]:
              - link "3" [ref=f8e452] [cursor=pointer]:
                - /url: /projects/redmine/issues?page=3
            - listitem [ref=f8e453]: …
            - listitem [ref=f8e454]:
              - link "193" [ref=f8e455] [cursor=pointer]:
                - /url: /projects/redmine/issues?page=193
            - listitem [ref=f8e456]:
              - link "Next »" [ref=f8e457] [cursor=pointer]:
                - /url: /projects/redmine/issues?page=2
          - generic [ref=f8e458]: (1-25/4804)
        - paragraph [ref=f8e459]:
          - text: "Also available in:"
          - link "Atom" [ref=f8e461] [cursor=pointer]:
            - /url: /projects/redmine/issues.atom
    - generic [ref=f8e462]:
      - text: Powered by
      - link "Redmine" [ref=f8e463] [cursor=pointer]:
        - /url: https://www.redmine.org/
      - text: © 2006-2023 Jean-Philippe Lang
  - log [ref=f8e464]
  - log [ref=f8e465]
  - log [ref=f8e466]
  - log [ref=f8e467]
  - log [ref=f8e468]
  - log [ref=f8e469]
  - log [ref=f8e470]
  - log [ref=f8e471]
  - log [ref=f8e472]
  - log [ref=f8e473]
  - log [ref=f8e474]
  - log [ref=f8e475]
  - log [ref=f8e476]
  - log [ref=f8e477]
  - log [ref=f8e478]
  - log [ref=f8e479]
  - log [ref=f8e480]
  - log [ref=f8e481]
  - log [ref=f8e482]
  - log [ref=f8e483]
  - log [ref=f8e484]
  - log [ref=f8e485]
  - log [ref=f8e486]
  - log [ref=f8e487]
  - log [ref=f8e488]
  - log [ref=f8e489]
  - log [ref=f8e490]
  - log [ref=f8e491]
  - log [ref=f8e492]
  - log [ref=f8e493]
  - log [ref=f8e494]
  - log [ref=f8e495]
  - log [ref=f8e496]
  - log [ref=f8e497]
  - log [ref=f8e498]
  - log [ref=f8e499]
```

# Test source

```ts
  1  | import { Page, Locator, expect } from "@playwright/test";
  2  | 
  3  | class IssuesPage {
  4  |     readonly page: Page;
  5  |     readonly statusFilterButton: Locator;
  6  |     readonly submitFormButton: Locator;
  7  |     readonly firstRowId: Locator;
  8  |     readonly firstRowStatus: Locator;
  9  | 
  10 |     readonly closedStatusSpan: Locator;
  11 | 
  12 |     readonly addFilterButton: Locator;
  13 |     readonly operatorsCategoryButton: Locator;
  14 |     readonly selectCategoryButton: Locator;
  15 |     
  16 |     readonly issueCategory: Locator;
  17 | 
  18 |     constructor(page: Page) {
  19 |         this.page = page;
  20 |         this.statusFilterButton = page.locator('select#operators_status_id');
  21 |         this.submitFormButton = page.locator('a.icon.icon-checked');
  22 |         const firstRow = page.getByRole('table').getByRole('row').nth(1);
  23 |         this.firstRowId = firstRow.getByRole('cell', { name: /^\d+$/ }).getByRole('link');
  24 |         this.firstRowStatus = firstRow.getByRole('cell').nth(2);
  25 |         this.closedStatusSpan = page.getByText('Closed', { exact: true });
  26 | 
  27 |         this.addFilterButton = page.getByLabel('Add filter').or(page.locator('select#add_filter_select'));
  28 |         this.operatorsCategoryButton = page.locator('select#operators_category_id');
  29 |         this.selectCategoryButton = page.locator('select#values_category_id_1');
  30 |         this.issueCategory = page.getByRole('row', { name: 'Category:' }).getByRole('cell').nth(1);
  31 |     }
  32 | 
  33 |     async setClosedStatus(): Promise<void> {
  34 |         await this.statusFilterButton.selectOption('c');
  35 |     }
  36 | 
  37 |     async submitForm(): Promise<void> {
> 38 |         await this.submitFormButton.click();
     |                                     ^ Error: locator.click: Error: strict mode violation: locator('a.icon.icon-checked') resolved to 2 elements:
  39 |     }
  40 | 
  41 |     async goToFirstRowPage(): Promise<void> {
  42 |         await this.firstRowId.click()
  43 |     }
  44 | 
  45 |     async addCategoryFilter(): Promise<void> {
  46 |         await this.addFilterButton.selectOption('category_id');
  47 |     }
  48 | 
  49 |     async setCategory(value: string): Promise<void> {
  50 |         await this.operatorsCategoryButton.selectOption('=');
  51 |         await this.selectCategoryButton.selectOption(value);
  52 |     }
  53 | }
  54 | 
  55 | export default IssuesPage;
```