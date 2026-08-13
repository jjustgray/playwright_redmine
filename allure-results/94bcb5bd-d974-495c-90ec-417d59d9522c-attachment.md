# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: featurePage.spec.ts >> Redmine tests >> TC-01: Navigation to "issue tracking system" feature page from main page
- Location: tests\featurePage.spec.ts:5:7

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: locator('h1')
Expected: "Issue Tracking"
Error: strict mode violation: locator('h1') resolved to 2 elements:
    1) <h1>…</h1> aka getByRole('heading', { name: 'Redmine' })
    2) <h1>…</h1> aka getByRole('heading', { name: 'Issue Tracking' })

Call log:
  - Expect "toHaveText" with timeout 5000ms
  - waiting for locator('h1')

```

# Page snapshot

```yaml
- generic [active] [ref=f15e1]:
  - generic [ref=f15e4]:
    - generic [ref=f15e5]:
      - generic [ref=f15e6]:
        - list:
          - listitem [ref=f15e7]:
            - link "Sign in" [ref=f15e8]:
              - /url: /login
          - listitem [ref=f15e9]:
            - link "Register" [ref=f15e10]:
              - /url: /account/register
      - list:
        - listitem [ref=f15e11]:
          - link "Home" [ref=f15e12]:
            - /url: /
        - listitem [ref=f15e13]:
          - link "Projects" [ref=f15e14]:
            - /url: /projects
        - listitem [ref=f15e15]:
          - link "Help" [ref=f15e16]:
            - /url: https://www.redmine.org/guide
    - generic [ref=f15e17]:
      - generic [ref=f15e18]:
        - generic [ref=f15e19]:
          - generic [ref=f15e20]:
            - link "Search" [ref=f15e21]:
              - /url: /projects/redmine/search?scope=subprojects
            - text: ":"
          - textbox "Search:" [ref=f15e22]
        - generic [ref=f15e23]: Redmine
      - heading "Redmine" [level=1] [ref=f15e25]
      - list [ref=f15e27]:
        - listitem [ref=f15e28]:
          - link "Overview" [ref=f15e29]:
            - /url: /projects/redmine
        - listitem [ref=f15e30]:
          - link "Download" [ref=f15e31]:
            - /url: /projects/redmine/wiki/Download
        - listitem [ref=f15e32]:
          - link "Activity" [ref=f15e33]:
            - /url: /projects/redmine/activity
        - listitem [ref=f15e34]:
          - link "Roadmap" [ref=f15e35]:
            - /url: /projects/redmine/roadmap
        - listitem [ref=f15e36]:
          - link "Issues" [ref=f15e37]:
            - /url: /projects/redmine/issues
        - listitem [ref=f15e38]:
          - link "News" [ref=f15e39]:
            - /url: /projects/redmine/news
        - listitem [ref=f15e40]:
          - link "Wiki" [ref=f15e41]:
            - /url: /projects/redmine/wiki
        - listitem [ref=f15e42]:
          - link "Forums" [ref=f15e43]:
            - /url: /projects/redmine/boards
        - listitem [ref=f15e44]:
          - link "Repository" [ref=f15e45]:
            - /url: /projects/redmine/repository
    - generic [ref=f15e46]:
      - generic [ref=f15e47]:
        - generic [ref=f15e48]:
          - heading "Latest releases" [level=3] [ref=f15e49]
          - paragraph [ref=f15e50]:
            - link "5.1.13 (2026-06-15)" [ref=f15e51]:
              - /url: /projects/redmine/wiki/Download
            - link "6.0.10 (2026-06-15)" [ref=f15e52]:
              - /url: /projects/redmine/wiki/Download
            - link "6.1.3 (2026-06-15)" [ref=f15e53]:
              - /url: /projects/redmine/wiki/Download
            - link "7.0.0 (2026-06-30)" [ref=f15e54]:
              - /url: /projects/redmine/wiki/Download
          - heading "Resources" [level=3] [ref=f15e55]
          - paragraph [ref=f15e56]:
            - link "User's Guide" [ref=f15e57]:
              - /url: /projects/redmine/wiki/Guide
            - link "Developer's Guide" [ref=f15e58]:
              - /url: /projects/redmine/wiki/Developer_Guide
            - link "Changelog" [ref=f15e59]:
              - /url: /projects/redmine/wiki/Changelog
            - text: ","
            - link "Security" [ref=f15e60]:
              - /url: /projects/redmine/wiki/Security_Advisories
            - link "FAQ" [ref=f15e61]:
              - /url: /projects/redmine/wiki/FAQ
            - text: ","
            - link "HowTo's" [ref=f15e62]:
              - /url: /projects/redmine/wiki/HowTos
            - link "Plugins" [ref=f15e63]:
              - /url: /plugins
            - text: ","
            - link "Themes" [ref=f15e64]:
              - /url: /projects/redmine/wiki/Theme_List
            - link "Privacy Policy" [ref=f15e65]:
              - /url: /projects/redmine/wiki/PrivacyPolicy
          - heading "Core Development" [level=3] [ref=f15e66]
          - paragraph [ref=f15e67]:
            - link "Official Subversion repository" [ref=f15e68]:
              - /url: https://svn.redmine.org/redmine/
            - link "GitHub Mirror" [ref=f15e69]:
              - /url: https://github.com/redmine/redmine
            - link "Continuous Integration" [ref=f15e70]:
              - /url: /projects/redmine/wiki/Continuous_Integration
          - paragraph [ref=f15e71]:
            - link [ref=f15e72]:
              - /url: https://github.com/redmine/redmine/actions/workflows/tests.yml
            - link [ref=f15e73]:
              - /url: https://github.com/redmine/redmine/actions/workflows/linters.yml
        - heading "Wiki" [level=3] [ref=f15e74]
        - list [ref=f15e75]:
          - listitem [ref=f15e76]:
            - link "Start page" [ref=f15e77]:
              - /url: /
          - listitem [ref=f15e78]:
            - link "Index by title" [ref=f15e79]:
              - /url: /projects/redmine/wiki/index
          - listitem [ref=f15e80]:
            - link "Index by date" [ref=f15e81]:
              - /url: /projects/redmine/wiki/date_index
        - insertion [ref=f15e82]:
          - generic [ref=f15e85]:
            - heading "These are topics related to the article that might interest you" [level=2] [ref=f15e87]: Discover more
            - link "Technical Reference" [ref=f15e88] [cursor=pointer]
            - link "Software Utilities" [ref=f15e93] [cursor=pointer]
            - link "Project Management" [ref=f15e98] [cursor=pointer]
            - link "Content Management" [ref=f15e103] [cursor=pointer]
            - link "Multimedia Software" [ref=f15e108] [cursor=pointer]
            - link "Word Games" [ref=f15e113] [cursor=pointer]
            - link "Clip Art & Animated GIFs" [ref=f15e118] [cursor=pointer]
            - link "Project Management Software" [ref=f15e123] [cursor=pointer]
        - insertion [ref=f15e129]:
          - iframe [ref=f15e131]:
            - iframe [ref=f21e1]:
              - generic [ref=f28e1]:
                - link [ref=f28e6] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CwME2RoR9asinGsK8nb8Pv--IiAacwM39iAGOo4Kt6xXZ2R4QASDBl_QHYKX-4Y60MaABj5iR8QLIAQmpAuVo1pK8A1g-qAMByANIqgT0AU_QHpItbqm1tgJt4jDR1Y5LuVsKgJIUyYADf5v1RU9KCKp76iU79f3TRPKQiIFYsjfX_BMhpwx62plY900Ff8flvhWkXIHByDWJD_Wft93FiwuAyh5uYdV3yIfoW6Flvu7mh6f3YSXPo_DUPzUIAaVjBgUNNxLajZ8QRkrKJJmAQSxBhAeWf5r6KKKZ125AgdZRfCYdPxPAK6i2-7J9BTFvrLmpN5R_y_50utq1lbzP63DiuyNPskjd4A_PJLhmYdY9gWLXvettyE8fy7Zb53bHMaeykcw-8O4kPwHXwSyRukOIfL4Sk9_WZkSdHu4md4j-7fnABInlotHtBYgFiPLNzVmgBi6AB9nn7o4BqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOljIpe3cm52WA2ABsQlEidavDFYQjIAKAZgLAcgLAYAMAaIMG2ICCgBqDQoLY29tLnJpYS5kb214AYgBAZABAaoNAlVByA0B6g0TCJvo7tybnZYDFUJe5wEdvzcCYYgOCdgTA9AVAZgWAcoWAgoA-BYBgBcBshcEGAFQBroXAjgBshgJEgKTVRguIgEA0BgBshkBNw&gclid=EAIaIQobChMIyOLu3JudlgMVQl7nAR2_NwJhEAEYASAAEgIFqPD_BwE&num=1&cid=CAQShgIAEQoqgQQYxQFhl5MOBkCa5oz7XG1lHvVT2NcDzasAeP_d-Wnh-mERG_zfUp4f5KdTwe4Z9YPGIMI-_dlNjl7RuyKxqVoOAzDkzcPAZrZ5dBrWQtz_38WSbTlO7YmD6w8Q_Rc6lYGWS6w9aHiW-HyZzzQCWCUyNsr84i96NnkVF50LRnaUPNjRNn2zh2RsBXFKnXwjCR0hAUbo1H6LGkZjnFaZJcO9kIGmL2HUAx5qqoWAMDbbQNVBGxNR-Oh44FefaHD6FcrChRReEIcW7e4IAtFRjf4in7UWsBN69sPfMQwKG0bF1FqHrl_PPpf4BIC-094rU4AjWe6x2NaLn08uBwQxfGukGAE&sig=AOD64_3l3yFVe79Zb_vPj4dLPnFzAPfjnA&client=ca-pub-0447284344517370&rf=1&nb=25&adurl=https://www.samsung.com/ua/watches/galaxy-watch/galaxy-watch-ultra2-titanium-silver-lte-sm-l715fzsasek/%3Fcid%3Dua_pd_display_gdn_galaxy-watch-ultra2_pre-order_12102_mx_watch9_ultra2_jul-aug_ua_banner_gdn_awareness%26utm_source%3Dgoogle%26utm_medium%3Dgdn%26utm_campaign%3D12102_mx_watch9_ultra2_preorder%26utm_term%3Dultra2%26gad_source%3D5
                  - iframe [ref=f28e9]:
                    - generic [ref=f33e1] [cursor=pointer]
                - generic [ref=f28e10] [cursor=pointer]
                - button [ref=f28e15] [cursor=pointer]
      - generic [ref=f15e132]:
        - paragraph [ref=f15e133]:
          - link "Guide" [ref=f15e134]:
            - /url: /projects/redmine/wiki/Guide
          - text: »
          - link "User Guide" [ref=f15e135]:
            - /url: /projects/redmine/wiki/User_Guide
          - text: »
        - generic [ref=f15e136]:
          - heading "Issue Tracking" [level=1] [ref=f15e137]
          - list [ref=f15e138]:
            - listitem [ref=f15e139]:
              - strong [ref=f15e140]: Table of contents
            - listitem [ref=f15e141]:
              - link "Issue Tracking" [ref=f15e142]:
                - /url: "#Issue-Tracking"
              - list [ref=f15e143]:
                - listitem [ref=f15e144]:
                  - link "Listing of the issue" [ref=f15e145]:
                    - /url: "#Listing-of-the-issue"
                  - list [ref=f15e146]:
                    - listitem [ref=f15e147]:
                      - link "Related issues" [ref=f15e148]:
                        - /url: "#Related-issues"
                    - listitem [ref=f15e149]:
                      - link "Watchers" [ref=f15e150]:
                        - /url: "#Watchers"
                    - listitem [ref=f15e151]:
                      - link "Associated revisions" [ref=f15e152]:
                        - /url: "#Associated-revisions"
                - listitem [ref=f15e153]:
                  - link "Adding a new issue" [ref=f15e154]:
                    - /url: "#Adding-a-new-issue"
                - listitem [ref=f15e155]:
                  - link "Updating an existing issue" [ref=f15e156]:
                    - /url: "#Updating-an-existing-issue"
                - listitem [ref=f15e157]:
                  - link "Editing an existing issue's Subject or Description" [ref=f15e158]:
                    - /url: "#Editing-an-existing-issues-Subject-or-Description"
                - listitem [ref=f15e159]:
                  - link "Subtasks" [ref=f15e160]:
                    - /url: "#Subtasks"
                  - list [ref=f15e161]:
                    - listitem [ref=f15e162]:
                      - link "Filtering & sorting" [ref=f15e163]:
                        - /url: "#Filtering-amp-sorting"
                    - listitem [ref=f15e164]:
                      - link "Relations between the parent task and its subtasks" [ref=f15e165]:
                        - /url: "#Relations-between-the-parent-task-and-its-subtasks"
          - paragraph [ref=f15e166]:
            - text: Issues are the heart of the Redmine business. An issue is bound to a
            - link "project" [ref=f15e167] [cursor=pointer]:
              - /url: "#"
            - text: ", owned by a user, can be related to a version, etc."
            - link "Freeware & Shareware" [ref=f15e170] [cursor=pointer]:
              - generic [ref=f15e171]: Freeware
              - text: "& Shareware"
          - heading "Listing of the issue" [level=2] [ref=f15e175]
          - paragraph [ref=f15e176]: From a selected issue page, you can see the work in progress that is done to fix the issue. The messages are displayed in chronological order, (to change the order - see the setting in 'My Accounts'). It is possible to quote others' messages as well as to edit yours.
          - heading "Related issues" [level=3] [ref=f15e177]
          - paragraph [ref=f15e178]: "'Related issues' allow developers to link issues to each other in order to remove duplicates or simplify their workflow."
          - text: "It is possible to link issues based on various relations. Current relations are:"
          - list [ref=f15e179]:
            - listitem [ref=f15e180]:
              - strong [ref=f15e181]: related to
              - text: "- Just adds a link to the other issue."
          - list [ref=f15e182]:
            - listitem [ref=f15e183]:
              - strong [ref=f15e184]: duplicates
              - text: "- Links issues so that closing one, will close the other (e.g. closing A will close B) For example, if issue B"
              - strong [ref=f15e185]: duplicates
              - text: "A: - closing B will leave A open - closing A will automatically close B"
          - list [ref=f15e186]:
            - listitem [ref=f15e187]:
              - strong [ref=f15e188]: duplicated by
              - text: "- Reciprocal of"
              - emphasis [ref=f15e189]: duplicates
              - text: . For example, if issue A is
              - strong [ref=f15e190]: duplicated by
              - text: "issue B: - closing B will leave A open - closing A will automatically close B"
          - list [ref=f15e191]:
            - listitem [ref=f15e192]:
              - strong [ref=f15e193]: blocks
              - text: "- Links issues so that closing one can be blocked by an issue which is still open If issue B blocks A, A can't be closed unless B is."
            - listitem [ref=f15e194]:
              - strong [ref=f15e195]: blocked by
              - text: "- Reciprocal of"
              - emphasis [ref=f15e196]: blocks
              - text: .
          - list [ref=f15e197]:
            - listitem [ref=f15e198]:
              - strong [ref=f15e199]: precedes
              - text: "- Links issues to define an \"order\", where A needs to be completed x days before B can be started on If B follows A, you can't give B a starting date equal or less than the ending date of A."
            - listitem [ref=f15e200]:
              - strong [ref=f15e201]: follows
              - text: "- Reciprocal of"
              - emphasis [ref=f15e202]: precedes
              - text: . If issue B follows A (ex A ends the 21/04 and B begins the 22/04) and you add +2 day at the ending date of A, the starting and ending dates of B will be +2 too.
          - list [ref=f15e203]:
            - listitem [ref=f15e204]:
              - strong [ref=f15e205]: copied from
              - text: "- Links issues to identify whether it was copied, and from which issue it was copied from."
            - listitem [ref=f15e206]:
              - strong [ref=f15e207]: copied to
              - text: "- Reciprocal of"
              - emphasis [ref=f15e208]: copied from
              - text: .
          - paragraph [ref=f15e209]:
            - img "Redmine Related Issues" [ref=f15e210]
          - paragraph [ref=f15e211]:
            - text: Administrators can define the
            - link "permissions" [ref=f15e212]:
              - /url: /projects/redmine/wiki/RedmineRoles#Permissions
            - text: of users to add and edit such relations.
            - link "Networking" [ref=f15e213] [cursor=pointer]
          - insertion [ref=f15e219]:
            - iframe [ref=f15e221]:
              - generic [ref=f19e1]:
                - generic [ref=f19e6]:
                  - generic "Dropbox" [ref=f19e7]:
                    - link "Edit PDFs" [ref=f19e8] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=COwvcRoR9aoiXFsDSiM0PjuetmQWHj5KyiAGy7tvI9RXqgtvzkQ4QASDBl_QHYKX-4Y60MaABj6Tu3APIAQGoAwHIA8sEqgTwAU_QR-wax8KLs4eJwBlXlv6hMFw2tWSAroeGGSCJR5B3Kf74BXV10sGSjIUotg8YQC2k-8tGh6khJX8TmqKWRSPWLYyQ7frir9EJ2HwqsI5TiOwsKB_uszKhkUdVMG2fHvwEL18XANo33aDB7r4O8RACMFmSVshJpOK0nMpub4G2x9Mi473rbeAi-C7eE_LO9YRfu63i2Jiwn6-0tXr-cb7TewXy0vfEIbwVTlyqzjSj570jxAx0BSHfT0gtn5PvhNWcBpWj5DvbCqDLMouV37HemJagmYVADUupfaaIq2_Ig5_OKAeAz3YIQuZqkEY6asAE29K81uYEiAWYzv6OUIAH0bHiLqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYv5Pp3JudlgNgAbEJgdUrs5S5__iACgGYCwHICwGiDDliGAoWY29tLmdldGRyb3Bib3guRHJvcGJveGoVChNjb20uZHJvcGJveC5hbmRyb2lkeAGIAQGQAQGqDQJVQcgNAeoNEwjb1Orcm52WAxVAKaIDHY5zK1OIDgmwDob6zZ8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAvFsGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIiNLq3JudlgMVQCmiAx2OcytTEAEYASAAEgKDTPD_BwE&num=1&cid=CAQShgIAEQoqgf9whSexA0TlFTxHjT1GTGy2FdWQFchBrKbASSn9yVoDUjhmZ3XwOc7pMU6A6Ff9qyoSDdhvMQ7iRFHMCIH7dxDY1gCTRDEDW07nHxlDpwCpvWiA1vS467G9cS5eJFtSHgLAo-_ccdndh8oyOdvyCnWp12Etku0yQW774i7p-nqxZUEE_RPabf8xR8OUwkjBbSmU0aXpq7kLUdW4lQC3pFMIzATyisuvdbMMmw_eFgtPonz449PraG1Fer5jk9Q2LrRHYuM7IhlFVHtyNReuqXUAoYBbVvjoQCakGGWtbrmCany_qPeQSEFfUm6h2y3p8ujG8LvuvuFYpajJWOZqiJmuGAE&sig=AOD64_1RXR-V2GrBi0v6JyBBOCg4GAxl1w&client=ca-pub-0447284344517370&rf=1&nb=0&adurl=https://www.dropbox.com/official-teams-page%3F_tk%3Dpaid_sem_goog_biz_pmax_int20%26_camp%3D21506269140%26_kw%3D%7C%26_ad%3D%7C%7Cc%26gad_source%3D5%26gad_campaignid%3D21506271000
                  - link "Dropbox" [ref=f19e10] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=COwvcRoR9aoiXFsDSiM0PjuetmQWHj5KyiAGy7tvI9RXqgtvzkQ4QASDBl_QHYKX-4Y60MaABj6Tu3APIAQGoAwHIA8sEqgTwAU_QR-wax8KLs4eJwBlXlv6hMFw2tWSAroeGGSCJR5B3Kf74BXV10sGSjIUotg8YQC2k-8tGh6khJX8TmqKWRSPWLYyQ7frir9EJ2HwqsI5TiOwsKB_uszKhkUdVMG2fHvwEL18XANo33aDB7r4O8RACMFmSVshJpOK0nMpub4G2x9Mi473rbeAi-C7eE_LO9YRfu63i2Jiwn6-0tXr-cb7TewXy0vfEIbwVTlyqzjSj570jxAx0BSHfT0gtn5PvhNWcBpWj5DvbCqDLMouV37HemJagmYVADUupfaaIq2_Ig5_OKAeAz3YIQuZqkEY6asAE29K81uYEiAWYzv6OUIAH0bHiLqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYv5Pp3JudlgNgAbEJgdUrs5S5__iACgGYCwHICwGiDDliGAoWY29tLmdldGRyb3Bib3guRHJvcGJveGoVChNjb20uZHJvcGJveC5hbmRyb2lkeAGIAQGQAQGqDQJVQcgNAeoNEwjb1Orcm52WAxVAKaIDHY5zK1OIDgmwDob6zZ8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAvFsGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIiNLq3JudlgMVQCmiAx2OcytTEAEYASAAEgKDTPD_BwE&num=1&cid=CAQShgIAEQoqgf9whSexA0TlFTxHjT1GTGy2FdWQFchBrKbASSn9yVoDUjhmZ3XwOc7pMU6A6Ff9qyoSDdhvMQ7iRFHMCIH7dxDY1gCTRDEDW07nHxlDpwCpvWiA1vS467G9cS5eJFtSHgLAo-_ccdndh8oyOdvyCnWp12Etku0yQW774i7p-nqxZUEE_RPabf8xR8OUwkjBbSmU0aXpq7kLUdW4lQC3pFMIzATyisuvdbMMmw_eFgtPonz449PraG1Fer5jk9Q2LrRHYuM7IhlFVHtyNReuqXUAoYBbVvjoQCakGGWtbrmCany_qPeQSEFfUm6h2y3p8ujG8LvuvuFYpajJWOZqiJmuGAE&sig=AOD64_1RXR-V2GrBi0v6JyBBOCg4GAxl1w&client=ca-pub-0447284344517370&rf=1&nb=7&adurl=https://www.dropbox.com/official-teams-page%3F_tk%3Dpaid_sem_goog_biz_pmax_int20%26_camp%3D21506269140%26_kw%3D%7C%26_ad%3D%7C%7Cc%26gad_source%3D5%26gad_campaignid%3D21506271000
                - generic [ref=f19e11] [cursor=pointer]
                - button [ref=f19e16] [cursor=pointer]
                - iframe
          - heading "Watchers" [level=3] [ref=f15e222]
          - paragraph [ref=f15e223]: Display a list of all the users who are watching this issue. If the issue is updated, those users will be notified.
          - paragraph [ref=f15e224]:
            - text: If you are logged in as a project administrator, it is possible for you to add users to the watch list on this page. By clicking on the Add link, a drop-down menu with a
            - strong [ref=f15e225]: Add
            - text: button appear, which allows you to select which user to add to the watch list.
          - paragraph [ref=f15e226]:
            - img "Redmine Watchers" [ref=f15e227]
          - paragraph [ref=f15e228]:
            - text: Administrators can define the
            - link "permissions" [ref=f15e229]:
              - /url: /projects/redmine/wiki/RedmineRoles#Permissions
            - text: of users to add/delete watchers as well as to see the list of watchers.
          - heading "Associated revisions" [level=3] [ref=f15e230]
          - paragraph [ref=f15e231]:
            - text: If the administrator has defined
            - link "Referencing Issues Keywords" [ref=f15e232]:
              - /url: /projects/redmine/wiki/RedmineSettings#Referencing-issues-in-commit-messages
            - text: ", a developer that uses such keyword(s) will see its commit message displayed on the issue page, under the Associated revisions block (generally to the right of the first reply)."
          - paragraph [ref=f15e233]:
            - img "Redmine Associated Revision" [ref=f15e234]
          - paragraph [ref=f15e235]:
            - text: Revisions can also be associated to issues manually, from a changeset (revision) view in the Repository browser. The manual associations are reversible. They can be revoked by using the broken chain icon to the right of an added association, again in the changeset view.
            - link "Language Resources" [ref=f15e236] [cursor=pointer]:
              - generic [ref=f15e237]: Language
              - text: Resources
          - paragraph [ref=f15e241]
          - heading "Adding a new issue" [level=2] [ref=f15e242]
          - insertion [ref=f15e244]:
            - iframe [ref=f15e246]:
              - generic [ref=f20e1]:
                - generic [ref=f20e6]:
                  - generic "Dropbox" [ref=f20e7]:
                    - link "Edit PDFs" [ref=f20e8] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CbBWSRoR9aruWFoqbiM0P89KUmQ-Hj5KyiAGy7tvI9RXqgtvzkQ4QASDBl_QHYKX-4Y60MaABj6Tu3APIAQGoAwHIA8sEqgTwAU_QkdU945MTC8j81oWsIeqDiTdTVXLFk2kO2Zp61b2JhTgfVFiL9aMSn3jANiyAhlJmdqVWh29ffjPzuU2Xza3vx-a-JqFVQ2kBv4q5yR2AnbkAvFWZOyNpEHLDMZQS0aKBsMi9w7btzO65fFMed_Cw1i7uvBylVoEGrtpExw5aNJDgOrJs7sPsjbg9LxwIAYx3gUYK2g7g-mmxej0kfZRrTrH29fDWgwYOQFEmv5mCisC2h8uffkwXYSENYwIgZxvAY5BKLMrtJyqTd0mTfvhBQXZcnUZpcdcLJowlS30O0QJkwdQqPoWRNap4L2FS8MAE29K81uYEiAWYzv6OUIAH0bHiLqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYxpLp3JudlgNgAbEJgdUrs5S5__iACgGYCwHICwGiDDliGAoWY29tLmdldGRyb3Bib3guRHJvcGJveGoVChNjb20uZHJvcGJveC5hbmRyb2lkeAGIAQGQAQGqDQJVQcgNAeoNEwjS1-rcm52WAxWKDaIDHXMpJfOIDgmwDob6zZ8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAvFsGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIu9Hq3JudlgMVig2iAx1zKSXzEAEYASAAEgK5mvD_BwE&num=1&cid=CAQShgIAEQoqgaT5HMAd6PkKvb5HrYqcbqtdZQAJed03QPhl9QNGXYoZSnCliUQnsJzsH9dHdGYm6p_pb_uAa658RyLfBfNnEiUdpxiNkxEfPi3phvG1RsfI6ajq0TWPyZEj784J6LWJVogGmvmnrU8_Xy0mJlHMQ_m26P_xkiP4mipNNvC9ZJR-ebGf8IsvFm7BIn-5yaZTPxRssIEKoI47XO1jit_k6kcdj3f6lexmNy7S-RIuN6PkJPYHixu0DGQ-uAcYmjO41upRISU8-amn7i9wkJPWBkjfAH4WYu2m4_sQjxU-Chvr06Ed8GqquvAM4q2e_BjTN1gKD7JKQVxcwbG_MEcJiQxZGAE&sig=AOD64_0LjDSgny6K4vGp0PbXcDMCtXDFwg&client=ca-pub-0447284344517370&rf=1&nb=0&adurl=https://www.dropbox.com/official-teams-page%3F_tk%3Dpaid_sem_goog_biz_pmax_int20%26_camp%3D21506269140%26_kw%3D%7C%26_ad%3D%7C%7Cc%26gad_source%3D5%26gad_campaignid%3D21506271000
                  - link "Dropbox" [ref=f20e10] [cursor=pointer]:
                    - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CbBWSRoR9aruWFoqbiM0P89KUmQ-Hj5KyiAGy7tvI9RXqgtvzkQ4QASDBl_QHYKX-4Y60MaABj6Tu3APIAQGoAwHIA8sEqgTwAU_QkdU945MTC8j81oWsIeqDiTdTVXLFk2kO2Zp61b2JhTgfVFiL9aMSn3jANiyAhlJmdqVWh29ffjPzuU2Xza3vx-a-JqFVQ2kBv4q5yR2AnbkAvFWZOyNpEHLDMZQS0aKBsMi9w7btzO65fFMed_Cw1i7uvBylVoEGrtpExw5aNJDgOrJs7sPsjbg9LxwIAYx3gUYK2g7g-mmxej0kfZRrTrH29fDWgwYOQFEmv5mCisC2h8uffkwXYSENYwIgZxvAY5BKLMrtJyqTd0mTfvhBQXZcnUZpcdcLJowlS30O0QJkwdQqPoWRNap4L2FS8MAE29K81uYEiAWYzv6OUIAH0bHiLqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYxpLp3JudlgNgAbEJgdUrs5S5__iACgGYCwHICwGiDDliGAoWY29tLmdldGRyb3Bib3guRHJvcGJveGoVChNjb20uZHJvcGJveC5hbmRyb2lkeAGIAQGQAQGqDQJVQcgNAeoNEwjS1-rcm52WAxWKDaIDHXMpJfOIDgmwDob6zZ8Y2BML0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAkSAvFsGAEiAQDQGAHoGAGyGQE3whkCCAE&gclid=EAIaIQobChMIu9Hq3JudlgMVig2iAx1zKSXzEAEYASAAEgK5mvD_BwE&num=1&cid=CAQShgIAEQoqgaT5HMAd6PkKvb5HrYqcbqtdZQAJed03QPhl9QNGXYoZSnCliUQnsJzsH9dHdGYm6p_pb_uAa658RyLfBfNnEiUdpxiNkxEfPi3phvG1RsfI6ajq0TWPyZEj784J6LWJVogGmvmnrU8_Xy0mJlHMQ_m26P_xkiP4mipNNvC9ZJR-ebGf8IsvFm7BIn-5yaZTPxRssIEKoI47XO1jit_k6kcdj3f6lexmNy7S-RIuN6PkJPYHixu0DGQ-uAcYmjO41upRISU8-amn7i9wkJPWBkjfAH4WYu2m4_sQjxU-Chvr06Ed8GqquvAM4q2e_BjTN1gKD7JKQVxcwbG_MEcJiQxZGAE&sig=AOD64_0LjDSgny6K4vGp0PbXcDMCtXDFwg&client=ca-pub-0447284344517370&rf=1&nb=7&adurl=https://www.dropbox.com/official-teams-page%3F_tk%3Dpaid_sem_goog_biz_pmax_int20%26_camp%3D21506269140%26_kw%3D%7C%26_ad%3D%7C%7Cc%26gad_source%3D5%26gad_campaignid%3D21506271000
                - generic [ref=f20e11] [cursor=pointer]
                - button [ref=f20e16] [cursor=pointer]
                - iframe
          - paragraph [ref=f15e247]:
            - text: People can create a new issue when they meet the
            - link "roles and permissions" [ref=f15e248]:
              - /url: /projects/redmine/wiki/RedmineRoles
            - text: configured by the Redmine Administrator (
            - 'link "Role: Issue Tracking > Add Issues" [ref=f15e249]':
              - /url: /projects/redmine/wiki/RedmineRoles#Permissions
            - text: ).When creating a new issue, one of the most important items is the
            - link "tracker field" [ref=f15e250]:
              - /url: /projects/redmine/wiki/RedmineIssueTrackingSetup#Trackers
            - text: ", which defines the nature of the issue. By default, Redmine comes with three different trackers:"
            - emphasis [ref=f15e251]: bug
            - text: ","
            - emphasis [ref=f15e252]: feature
            - text: ", and"
            - emphasis [ref=f15e253]: support
            - text: .
            - link "Freeware & Shareware" [ref=f15e254] [cursor=pointer]:
              - generic [ref=f15e255]: Freeware
              - text: "& Shareware"
          - heading "Updating an existing issue" [level=2] [ref=f15e259]
          - paragraph [ref=f15e260]: "(TODO: describe and upload a screen-shot of update panel)"
          - paragraph [ref=f15e261]:
            - text: To edit the issue, Click
            - emphasis [ref=f15e262]: Update
            - text: "link (having a pencil icon) at the top or the bottom of the issue page:"
          - paragraph [ref=f15e263]:
            - img "Screenshot for Update an existing issue" [ref=f15e264]
          - paragraph [ref=f15e265]:
            - text: Depending you your role permissions (see
            - link "roles and permissions" [ref=f15e266]:
              - /url: /projects/redmine/wiki/RedmineRoles
            - text: ), you will see a complete or a limited set of editable issue properties.
          - heading "Editing an existing issue's Subject or Description" [level=2] [ref=f15e267]
          - paragraph [ref=f15e268]:
            - text: In order to edit an existing issue, your role has to have the
            - link "Issue Tracking > Edit Issues" [ref=f15e269]:
              - /url: /projects/redmine/wiki/RedmineRoles#Permissions
            - text: right in the
            - link "roles and permissions" [ref=f15e270]:
              - /url: /projects/redmine/wiki/RedmineRoles
            - text: configuration.
          - list [ref=f15e271]:
            - listitem [ref=f15e272]: Open the issue
            - listitem [ref=f15e273]:
              - text: Click
              - emphasis [ref=f15e274]: Update
              - text: link (having a pen icon) at the top or the bottom of the issue page.
          - paragraph [ref=f15e275]: The description of the issue has pencil icon right next to it that you can click to change the description.
          - paragraph [ref=f15e276]:
            - img "New location to change the description of an issue" [ref=f15e277]
          - heading "Subtasks" [level=2] [ref=f15e278]
          - paragraph [ref=f15e279]:
            - text: Sometimes it is useful to break huge tasks down into smaller subtasks to have more control over the task or to assign smaller parts of it to different users. One can create a subtask by either clicking the 'Add' link in the subtasks section of the parent task or by filling the parents task id into the 'parents task' field of the subtask. This is also possible after creation by
            - link "updating the task" [ref=f15e280]:
              - /url: "#Updating-an-existing-issue"
            - text: . Because it's just a normal task a subtask can also have subtasks. There is no limit in the depth of this stack.
          - insertion [ref=f15e282]
          - paragraph [ref=f15e284]:
            - text: Subtasks can belong to a different
            - link "project" [ref=f15e285] [cursor=pointer]:
              - /url: "#"
            - text: than the parent task. This functionality is configurable in the
            - link "settings section" [ref=f15e288]:
              - /url: /projects/redmine/wiki/RedmineSettings#Allow-cross-project-subtasks
            - text: in the administration menu. Defining subtasks requires the permission 'Manage subtasks' which can be set in the
            - link "roles and permissions section" [ref=f15e289]:
              - /url: /projects/redmine/wiki/RedmineRoles
            - text: in the administration menu.If a project gets copied the whole tree beneath the parent task is copied, too. When copying only the parent task one can choose if the subtasks should also be copied.
          - heading "Filtering & sorting" [level=3] [ref=f15e290]
          - paragraph [ref=f15e291]: One can show the parents task id as sortable column in the issues list and there is also a filter option for it.When the list is sorted by the parent task id the subtasks hierarchy is displayed in an indented tree structure.
          - paragraph [ref=f15e292]: As long as the tasks share the same target version the tree structure is also visible in the gantt view.
          - heading "Relations between the parent task and its subtasks" [level=3] [ref=f15e293]
          - paragraph [ref=f15e294]: Some properties of the parent task are influenced by the subtasks underneath.The following relations exist between the parent task and its subtasks.
          - list [ref=f15e295]:
            - listitem [ref=f15e296]: The parent task's done percentage is the weighted average ratio of subtasks.
            - listitem [ref=f15e297]: The parent task's start is the lowest date of subtasks.
            - listitem [ref=f15e298]: The parent task's due date is the highest due date of subtasks.
            - listitem [ref=f15e299]: The parent task's spent time is the sum of the subtasks' spent times.
            - listitem [ref=f15e300]: The parent task's estimation time is the sum of the subtasks' estimation times.
            - listitem [ref=f15e301]: The parent task's priority is the highest of the subtasks' priorities.
            - listitem [ref=f15e302]: Subtasks are rescheduled when a 'precedes' relation is set on a parent task.
        - group "Files (10)" [ref=f15e303]
        - paragraph
    - generic [ref=f15e305]:
      - text: Powered by
      - link "Redmine" [ref=f15e306]:
        - /url: https://www.redmine.org/
      - text: © 2006-2023 Jean-Philippe Lang
  - log [ref=f15e307]
  - log [ref=f15e308]
  - log [ref=f15e309]
  - log [ref=f15e310]
  - log [ref=f15e311]
  - log [ref=f15e312]
  - log [ref=f15e313]
  - log [ref=f15e314]
  - log [ref=f15e315]
  - log [ref=f15e316]
  - log [ref=f15e317]
  - log [ref=f15e318]
  - log [ref=f15e319]
  - log [ref=f15e320]
  - log [ref=f15e321]
  - log [ref=f15e322]
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
  28 |         await expect(this.page).toHaveURL(/RedmineIssues/);
> 29 |         await expect(this.page.locator('h1')).toHaveText('Issue Tracking');
     |                                               ^ Error: expect(locator).toHaveText(expected) failed
  30 |     }
  31 | 
  32 | 
  33 | }
  34 | 
  35 | export default MainPage;
```