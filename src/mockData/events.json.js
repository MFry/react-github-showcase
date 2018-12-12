export default [
  {
    id: '7663628540',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 321278,
      name: 'npm/npm',
      url: 'https://api.github.com/repos/npm/npm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/npm/npm/issues/20403',
        repository_url: 'https://api.github.com/repos/npm/npm',
        labels_url:
          'https://api.github.com/repos/npm/npm/issues/20403/labels{/name}',
        comments_url:
          'https://api.github.com/repos/npm/npm/issues/20403/comments',
        events_url: 'https://api.github.com/repos/npm/npm/issues/20403/events',
        html_url: 'https://github.com/npm/npm/pull/20403',
        id: 316551740,
        number: 20403,
        title:
          'feat: add npm init support of git, path, url, and version names',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-04-22T05:54:43Z',
        updated_at: '2018-05-11T22:15:26Z',
        closed_at: '2018-05-11T21:40:51Z',
        author_association: 'CONTRIBUTOR',
        pull_request: {
          url: 'https://api.github.com/repos/npm/npm/pulls/20403',
          html_url: 'https://github.com/npm/npm/pull/20403',
          diff_url: 'https://github.com/npm/npm/pull/20403.diff',
          patch_url: 'https://github.com/npm/npm/pull/20403.patch',
        },
        body: 'This PR addresses #20399.',
      },
      comment: {
        url: 'https://api.github.com/repos/npm/npm/issues/comments/388499042',
        html_url:
          'https://github.com/npm/npm/pull/20403#issuecomment-388499042',
        issue_url: 'https://api.github.com/repos/npm/npm/issues/20403',
        id: 388499042,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T22:15:26Z',
        updated_at: '2018-05-11T22:15:26Z',
        author_association: 'CONTRIBUTOR',
        body: 'Thank you!',
      },
    },
    public: true,
    created_at: '2018-05-11T22:15:26Z',
    org: {
      id: 6078720,
      login: 'npm',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/npm',
      avatar_url: 'https://avatars.githubusercontent.com/u/6078720?',
    },
  },
  {
    id: '7663627825',
    type: 'DeleteEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 130536460,
      name: 'jdalton/npm',
      url: 'https://api.github.com/repos/jdalton/npm',
    },
    payload: {
      ref: 'init-repo',
      ref_type: 'branch',
      pusher_type: 'user',
    },
    public: true,
    created_at: '2018-05-11T22:15:13Z',
  },
  {
    id: '7663383022',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2557870752,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: '8a8f52cddc21f46c006a01b8ff241816b75d7254',
      before: '914d4b87fa65dfc52e30ebd962c3638894e784fc',
      commits: [
        {
          sha: 'f76fa1d7c31b7a78fe6ad9b55c626f9081d0c429',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add getGetter() and getSetter().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/f76fa1d7c31b7a78fe6ad9b55c626f9081d0c429',
        },
        {
          sha: '29da23f1ef484371e02c1b7274cf5d8147f3fa60',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Lazily update export traps based on accessors.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/29da23f1ef484371e02c1b7274cf5d8147f3fa60',
        },
        {
          sha: '8a8f52cddc21f46c006a01b8ff241816b75d7254',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Track the running setter.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/8a8f52cddc21f46c006a01b8ff241816b75d7254',
        },
      ],
    },
    public: true,
    created_at: '2018-05-11T21:05:42Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7661489166',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3785',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/events',
        html_url: 'https://github.com/lodash/lodash/issues/3785',
        id: 321988532,
        number: 3785,
        title:
          'mergeDeep does not merge object properties only when customizer function is passed',
        user: {
          login: 'yujiosaka',
          id: 2261067,
          avatar_url: 'https://avatars2.githubusercontent.com/u/2261067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/yujiosaka',
          html_url: 'https://github.com/yujiosaka',
          followers_url: 'https://api.github.com/users/yujiosaka/followers',
          following_url:
            'https://api.github.com/users/yujiosaka/following{/other_user}',
          gists_url: 'https://api.github.com/users/yujiosaka/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/yujiosaka/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/yujiosaka/subscriptions',
          organizations_url: 'https://api.github.com/users/yujiosaka/orgs',
          repos_url: 'https://api.github.com/users/yujiosaka/repos',
          events_url: 'https://api.github.com/users/yujiosaka/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/yujiosaka/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-10T16:08:14Z',
        updated_at: '2018-05-11T14:24:10Z',
        closed_at: '2018-05-11T14:24:09Z',
        author_association: 'NONE',
        body:
          "**What's the problem?**\r\n\r\nDocs say that `merge` method recursively merges properties as follows:\r\n\r\n> This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.\r\n\r\nDocs also say that `mergeWith` method is the same with `merge` except that it accepts customizer as follows:\r\n\r\n> This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. \r\n\r\nSo I assume that mergeWith recursively merges properties using customizer.\r\nThe assumption is true when the customizer is not passed. However, it stops working recursively when customizer is passed like below:\r\n\r\n```\r\n> const {merge, mergeWith} = require('lodash');\r\n> merge({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]}, (obj, src) => src || obj)\r\n{ a: [ { b: 2, d: 4 } ] }\r\n```\r\n\r\n**What do I expect?**\r\n\r\nI expect `mergeWith` to recursively merge properties with or without customizer.\r\nI'd like to see the following results:\r\n\r\n```\r\n> const {merge, mergeWith} = require('lodash');\r\n> merge({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]}, (obj, src) => src || obj)\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n```",
      },
    },
    public: true,
    created_at: '2018-05-11T14:24:10Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7661489147',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3785',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3785/events',
        html_url: 'https://github.com/lodash/lodash/issues/3785',
        id: 321988532,
        number: 3785,
        title:
          'mergeDeep does not merge object properties only when customizer function is passed',
        user: {
          login: 'yujiosaka',
          id: 2261067,
          avatar_url: 'https://avatars2.githubusercontent.com/u/2261067?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/yujiosaka',
          html_url: 'https://github.com/yujiosaka',
          followers_url: 'https://api.github.com/users/yujiosaka/followers',
          following_url:
            'https://api.github.com/users/yujiosaka/following{/other_user}',
          gists_url: 'https://api.github.com/users/yujiosaka/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/yujiosaka/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/yujiosaka/subscriptions',
          organizations_url: 'https://api.github.com/users/yujiosaka/orgs',
          repos_url: 'https://api.github.com/users/yujiosaka/repos',
          events_url: 'https://api.github.com/users/yujiosaka/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/yujiosaka/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-10T16:08:14Z',
        updated_at: '2018-05-11T14:24:09Z',
        closed_at: '2018-05-11T14:24:09Z',
        author_association: 'NONE',
        body:
          "**What's the problem?**\r\n\r\nDocs say that `merge` method recursively merges properties as follows:\r\n\r\n> This method is like _.assign except that it recursively merges own and inherited enumerable string keyed properties of source objects into the destination object.\r\n\r\nDocs also say that `mergeWith` method is the same with `merge` except that it accepts customizer as follows:\r\n\r\n> This method is like _.merge except that it accepts customizer which is invoked to produce the merged values of the destination and source properties. \r\n\r\nSo I assume that mergeWith recursively merges properties using customizer.\r\nThe assumption is true when the customizer is not passed. However, it stops working recursively when customizer is passed like below:\r\n\r\n```\r\n> const {merge, mergeWith} = require('lodash');\r\n> merge({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]}, (obj, src) => src || obj)\r\n{ a: [ { b: 2, d: 4 } ] }\r\n```\r\n\r\n**What do I expect?**\r\n\r\nI expect `mergeWith` to recursively merge properties with or without customizer.\r\nI'd like to see the following results:\r\n\r\n```\r\n> const {merge, mergeWith} = require('lodash');\r\n> merge({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]})\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n> mergeWith({a: [{b: 1, c: 3}]}, {a: [{b: 2, d: 4}]}, (obj, src) => src || obj)\r\n{ a: [ { b: 2, c: 3, d: 4 } ] }\r\n```",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash/issues/comments/388379033',
        html_url:
          'https://github.com/lodash/lodash/issues/3785#issuecomment-388379033',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3785',
        id: 388379033,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T14:24:09Z',
        updated_at: '2018-05-11T14:24:09Z',
        author_association: 'OWNER',
        body:
          "Hi @yujiosaka!\r\n\r\nWhen you defer to the customizer you're letting it handle the merge. You can return `undefined` from the customizer for it to signal the method to take over a specific merge.",
      },
    },
    public: true,
    created_at: '2018-05-11T14:24:10Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7661479549',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/events',
        html_url: 'https://github.com/lodash/lodash/pull/3786',
        id: 322164756,
        number: 3786,
        title: 'Added short circuit for typed arrays',
        user: {
          login: 'twolfson',
          id: 902488,
          avatar_url: 'https://avatars3.githubusercontent.com/u/902488?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/twolfson',
          html_url: 'https://github.com/twolfson',
          followers_url: 'https://api.github.com/users/twolfson/followers',
          following_url:
            'https://api.github.com/users/twolfson/following{/other_user}',
          gists_url: 'https://api.github.com/users/twolfson/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/twolfson/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/twolfson/subscriptions',
          organizations_url: 'https://api.github.com/users/twolfson/orgs',
          repos_url: 'https://api.github.com/users/twolfson/repos',
          events_url: 'https://api.github.com/users/twolfson/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/twolfson/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 4,
        created_at: '2018-05-11T04:37:04Z',
        updated_at: '2018-05-11T14:22:24Z',
        closed_at: null,
        author_association: 'NONE',
        pull_request: {
          url: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
          html_url: 'https://github.com/lodash/lodash/pull/3786',
          diff_url: 'https://github.com/lodash/lodash/pull/3786.diff',
          patch_url: 'https://github.com/lodash/lodash/pull/3786.patch',
        },
        body:
          "We're using `cloneDeep` for large typed arrays (80k entries or more). We noticed that `cloneDeep` was taking a lot longer than expected for these data sets. After some sleuthing, it looks like the culprit is `baseClone` trying to iterate over the keys of the typed array and copy over its values\r\n\r\nWe've decided to put in a short circuit clause (not sure if I did it right -- there's probably a slicker way with the `tag` string) to prevent this from happening\r\n\r\nWe've seen a decrease from 300ms to 3-30ms for 80k entries on an iPad mini\r\n\r\n```js\r\nconsole.time('a');\r\nlodash.cloneDeep(new Float32Array(80e3));\r\nconsole.timeEnd('a');\r\n```\r\n\r\nIn this PR:\r\n\r\n- Added short circuit for typed arrays\r\n\r\n**Notes:**\r\n\r\nWe'd be happy to write performance tests as well but couldn't seem to find a location to do so",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash/issues/comments/388378547',
        html_url:
          'https://github.com/lodash/lodash/pull/3786#issuecomment-388378547',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        id: 388378547,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T14:22:24Z',
        updated_at: '2018-05-11T14:22:24Z',
        author_association: 'OWNER',
        body: 'Ah, thanks for clarifying @twolfson. I missed that!\r\n',
      },
    },
    public: true,
    created_at: '2018-05-11T14:22:24Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7661461159',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'reopened',
      number: 3786,
      pull_request: {
        url: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
        id: 187365444,
        html_url: 'https://github.com/lodash/lodash/pull/3786',
        diff_url: 'https://github.com/lodash/lodash/pull/3786.diff',
        patch_url: 'https://github.com/lodash/lodash/pull/3786.patch',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        number: 3786,
        state: 'open',
        locked: false,
        title: 'Added short circuit for typed arrays',
        user: {
          login: 'twolfson',
          id: 902488,
          avatar_url: 'https://avatars3.githubusercontent.com/u/902488?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/twolfson',
          html_url: 'https://github.com/twolfson',
          followers_url: 'https://api.github.com/users/twolfson/followers',
          following_url:
            'https://api.github.com/users/twolfson/following{/other_user}',
          gists_url: 'https://api.github.com/users/twolfson/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/twolfson/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/twolfson/subscriptions',
          organizations_url: 'https://api.github.com/users/twolfson/orgs',
          repos_url: 'https://api.github.com/users/twolfson/repos',
          events_url: 'https://api.github.com/users/twolfson/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/twolfson/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "We're using `cloneDeep` for large typed arrays (80k entries or more). We noticed that `cloneDeep` was taking a lot longer than expected for these data sets. After some sleuthing, it looks like the culprit is `baseClone` trying to iterate over the keys of the typed array and copy over its values\r\n\r\nWe've decided to put in a short circuit clause (not sure if I did it right -- there's probably a slicker way with the `tag` string) to prevent this from happening\r\n\r\nWe've seen a decrease from 300ms to 3-30ms for 80k entries on an iPad mini\r\n\r\n```js\r\nconsole.time('a');\r\nlodash.cloneDeep(new Float32Array(80e3));\r\nconsole.timeEnd('a');\r\n```\r\n\r\nIn this PR:\r\n\r\n- Added short circuit for typed arrays\r\n\r\n**Notes:**\r\n\r\nWe'd be happy to write performance tests as well but couldn't seem to find a location to do so",
        created_at: '2018-05-11T04:37:04Z',
        updated_at: '2018-05-11T14:19:03Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: 'ac4a4e2a34a89a9a0ec5f9c03a93e39495622348',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3786/commits',
        review_comments_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3786/comments',
        review_comment_url:
          'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
        statuses_url:
          'https://api.github.com/repos/lodash/lodash/statuses/caa6aa6eea1abe50991e3216f4bfde5c3d915987',
        head: {
          label: 'StandardCyborg:dev/slow.typed.array.clone',
          ref: 'dev/slow.typed.array.clone',
          sha: 'caa6aa6eea1abe50991e3216f4bfde5c3d915987',
          user: {
            login: 'StandardCyborg',
            id: 10189116,
            avatar_url: 'https://avatars3.githubusercontent.com/u/10189116?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/StandardCyborg',
            html_url: 'https://github.com/StandardCyborg',
            followers_url:
              'https://api.github.com/users/StandardCyborg/followers',
            following_url:
              'https://api.github.com/users/StandardCyborg/following{/other_user}',
            gists_url:
              'https://api.github.com/users/StandardCyborg/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/StandardCyborg/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/StandardCyborg/subscriptions',
            organizations_url:
              'https://api.github.com/users/StandardCyborg/orgs',
            repos_url: 'https://api.github.com/users/StandardCyborg/repos',
            events_url:
              'https://api.github.com/users/StandardCyborg/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/StandardCyborg/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 132989130,
            name: 'lodash',
            full_name: 'StandardCyborg/lodash',
            owner: {
              login: 'StandardCyborg',
              id: 10189116,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/10189116?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/StandardCyborg',
              html_url: 'https://github.com/StandardCyborg',
              followers_url:
                'https://api.github.com/users/StandardCyborg/followers',
              following_url:
                'https://api.github.com/users/StandardCyborg/following{/other_user}',
              gists_url:
                'https://api.github.com/users/StandardCyborg/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/StandardCyborg/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/StandardCyborg/subscriptions',
              organizations_url:
                'https://api.github.com/users/StandardCyborg/orgs',
              repos_url: 'https://api.github.com/users/StandardCyborg/repos',
              events_url:
                'https://api.github.com/users/StandardCyborg/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/StandardCyborg/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/StandardCyborg/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: true,
            url: 'https://api.github.com/repos/StandardCyborg/lodash',
            forks_url:
              'https://api.github.com/repos/StandardCyborg/lodash/forks',
            keys_url:
              'https://api.github.com/repos/StandardCyborg/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/StandardCyborg/lodash/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/StandardCyborg/lodash/teams',
            hooks_url:
              'https://api.github.com/repos/StandardCyborg/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/StandardCyborg/lodash/events',
            assignees_url:
              'https://api.github.com/repos/StandardCyborg/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/StandardCyborg/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/StandardCyborg/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/StandardCyborg/lodash/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/StandardCyborg/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/StandardCyborg/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/StandardCyborg/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/StandardCyborg/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/StandardCyborg/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/StandardCyborg/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/StandardCyborg/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/StandardCyborg/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/StandardCyborg/lodash/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/StandardCyborg/lodash/merges',
            archive_url:
              'https://api.github.com/repos/StandardCyborg/lodash/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/StandardCyborg/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/StandardCyborg/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/StandardCyborg/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/StandardCyborg/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/StandardCyborg/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/StandardCyborg/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/StandardCyborg/lodash/deployments',
            created_at: '2018-05-11T04:27:09Z',
            updated_at: '2018-05-11T04:27:17Z',
            pushed_at: '2018-05-11T04:39:57Z',
            git_url: 'git://github.com/StandardCyborg/lodash.git',
            ssh_url: 'git@github.com:StandardCyborg/lodash.git',
            clone_url: 'https://github.com/StandardCyborg/lodash.git',
            svn_url: 'https://github.com/StandardCyborg/lodash',
            homepage: 'https://lodash.com/',
            size: 43952,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'lodash:master',
          ref: 'master',
          sha: '79dc90dfcb743b57d348a0ac134ff9694ae937e7',
          user: {
            login: 'lodash',
            id: 2565403,
            avatar_url: 'https://avatars3.githubusercontent.com/u/2565403?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lodash',
            html_url: 'https://github.com/lodash',
            followers_url: 'https://api.github.com/users/lodash/followers',
            following_url:
              'https://api.github.com/users/lodash/following{/other_user}',
            gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lodash/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lodash/subscriptions',
            organizations_url: 'https://api.github.com/users/lodash/orgs',
            repos_url: 'https://api.github.com/users/lodash/repos',
            events_url: 'https://api.github.com/users/lodash/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lodash/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 3955647,
            name: 'lodash',
            full_name: 'lodash/lodash',
            owner: {
              login: 'lodash',
              id: 2565403,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/2565403?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lodash',
              html_url: 'https://github.com/lodash',
              followers_url: 'https://api.github.com/users/lodash/followers',
              following_url:
                'https://api.github.com/users/lodash/following{/other_user}',
              gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lodash/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lodash/subscriptions',
              organizations_url: 'https://api.github.com/users/lodash/orgs',
              repos_url: 'https://api.github.com/users/lodash/repos',
              events_url:
                'https://api.github.com/users/lodash/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lodash/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/lodash/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: false,
            url: 'https://api.github.com/repos/lodash/lodash',
            forks_url: 'https://api.github.com/repos/lodash/lodash/forks',
            keys_url:
              'https://api.github.com/repos/lodash/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lodash/lodash/teams',
            hooks_url: 'https://api.github.com/repos/lodash/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/lodash/lodash/issues/events{/number}',
            events_url: 'https://api.github.com/repos/lodash/lodash/events',
            assignees_url:
              'https://api.github.com/repos/lodash/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lodash/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lodash/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/lodash/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lodash/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lodash/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lodash/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lodash/lodash/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lodash/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/lodash/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/lodash/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/lodash/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/lodash/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/lodash/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lodash/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lodash/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lodash/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lodash/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lodash/lodash/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/lodash/lodash/merges',
            archive_url:
              'https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lodash/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/lodash/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lodash/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lodash/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lodash/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lodash/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lodash/lodash/deployments',
            created_at: '2012-04-07T04:11:46Z',
            updated_at: '2018-05-11T13:33:17Z',
            pushed_at: '2018-05-11T11:31:56Z',
            git_url: 'git://github.com/lodash/lodash.git',
            ssh_url: 'git@github.com:lodash/lodash.git',
            clone_url: 'https://github.com/lodash/lodash.git',
            svn_url: 'https://github.com/lodash/lodash',
            homepage: 'https://lodash.com/',
            size: 43951,
            stargazers_count: 31630,
            watchers_count: 31630,
            language: 'JavaScript',
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3310,
            mirror_url: null,
            archived: false,
            open_issues_count: 3,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 3310,
            open_issues: 3,
            watchers: 31630,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
          },
          html: { href: 'https://github.com/lodash/lodash/pull/3786' },
          issue: {
            href: 'https://api.github.com/repos/lodash/lodash/issues/3786',
          },
          comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3786/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3786/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/lodash/lodash/statuses/caa6aa6eea1abe50991e3216f4bfde5c3d915987',
          },
        },
        author_association: 'NONE',
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: null,
        comments: 4,
        review_comments: 0,
        maintainer_can_modify: true,
        commits: 1,
        additions: 4,
        deletions: 0,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-11T14:19:03Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7661459081',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      number: 3787,
      pull_request: {
        url: 'https://api.github.com/repos/lodash/lodash/pulls/3787',
        id: 187438840,
        html_url: 'https://github.com/lodash/lodash/pull/3787',
        diff_url: 'https://github.com/lodash/lodash/pull/3787.diff',
        patch_url: 'https://github.com/lodash/lodash/pull/3787.patch',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3787',
        number: 3787,
        state: 'closed',
        locked: false,
        title: 'Remove apply from memoized function call.',
        user: {
          login: 'Mtnt',
          id: 1556235,
          avatar_url: 'https://avatars0.githubusercontent.com/u/1556235?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Mtnt',
          html_url: 'https://github.com/Mtnt',
          followers_url: 'https://api.github.com/users/Mtnt/followers',
          following_url:
            'https://api.github.com/users/Mtnt/following{/other_user}',
          gists_url: 'https://api.github.com/users/Mtnt/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Mtnt/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/Mtnt/subscriptions',
          organizations_url: 'https://api.github.com/users/Mtnt/orgs',
          repos_url: 'https://api.github.com/users/Mtnt/repos',
          events_url: 'https://api.github.com/users/Mtnt/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Mtnt/received_events',
          type: 'User',
          site_admin: false,
        },
        body: 'It`s possible to call a func without changing its context.',
        created_at: '2018-05-11T11:31:55Z',
        updated_at: '2018-05-11T14:18:39Z',
        closed_at: '2018-05-11T14:18:39Z',
        merged_at: null,
        merge_commit_sha: '94de70177ed63018e6856137e3143db7a8176925',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3787/commits',
        review_comments_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3787/comments',
        review_comment_url:
          'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3787/comments',
        statuses_url:
          'https://api.github.com/repos/lodash/lodash/statuses/0d44b07db853aa407cd76602c7ec37a8c905d5db',
        head: {
          label: 'Mtnt:remove-rewriting-memoize-context',
          ref: 'remove-rewriting-memoize-context',
          sha: '0d44b07db853aa407cd76602c7ec37a8c905d5db',
          user: {
            login: 'Mtnt',
            id: 1556235,
            avatar_url: 'https://avatars0.githubusercontent.com/u/1556235?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Mtnt',
            html_url: 'https://github.com/Mtnt',
            followers_url: 'https://api.github.com/users/Mtnt/followers',
            following_url:
              'https://api.github.com/users/Mtnt/following{/other_user}',
            gists_url: 'https://api.github.com/users/Mtnt/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/Mtnt/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/Mtnt/subscriptions',
            organizations_url: 'https://api.github.com/users/Mtnt/orgs',
            repos_url: 'https://api.github.com/users/Mtnt/repos',
            events_url: 'https://api.github.com/users/Mtnt/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/Mtnt/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 133029599,
            name: 'lodash',
            full_name: 'Mtnt/lodash',
            owner: {
              login: 'Mtnt',
              id: 1556235,
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1556235?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/Mtnt',
              html_url: 'https://github.com/Mtnt',
              followers_url: 'https://api.github.com/users/Mtnt/followers',
              following_url:
                'https://api.github.com/users/Mtnt/following{/other_user}',
              gists_url: 'https://api.github.com/users/Mtnt/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/Mtnt/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/Mtnt/subscriptions',
              organizations_url: 'https://api.github.com/users/Mtnt/orgs',
              repos_url: 'https://api.github.com/users/Mtnt/repos',
              events_url: 'https://api.github.com/users/Mtnt/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/Mtnt/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/Mtnt/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: true,
            url: 'https://api.github.com/repos/Mtnt/lodash',
            forks_url: 'https://api.github.com/repos/Mtnt/lodash/forks',
            keys_url: 'https://api.github.com/repos/Mtnt/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/Mtnt/lodash/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/Mtnt/lodash/teams',
            hooks_url: 'https://api.github.com/repos/Mtnt/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/Mtnt/lodash/issues/events{/number}',
            events_url: 'https://api.github.com/repos/Mtnt/lodash/events',
            assignees_url:
              'https://api.github.com/repos/Mtnt/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/Mtnt/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/Mtnt/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/Mtnt/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/Mtnt/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/Mtnt/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/Mtnt/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/Mtnt/lodash/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/Mtnt/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/Mtnt/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/Mtnt/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/Mtnt/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/Mtnt/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/Mtnt/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/Mtnt/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/Mtnt/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/Mtnt/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/Mtnt/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/Mtnt/lodash/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/Mtnt/lodash/merges',
            archive_url:
              'https://api.github.com/repos/Mtnt/lodash/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/Mtnt/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/Mtnt/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/Mtnt/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/Mtnt/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/Mtnt/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/Mtnt/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/Mtnt/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/Mtnt/lodash/deployments',
            created_at: '2018-05-11T11:08:11Z',
            updated_at: '2018-05-11T11:08:19Z',
            pushed_at: '2018-05-11T11:30:40Z',
            git_url: 'git://github.com/Mtnt/lodash.git',
            ssh_url: 'git@github.com:Mtnt/lodash.git',
            clone_url: 'https://github.com/Mtnt/lodash.git',
            svn_url: 'https://github.com/Mtnt/lodash',
            homepage: 'https://lodash.com/',
            size: 43952,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'lodash:master',
          ref: 'master',
          sha: '79dc90dfcb743b57d348a0ac134ff9694ae937e7',
          user: {
            login: 'lodash',
            id: 2565403,
            avatar_url: 'https://avatars3.githubusercontent.com/u/2565403?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lodash',
            html_url: 'https://github.com/lodash',
            followers_url: 'https://api.github.com/users/lodash/followers',
            following_url:
              'https://api.github.com/users/lodash/following{/other_user}',
            gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lodash/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lodash/subscriptions',
            organizations_url: 'https://api.github.com/users/lodash/orgs',
            repos_url: 'https://api.github.com/users/lodash/repos',
            events_url: 'https://api.github.com/users/lodash/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lodash/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 3955647,
            name: 'lodash',
            full_name: 'lodash/lodash',
            owner: {
              login: 'lodash',
              id: 2565403,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/2565403?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lodash',
              html_url: 'https://github.com/lodash',
              followers_url: 'https://api.github.com/users/lodash/followers',
              following_url:
                'https://api.github.com/users/lodash/following{/other_user}',
              gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lodash/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lodash/subscriptions',
              organizations_url: 'https://api.github.com/users/lodash/orgs',
              repos_url: 'https://api.github.com/users/lodash/repos',
              events_url:
                'https://api.github.com/users/lodash/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lodash/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/lodash/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: false,
            url: 'https://api.github.com/repos/lodash/lodash',
            forks_url: 'https://api.github.com/repos/lodash/lodash/forks',
            keys_url:
              'https://api.github.com/repos/lodash/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lodash/lodash/teams',
            hooks_url: 'https://api.github.com/repos/lodash/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/lodash/lodash/issues/events{/number}',
            events_url: 'https://api.github.com/repos/lodash/lodash/events',
            assignees_url:
              'https://api.github.com/repos/lodash/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lodash/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lodash/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/lodash/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lodash/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lodash/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lodash/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lodash/lodash/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lodash/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/lodash/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/lodash/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/lodash/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/lodash/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/lodash/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lodash/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lodash/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lodash/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lodash/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lodash/lodash/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/lodash/lodash/merges',
            archive_url:
              'https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lodash/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/lodash/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lodash/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lodash/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lodash/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lodash/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lodash/lodash/deployments',
            created_at: '2012-04-07T04:11:46Z',
            updated_at: '2018-05-11T13:33:17Z',
            pushed_at: '2018-05-11T11:31:56Z',
            git_url: 'git://github.com/lodash/lodash.git',
            ssh_url: 'git@github.com:lodash/lodash.git',
            clone_url: 'https://github.com/lodash/lodash.git',
            svn_url: 'https://github.com/lodash/lodash',
            homepage: 'https://lodash.com/',
            size: 43951,
            stargazers_count: 31630,
            watchers_count: 31630,
            language: 'JavaScript',
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3310,
            mirror_url: null,
            archived: false,
            open_issues_count: 2,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 3310,
            open_issues: 2,
            watchers: 31630,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/lodash/lodash/pulls/3787',
          },
          html: { href: 'https://github.com/lodash/lodash/pull/3787' },
          issue: {
            href: 'https://api.github.com/repos/lodash/lodash/issues/3787',
          },
          comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/issues/3787/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3787/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3787/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/lodash/lodash/statuses/0d44b07db853aa407cd76602c7ec37a8c905d5db',
          },
        },
        author_association: 'NONE',
        merged: false,
        mergeable: true,
        rebaseable: true,
        mergeable_state: 'unstable',
        merged_by: null,
        comments: 2,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 2,
        deletions: 2,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-11T14:18:39Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7659281337',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/394',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/events',
        html_url: 'https://github.com/standard-things/esm/issues/394',
        id: 322166093,
        number: 394,
        title: '3.0.34: ReferenceError: xxx is not defined in circular import',
        user: {
          login: 'DaddyTrap',
          id: 13363246,
          avatar_url: 'https://avatars3.githubusercontent.com/u/13363246?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DaddyTrap',
          html_url: 'https://github.com/DaddyTrap',
          followers_url: 'https://api.github.com/users/DaddyTrap/followers',
          following_url:
            'https://api.github.com/users/DaddyTrap/following{/other_user}',
          gists_url: 'https://api.github.com/users/DaddyTrap/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/DaddyTrap/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/DaddyTrap/subscriptions',
          organizations_url: 'https://api.github.com/users/DaddyTrap/orgs',
          repos_url: 'https://api.github.com/users/DaddyTrap/repos',
          events_url: 'https://api.github.com/users/DaddyTrap/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/DaddyTrap/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-11T04:47:33Z',
        updated_at: '2018-05-11T05:37:37Z',
        closed_at: '2018-05-11T05:37:11Z',
        author_association: 'NONE',
        body:
          "With the following 3 files running with `node -r esm circular.js`, I got the `ReferenceError`.\r\n\r\n```\r\n.\r\n├── circular1.js\r\n├── circular2.js\r\n└── other.js\r\n```\r\n\r\n```javascript\r\n// circular1.js\r\nimport * as Other from './other';\r\nimport './circular2';\r\n\r\nconsole.log(Other.some_val);\r\n```\r\n\r\n```javascript\r\n// circular2.js\r\nimport './circular1';\r\n```\r\n\r\n```javascript\r\n// other.js\r\nexport const some_val = 42;\r\n```\r\n\r\nExpected output is simply `42`, but the actual output is as follows\r\n\r\n```\r\n42\r\nfile:///home/daddytrap/Work/issue/circular1.js:4\r\nconsole.log(Other.some_val);\r\n\r\nReferenceError: Other is not defined\r\n    at Object.<anonymous> (file:///home/daddytrap/Work/issue/circular1.js:4:7)\r\n    at Object.<anonymous> (file:///home/daddytrap/Work/issue/circular1.js:1)\r\n```\r\n\r\n---\r\n\r\nThis is the repo how i reproduce: [DaddyTrap/esm-issue-394](https://github.com/DaddyTrap/esm-issue-394)\r\n\r\nI got this error in 3.0.30, 3.0.33 and 3.0.34, however, i can run it with 3.0.10 ! Hope this can help.\r\n\r\nThanks !",
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388264967',
        html_url:
          'https://github.com/standard-things/esm/issues/394#issuecomment-388264967',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/394',
        id: 388264967,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T05:37:37Z',
        updated_at: '2018-05-11T05:37:37Z',
        author_association: 'OWNER',
        body: 'Thanks @DaddyTrap!',
      },
    },
    public: true,
    created_at: '2018-05-11T05:37:37Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7659280216',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2555701349,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: '914d4b87fa65dfc52e30ebd962c3638894e784fc',
      before: '7eac676735e707eaf042cd7268924092e858ff95',
      commits: [
        {
          sha: '8c0f31917975d84d07a46ab2d37337ac25fdf31b',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Live binding test nit.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/8c0f31917975d84d07a46ab2d37337ac25fdf31b',
        },
        {
          sha: '8f45f122f0ef9942a3096f7c063fc54caa59c5dc',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            "Don't track namespace imports for tdz errors. [closes #394]",
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/8f45f122f0ef9942a3096f7c063fc54caa59c5dc',
        },
        {
          sha: '914d4b87fa65dfc52e30ebd962c3638894e784fc',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add getGetter() and getSetter().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/914d4b87fa65dfc52e30ebd962c3638894e784fc',
        },
      ],
    },
    public: true,
    created_at: '2018-05-11T05:37:12Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7659280203',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/394',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/394/events',
        html_url: 'https://github.com/standard-things/esm/issues/394',
        id: 322166093,
        number: 394,
        title: '3.0.34: ReferenceError: xxx is not defined in circular import',
        user: {
          login: 'DaddyTrap',
          id: 13363246,
          avatar_url: 'https://avatars3.githubusercontent.com/u/13363246?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/DaddyTrap',
          html_url: 'https://github.com/DaddyTrap',
          followers_url: 'https://api.github.com/users/DaddyTrap/followers',
          following_url:
            'https://api.github.com/users/DaddyTrap/following{/other_user}',
          gists_url: 'https://api.github.com/users/DaddyTrap/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/DaddyTrap/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/DaddyTrap/subscriptions',
          organizations_url: 'https://api.github.com/users/DaddyTrap/orgs',
          repos_url: 'https://api.github.com/users/DaddyTrap/repos',
          events_url: 'https://api.github.com/users/DaddyTrap/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/DaddyTrap/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-11T04:47:33Z',
        updated_at: '2018-05-11T05:37:11Z',
        closed_at: '2018-05-11T05:37:11Z',
        author_association: 'NONE',
        body:
          "With the following 3 files running with `node -r esm circular.js`, I got the `ReferenceError`.\r\n\r\n```\r\n.\r\n├── circular1.js\r\n├── circular2.js\r\n└── other.js\r\n```\r\n\r\n```javascript\r\n// circular1.js\r\nimport * as Other from './other';\r\nimport './circular2';\r\n\r\nconsole.log(Other.some_val);\r\n```\r\n\r\n```javascript\r\n// circular2.js\r\nimport './circular1';\r\n```\r\n\r\n```javascript\r\n// other.js\r\nexport const some_val = 42;\r\n```\r\n\r\nExpected output is simply `42`, but the actual output is as follows\r\n\r\n```\r\n42\r\nfile:///home/daddytrap/Work/issue/circular1.js:4\r\nconsole.log(Other.some_val);\r\n\r\nReferenceError: Other is not defined\r\n    at Object.<anonymous> (file:///home/daddytrap/Work/issue/circular1.js:4:7)\r\n    at Object.<anonymous> (file:///home/daddytrap/Work/issue/circular1.js:1)\r\n```\r\n\r\n---\r\n\r\nThis is the repo how i reproduce: [DaddyTrap/esm-issue-394](https://github.com/DaddyTrap/esm-issue-394)\r\n\r\nI got this error in 3.0.30, 3.0.33 and 3.0.34, however, i can run it with 3.0.10 ! Hope this can help.\r\n\r\nThanks !",
      },
    },
    public: true,
    created_at: '2018-05-11T05:37:11Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7659192069',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      number: 3786,
      pull_request: {
        url: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
        id: 187365444,
        html_url: 'https://github.com/lodash/lodash/pull/3786',
        diff_url: 'https://github.com/lodash/lodash/pull/3786.diff',
        patch_url: 'https://github.com/lodash/lodash/pull/3786.patch',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        number: 3786,
        state: 'closed',
        locked: false,
        title: 'Added short circuit for typed arrays',
        user: {
          login: 'twolfson',
          id: 902488,
          avatar_url: 'https://avatars3.githubusercontent.com/u/902488?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/twolfson',
          html_url: 'https://github.com/twolfson',
          followers_url: 'https://api.github.com/users/twolfson/followers',
          following_url:
            'https://api.github.com/users/twolfson/following{/other_user}',
          gists_url: 'https://api.github.com/users/twolfson/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/twolfson/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/twolfson/subscriptions',
          organizations_url: 'https://api.github.com/users/twolfson/orgs',
          repos_url: 'https://api.github.com/users/twolfson/repos',
          events_url: 'https://api.github.com/users/twolfson/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/twolfson/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "We're using `cloneDeep` for large typed arrays (80k entries or more). We noticed that `cloneDeep` was taking a lot longer than expected for these data sets. After some sleuthing, it looks like the culprit is `baseClone` trying to iterate over the keys of the typed array and copy over its values\r\n\r\nWe've decided to put in a short circuit clause (not sure if I did it right -- there's probably a slicker way with the `tag` string) to prevent this from happening\r\n\r\nWe've seen a decrease from 300ms to 3-30ms for 80k entries on an iPad mini\r\n\r\n```js\r\nconsole.time('a');\r\nlodash.cloneDeep(new Float32Array(80e3));\r\nconsole.timeEnd('a');\r\n```\r\n\r\nIn this PR:\r\n\r\n- Added short circuit for typed arrays\r\n\r\n**Notes:**\r\n\r\nWe'd be happy to write performance tests as well but couldn't seem to find a location to do so",
        created_at: '2018-05-11T04:37:04Z',
        updated_at: '2018-05-11T04:59:29Z',
        closed_at: '2018-05-11T04:59:29Z',
        merged_at: null,
        merge_commit_sha: 'ac4a4e2a34a89a9a0ec5f9c03a93e39495622348',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3786/commits',
        review_comments_url:
          'https://api.github.com/repos/lodash/lodash/pulls/3786/comments',
        review_comment_url:
          'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
        statuses_url:
          'https://api.github.com/repos/lodash/lodash/statuses/caa6aa6eea1abe50991e3216f4bfde5c3d915987',
        head: {
          label: 'StandardCyborg:dev/slow.typed.array.clone',
          ref: 'dev/slow.typed.array.clone',
          sha: 'caa6aa6eea1abe50991e3216f4bfde5c3d915987',
          user: {
            login: 'StandardCyborg',
            id: 10189116,
            avatar_url: 'https://avatars3.githubusercontent.com/u/10189116?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/StandardCyborg',
            html_url: 'https://github.com/StandardCyborg',
            followers_url:
              'https://api.github.com/users/StandardCyborg/followers',
            following_url:
              'https://api.github.com/users/StandardCyborg/following{/other_user}',
            gists_url:
              'https://api.github.com/users/StandardCyborg/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/StandardCyborg/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/StandardCyborg/subscriptions',
            organizations_url:
              'https://api.github.com/users/StandardCyborg/orgs',
            repos_url: 'https://api.github.com/users/StandardCyborg/repos',
            events_url:
              'https://api.github.com/users/StandardCyborg/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/StandardCyborg/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 132989130,
            name: 'lodash',
            full_name: 'StandardCyborg/lodash',
            owner: {
              login: 'StandardCyborg',
              id: 10189116,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/10189116?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/StandardCyborg',
              html_url: 'https://github.com/StandardCyborg',
              followers_url:
                'https://api.github.com/users/StandardCyborg/followers',
              following_url:
                'https://api.github.com/users/StandardCyborg/following{/other_user}',
              gists_url:
                'https://api.github.com/users/StandardCyborg/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/StandardCyborg/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/StandardCyborg/subscriptions',
              organizations_url:
                'https://api.github.com/users/StandardCyborg/orgs',
              repos_url: 'https://api.github.com/users/StandardCyborg/repos',
              events_url:
                'https://api.github.com/users/StandardCyborg/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/StandardCyborg/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/StandardCyborg/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: true,
            url: 'https://api.github.com/repos/StandardCyborg/lodash',
            forks_url:
              'https://api.github.com/repos/StandardCyborg/lodash/forks',
            keys_url:
              'https://api.github.com/repos/StandardCyborg/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/StandardCyborg/lodash/collaborators{/collaborator}',
            teams_url:
              'https://api.github.com/repos/StandardCyborg/lodash/teams',
            hooks_url:
              'https://api.github.com/repos/StandardCyborg/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/StandardCyborg/lodash/events',
            assignees_url:
              'https://api.github.com/repos/StandardCyborg/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/StandardCyborg/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/StandardCyborg/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/StandardCyborg/lodash/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/StandardCyborg/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/StandardCyborg/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/StandardCyborg/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/StandardCyborg/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/StandardCyborg/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/StandardCyborg/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/StandardCyborg/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/StandardCyborg/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/StandardCyborg/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/StandardCyborg/lodash/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/StandardCyborg/lodash/merges',
            archive_url:
              'https://api.github.com/repos/StandardCyborg/lodash/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/StandardCyborg/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/StandardCyborg/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/StandardCyborg/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/StandardCyborg/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/StandardCyborg/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/StandardCyborg/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/StandardCyborg/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/StandardCyborg/lodash/deployments',
            created_at: '2018-05-11T04:27:09Z',
            updated_at: '2018-05-11T04:27:17Z',
            pushed_at: '2018-05-11T04:39:57Z',
            git_url: 'git://github.com/StandardCyborg/lodash.git',
            ssh_url: 'git@github.com:StandardCyborg/lodash.git',
            clone_url: 'https://github.com/StandardCyborg/lodash.git',
            svn_url: 'https://github.com/StandardCyborg/lodash',
            homepage: 'https://lodash.com/',
            size: 43951,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'lodash:master',
          ref: 'master',
          sha: '79dc90dfcb743b57d348a0ac134ff9694ae937e7',
          user: {
            login: 'lodash',
            id: 2565403,
            avatar_url: 'https://avatars3.githubusercontent.com/u/2565403?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/lodash',
            html_url: 'https://github.com/lodash',
            followers_url: 'https://api.github.com/users/lodash/followers',
            following_url:
              'https://api.github.com/users/lodash/following{/other_user}',
            gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/lodash/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/lodash/subscriptions',
            organizations_url: 'https://api.github.com/users/lodash/orgs',
            repos_url: 'https://api.github.com/users/lodash/repos',
            events_url: 'https://api.github.com/users/lodash/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/lodash/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 3955647,
            name: 'lodash',
            full_name: 'lodash/lodash',
            owner: {
              login: 'lodash',
              id: 2565403,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/2565403?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/lodash',
              html_url: 'https://github.com/lodash',
              followers_url: 'https://api.github.com/users/lodash/followers',
              following_url:
                'https://api.github.com/users/lodash/following{/other_user}',
              gists_url: 'https://api.github.com/users/lodash/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/lodash/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/lodash/subscriptions',
              organizations_url: 'https://api.github.com/users/lodash/orgs',
              repos_url: 'https://api.github.com/users/lodash/repos',
              events_url:
                'https://api.github.com/users/lodash/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/lodash/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/lodash/lodash',
            description:
              'A modern JavaScript utility library delivering modularity, performance, & extras.',
            fork: false,
            url: 'https://api.github.com/repos/lodash/lodash',
            forks_url: 'https://api.github.com/repos/lodash/lodash/forks',
            keys_url:
              'https://api.github.com/repos/lodash/lodash/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/lodash/lodash/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/lodash/lodash/teams',
            hooks_url: 'https://api.github.com/repos/lodash/lodash/hooks',
            issue_events_url:
              'https://api.github.com/repos/lodash/lodash/issues/events{/number}',
            events_url: 'https://api.github.com/repos/lodash/lodash/events',
            assignees_url:
              'https://api.github.com/repos/lodash/lodash/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/lodash/lodash/branches{/branch}',
            tags_url: 'https://api.github.com/repos/lodash/lodash/tags',
            blobs_url:
              'https://api.github.com/repos/lodash/lodash/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/lodash/lodash/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/lodash/lodash/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/lodash/lodash/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/lodash/lodash/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/lodash/lodash/languages',
            stargazers_url:
              'https://api.github.com/repos/lodash/lodash/stargazers',
            contributors_url:
              'https://api.github.com/repos/lodash/lodash/contributors',
            subscribers_url:
              'https://api.github.com/repos/lodash/lodash/subscribers',
            subscription_url:
              'https://api.github.com/repos/lodash/lodash/subscription',
            commits_url:
              'https://api.github.com/repos/lodash/lodash/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/lodash/lodash/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/lodash/lodash/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/lodash/lodash/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/lodash/lodash/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/lodash/lodash/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/lodash/lodash/merges',
            archive_url:
              'https://api.github.com/repos/lodash/lodash/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/lodash/lodash/downloads',
            issues_url:
              'https://api.github.com/repos/lodash/lodash/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/lodash/lodash/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/lodash/lodash/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/lodash/lodash/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/lodash/lodash/labels{/name}',
            releases_url:
              'https://api.github.com/repos/lodash/lodash/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/lodash/lodash/deployments',
            created_at: '2012-04-07T04:11:46Z',
            updated_at: '2018-05-11T03:55:11Z',
            pushed_at: '2018-05-11T04:37:05Z',
            git_url: 'git://github.com/lodash/lodash.git',
            ssh_url: 'git@github.com:lodash/lodash.git',
            clone_url: 'https://github.com/lodash/lodash.git',
            svn_url: 'https://github.com/lodash/lodash',
            homepage: 'https://lodash.com/',
            size: 43951,
            stargazers_count: 31623,
            watchers_count: 31623,
            language: 'JavaScript',
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 3310,
            mirror_url: null,
            archived: false,
            open_issues_count: 2,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 3310,
            open_issues: 2,
            watchers: 31623,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
          },
          html: { href: 'https://github.com/lodash/lodash/pull/3786' },
          issue: {
            href: 'https://api.github.com/repos/lodash/lodash/issues/3786',
          },
          comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3786/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/lodash/lodash/pulls/3786/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/lodash/lodash/statuses/caa6aa6eea1abe50991e3216f4bfde5c3d915987',
          },
        },
        author_association: 'NONE',
        merged: false,
        mergeable: true,
        rebaseable: true,
        mergeable_state: 'unstable',
        merged_by: null,
        comments: 2,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 4,
        deletions: 0,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-11T04:59:30Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7659192063',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3786/events',
        html_url: 'https://github.com/lodash/lodash/pull/3786',
        id: 322164756,
        number: 3786,
        title: 'Added short circuit for typed arrays',
        user: {
          login: 'twolfson',
          id: 902488,
          avatar_url: 'https://avatars3.githubusercontent.com/u/902488?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/twolfson',
          html_url: 'https://github.com/twolfson',
          followers_url: 'https://api.github.com/users/twolfson/followers',
          following_url:
            'https://api.github.com/users/twolfson/following{/other_user}',
          gists_url: 'https://api.github.com/users/twolfson/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/twolfson/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/twolfson/subscriptions',
          organizations_url: 'https://api.github.com/users/twolfson/orgs',
          repos_url: 'https://api.github.com/users/twolfson/repos',
          events_url: 'https://api.github.com/users/twolfson/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/twolfson/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763155,
            url: 'https://api.github.com/repos/lodash/lodash/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-11T04:37:04Z',
        updated_at: '2018-05-11T04:59:29Z',
        closed_at: '2018-05-11T04:59:29Z',
        author_association: 'NONE',
        pull_request: {
          url: 'https://api.github.com/repos/lodash/lodash/pulls/3786',
          html_url: 'https://github.com/lodash/lodash/pull/3786',
          diff_url: 'https://github.com/lodash/lodash/pull/3786.diff',
          patch_url: 'https://github.com/lodash/lodash/pull/3786.patch',
        },
        body:
          "We're using `cloneDeep` for large typed arrays (80k entries or more). We noticed that `cloneDeep` was taking a lot longer than expected for these data sets. After some sleuthing, it looks like the culprit is `baseClone` trying to iterate over the keys of the typed array and copy over its values\r\n\r\nWe've decided to put in a short circuit clause (not sure if I did it right -- there's probably a slicker way with the `tag` string) to prevent this from happening\r\n\r\nWe've seen a decrease from 300ms to 3-30ms for 80k entries on an iPad mini\r\n\r\n```js\r\nconsole.time('a');\r\nlodash.cloneDeep(new Float32Array(80e3));\r\nconsole.timeEnd('a');\r\n```\r\n\r\nIn this PR:\r\n\r\n- Added short circuit for typed arrays\r\n\r\n**Notes:**\r\n\r\nWe'd be happy to write performance tests as well but couldn't seem to find a location to do so",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash/issues/comments/388260014',
        html_url:
          'https://github.com/lodash/lodash/pull/3786#issuecomment-388260014',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3786',
        id: 388260014,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T04:59:29Z',
        updated_at: '2018-05-11T04:59:29Z',
        author_association: 'OWNER',
        body:
          "Hi @twolfson!\r\n\r\nI don't think short circuiting is going to work since that would return an incomplete clone. It's probably a better idea to create a custom clone method more suited for your needs.",
      },
    },
    public: true,
    created_at: '2018-05-11T04:59:29Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7658583232',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2555316762,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: 'e6aa753c7c34adb788d01c7daa2191d7aa92fe84',
      before: 'dca9107b75123c46e4c8ce099af65f780db214a0',
      commits: [
        {
          sha: 'e6aa753c7c34adb788d01c7daa2191d7aa92fe84',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/e6aa753c7c34adb788d01c7daa2191d7aa92fe84',
        },
      ],
    },
    public: true,
    created_at: '2018-05-11T00:47:30Z',
  },
  {
    id: '7658540720',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/events',
        html_url: 'https://github.com/nodejs/node/pull/20403',
        id: 318718137,
        number: 20403,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 14,
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-11T00:30:14Z',
        closed_at: null,
        author_association: 'MEMBER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          html_url: 'https://github.com/nodejs/node/pull/20403',
          diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
          patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/388224738',
        html_url:
          'https://github.com/nodejs/node/pull/20403#issuecomment-388224738',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        id: 388224738,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-11T00:30:14Z',
        updated_at: '2018-05-11T00:30:14Z',
        author_association: 'MEMBER',
        body: '@bmeck updated tests and doc entry.',
      },
    },
    public: true,
    created_at: '2018-05-11T00:30:14Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7658537934',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2555291478,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: 'dca9107b75123c46e4c8ce099af65f780db214a0',
      before: 'd50223480c22705900c21698178019e4eade5f53',
      commits: [
        {
          sha: 'dca9107b75123c46e4c8ce099af65f780db214a0',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/dca9107b75123c46e4c8ce099af65f780db214a0',
        },
      ],
    },
    public: true,
    created_at: '2018-05-11T00:29:05Z',
  },
  {
    id: '7658529336',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2555286696,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: 'd50223480c22705900c21698178019e4eade5f53',
      before: '6876afd0a3d9b339bed2a7731cccbbd1ad258559',
      commits: [
        {
          sha: 'd50223480c22705900c21698178019e4eade5f53',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/d50223480c22705900c21698178019e4eade5f53',
        },
      ],
    },
    public: true,
    created_at: '2018-05-11T00:25:25Z',
  },
  {
    id: '7658425948',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2555228137,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '7eac676735e707eaf042cd7268924092e858ff95',
      before: 'c8b2b5300a3a87079664993f7b52867a8229c71c',
      commits: [
        {
          sha: '7eac676735e707eaf042cd7268924092e858ff95',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Add another live bindings test to ensure updating for getters.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/7eac676735e707eaf042cd7268924092e858ff95',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T23:45:33Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658309865',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2555164196,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/master',
      head: 'c8b2b5300a3a87079664993f7b52867a8229c71c',
      before: '3267bbe1342235fe149f50d0063fe95544cb8912',
      commits: [
        {
          sha: '261e79cd1d7d02f34f17d9858a762e3cc7b3ac91',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Simplify descriptor checks.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/261e79cd1d7d02f34f17d9858a762e3cc7b3ac91',
        },
        {
          sha: 'c8b2b5300a3a87079664993f7b52867a8229c71c',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Set useGetTraps if exports contains a getter.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/c8b2b5300a3a87079664993f7b52867a8229c71c',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T23:05:18Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658189716',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/392',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/events',
        html_url: 'https://github.com/standard-things/esm/issues/392',
        id: 321904767,
        number: 392,
        title:
          '3.0.32: custom extensions with babel/register stopped resolving properly',
        user: {
          login: 'deepsweet',
          id: 266822,
          avatar_url: 'https://avatars3.githubusercontent.com/u/266822?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/deepsweet',
          html_url: 'https://github.com/deepsweet',
          followers_url: 'https://api.github.com/users/deepsweet/followers',
          following_url:
            'https://api.github.com/users/deepsweet/following{/other_user}',
          gists_url: 'https://api.github.com/users/deepsweet/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/deepsweet/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/deepsweet/subscriptions',
          organizations_url: 'https://api.github.com/users/deepsweet/orgs',
          repos_url: 'https://api.github.com/users/deepsweet/repos',
          events_url: 'https://api.github.com/users/deepsweet/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/deepsweet/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-05-10T11:50:55Z',
        updated_at: '2018-05-10T22:28:50Z',
        closed_at: '2018-05-10T21:08:04Z',
        author_association: 'NONE',
        body:
          'See [mocku](https://github.com/deepsweet/mocku) – `yarn && yarn upgrade esm && yarn start test`. Every single test is failing now because all files are `.ts` and it says "Cannot find module" on them.\r\n\r\nIt\'s done through the `@babel/register` with custom extensions array, and `@babel/register` is required after `esm` loader.\r\n\r\nWorks fine with 3.0.31 and earlier.',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388205133',
        html_url:
          'https://github.com/standard-things/esm/issues/392#issuecomment-388205133',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/392',
        id: 388205133,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T22:28:50Z',
        updated_at: '2018-05-10T22:28:50Z',
        author_association: 'OWNER',
        body:
          '[v3.0.34](https://github.com/standard-things/esm/releases/tag/3.0.34) is released :tada:',
      },
    },
    public: true,
    created_at: '2018-05-10T22:28:50Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658187211',
    type: 'ReleaseEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'published',
      release: {
        url:
          'https://api.github.com/repos/standard-things/esm/releases/10949535',
        assets_url:
          'https://api.github.com/repos/standard-things/esm/releases/10949535/assets',
        upload_url:
          'https://uploads.github.com/repos/standard-things/esm/releases/10949535/assets{?name,label}',
        html_url: 'https://github.com/standard-things/esm/releases/tag/3.0.34',
        id: 10949535,
        tag_name: '3.0.34',
        target_commitish: 'master',
        name: '',
        draft: false,
        author: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        prerelease: false,
        created_at: '2018-05-10T21:20:57Z',
        published_at: '2018-05-10T22:28:08Z',
        assets: [],
        tarball_url:
          'https://api.github.com/repos/standard-things/esm/tarball/3.0.34',
        zipball_url:
          'https://api.github.com/repos/standard-things/esm/zipball/3.0.34',
        body:
          '* Ensured getters on CJS exports update live bindings\r\n* Ensured the `Module` module is not memoized (#392)',
      },
    },
    public: true,
    created_at: '2018-05-10T22:28:08Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658073973',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2555033678,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '3267bbe1342235fe149f50d0063fe95544cb8912',
      before: '3a80334fe760da3d633244d8d036cbbaf4283185',
      commits: [
        {
          sha: '3267bbe1342235fe149f50d0063fe95544cb8912',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add live bindings test to ensure updating for getters.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/3267bbe1342235fe149f50d0063fe95544cb8912',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:58:00Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658007145',
    type: 'CreateEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      ref: '3.0.34',
      ref_type: 'tag',
      master_branch: 'master',
      description: "Tomorrow's ECMAScript modules today!",
      pusher_type: 'user',
    },
    public: true,
    created_at: '2018-05-10T21:41:07Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658006686',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2554997451,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '3a80334fe760da3d633244d8d036cbbaf4283185',
      before: 'e0ec8323ef9b178fba5204c4544e2a63164cddfd',
      commits: [
        {
          sha: '3a80334fe760da3d633244d8d036cbbaf4283185',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Tighten isModuleNamespaceObject().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/3a80334fe760da3d633244d8d036cbbaf4283185',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:41:00Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7658003385',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/393',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/events',
        html_url: 'https://github.com/standard-things/esm/issues/393',
        id: 322081328,
        number: 393,
        title: 'How to use with builtin modules?',
        user: {
          login: 'Nicholi',
          id: 959775,
          avatar_url: 'https://avatars3.githubusercontent.com/u/959775?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Nicholi',
          html_url: 'https://github.com/Nicholi',
          followers_url: 'https://api.github.com/users/Nicholi/followers',
          following_url:
            'https://api.github.com/users/Nicholi/following{/other_user}',
          gists_url: 'https://api.github.com/users/Nicholi/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Nicholi/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Nicholi/subscriptions',
          organizations_url: 'https://api.github.com/users/Nicholi/orgs',
          repos_url: 'https://api.github.com/users/Nicholi/repos',
          events_url: 'https://api.github.com/users/Nicholi/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Nicholi/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130610,
            url:
              'https://api.github.com/repos/standard-things/esm/labels/question',
            name: 'question',
            color: 'd4c5f9',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: '2018-05-10T20:53:59Z',
        updated_at: '2018-05-10T21:40:11Z',
        closed_at: '2018-05-10T21:37:33Z',
        author_association: 'NONE',
        body:
          'I am completely new to the ESM space, and just trying to make sense of what to do. From your video presentation I took it that you can make an ES module that can be consumed by both CJS/ESM with no special dependencies for the consuming application. Only my module requires (lol) \'esm\', not the consuming application... unless thats totally wrong? Everything seems to work fine, until the module attempts to utilize a node builtin module, like say \'path\'.\r\n\r\nThe consuming application is throwing a curious error, which I can\'t make sense of.\r\n> file:///home/nicholi/Documents/node/testesm/node_modules/@myscope/testesm/main.js:1\r\n> TypeError: Cannot read property \'options\' of null\r\n>     at Object.Module._extensions..js (module.js:663:10)\r\n\r\nI am assuming I\'m missing something obvious... or one of the config options (but I have no idea which flags to turn on/off). Here is a barebones sample of what I\'m trying to do. Both the ESM module (where it is loading in \'path\'), and a consuming application loading it via normal CJS.\r\n\r\n**ES Module**\r\npackage.json:\r\n```\r\n{\r\n  "name": "@myscope/testesm",\r\n  "version": "1.0.0",\r\n  "main": "index.js",\r\n  "module": "main.js",\r\n  "dependencies": {\r\n    "esm": "^3.0.33"\r\n  }\r\n}\r\n```\r\nindex.js - totally standard\r\n```\r\n\'use strict\';\r\n\r\n// Set options as a parameter, environment variable, or rc file.\r\nrequire = require(\'esm\')(module/*, options*/);\r\nmodule.exports = require(\'./main\');\r\n```\r\nmain.js\r\n```\r\n// no idea which of these notations i should be using, none of them work\r\nimport path from \'path\';\r\nconst {basename} = path;\r\n//import * as path from \'path\';\r\n//const path = require(\'path\');\r\n\r\nexport const a = \'ayyyyyy\';\r\n\r\nexport default class Empty {\r\n  constructor() {\r\n  }\r\n\r\n  test() {\r\n    console.log(\'yo\');\r\n  }\r\n\r\n  test2() {\r\n    console.log(path.basename(\'/this/path/isnt/really.real\'));\r\n  }\r\n}\r\n```\r\n\r\n**CONSUMING APPLICATION**\r\npackage.json:\r\n```\r\n{ \r\n  "name": "runesm",\r\n  "version": "1.0.0",\r\n  "main": "index.js",\r\n  "dependencies": {\r\n    "@myscope/testesm": "^1.0.0"\r\n  }\r\n}\r\n```\r\n\r\nindex.js:\r\n```\r\n// loading as CJS (?)\r\nconst {default: Empty, a} = require(\'@myscope/testesm\');\r\n\r\nconsole.log(\'const a:\', a);\r\n\r\nlet testEsm = new Empty();\r\n\r\ntestEsm.test();\r\ntestEsm.test2();\r\n\r\n\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388194662',
        html_url:
          'https://github.com/standard-things/esm/issues/393#issuecomment-388194662',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/393',
        id: 388194662,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T21:40:11Z',
        updated_at: '2018-05-10T21:40:11Z',
        author_association: 'OWNER',
        body:
          '> Haha ok, seems to work great now. \r\n\r\nI was hoping it was related to the issue I had just fixed :yum:\r\n\r\n',
      },
    },
    public: true,
    created_at: '2018-05-10T21:40:12Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657969977',
    type: 'GollumEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      pages: [
        {
          page_name: 'Compile-Node',
          title: 'Compile Node',
          summary: null,
          action: 'created',
          sha: '88123993c6afa7dedae44fe84acf3001e2e41d08',
          html_url: 'https://github.com/standard-things/esm/wiki/Compile-Node',
        },
        {
          page_name: 'Home',
          title: 'Home',
          summary: null,
          action: 'created',
          sha: '88123993c6afa7dedae44fe84acf3001e2e41d08',
          html_url: 'https://github.com/standard-things/esm/wiki/Home',
        },
        {
          page_name: 'Improved-Errors',
          title: 'Improved Errors',
          summary: null,
          action: 'created',
          sha: '88123993c6afa7dedae44fe84acf3001e2e41d08',
          html_url:
            'https://github.com/standard-things/esm/wiki/Improved-Errors',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:32:09Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657964691',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131168711,
      name: 'standard-things/node',
      url: 'https://api.github.com/repos/standard-things/node',
    },
    payload: {
      push_id: 2554974909,
      size: 27,
      distinct_size: 27,
      ref: 'refs/heads/esm',
      head: '5af9c266fbcba1f0083d10fa201e9388f9e17d43',
      before: '87165621f6071add52e3bdf76bcdeb3849cef190',
      commits: [
        {
          sha: '81b99da96e9a27fc7e55e002656968d99596a31d',
          author: { email: 'f.s@qq.com', name: 'Yulong Wang' },
          message:
            'tools: ignore VS compiler output\n\nAdd gitignore rules to ignore compiler output under deps/v8/gypfiles.\n\nPR-URL: https://github.com/nodejs/node/pull/20527\nReviewed-By: Michaël Zasso <targos@protonmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/81b99da96e9a27fc7e55e002656968d99596a31d',
        },
        {
          sha: 'cf7be86cd927c99547f4774d79ea6d12d621033f',
          author: {
            email: 'ruben@bridgewater.de',
            name: 'Ruben Bridgewater',
          },
          message:
            'assert: accept regular expressions to validate\n\nThis makes sure regular expressions on validation objects validate\nagainst strings when used with `assert.throws` and `assert.rejects`.\n\nPR-URL: https://github.com/nodejs/node/pull/20485\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Michaël Zasso <targos@protonmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/cf7be86cd927c99547f4774d79ea6d12d621033f',
        },
        {
          sha: '4c6df73ae4e3c7ce0b2346bc38c04c6501239b02',
          author: {
            email: 'ruben@bridgewater.de',
            name: 'Ruben Bridgewater',
          },
          message:
            'doc: update assert documentation\n\nThis adds concrete expected types to the assert documentation.\n\nIt also fixes a `changes` entry and improves some minor comments.\n\nPR-URL: https://github.com/nodejs/node/pull/20486\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Joyee Cheung <joyeec9h3@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/4c6df73ae4e3c7ce0b2346bc38c04c6501239b02',
        },
        {
          sha: 'b304096a14f4b266738faeaded8ea31215528ea0',
          author: {
            email: 'ruben@bridgewater.de',
            name: 'Ruben Bridgewater',
          },
          message:
            'assert: move AssertionError into own file\n\nThis moves the `assert` parts from `internal/errors` into an own\nfile. `internal/errors` got bigger and bigger and it was difficult\nto keep a good overview of what was going on. While doing so it\nalso removes the `internalAssert` function and just lazy loads\n`assert`.\n\nPR-URL: https://github.com/nodejs/node/pull/20486\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Joyee Cheung <joyeec9h3@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/b304096a14f4b266738faeaded8ea31215528ea0',
        },
        {
          sha: '5a0e37925027f415412fb5f46e33f1e9d16eddf9',
          author: {
            email: 'ruben@bridgewater.de',
            name: 'Ruben Bridgewater',
          },
          message:
            'errors: move functions to error code\n\nThis makes sure the functions are actually directly beneath the\nspecification of an error code.\nThat way it is not necessary to jump around when looking at the\nfunctionality.\n\nPR-URL: https://github.com/nodejs/node/pull/20486\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Joyee Cheung <joyeec9h3@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5a0e37925027f415412fb5f46e33f1e9d16eddf9',
        },
        {
          sha: '5e6ca894cfc50690366a501be52e7248f3574d06',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: fix nullptr dereference for signal during startup\n\nThis fixes a test failure when running\n`test/parallel/test-child-process-spawnsync-kill-signal.js`\nunder load. What would happen is that `SignalExit()` tries\nto shutdown the tracing agent, which might not have been set\nup by the point that Node.js receives the signal.\n\nPR-URL: https://github.com/nodejs/node/pull/20637\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5e6ca894cfc50690366a501be52e7248f3574d06',
        },
        {
          sha: '560925fe22bfc23860b04704ff4cae21e4dd19ff',
          author: {
            email: 'ruben@bridgewater.de',
            name: 'Ruben Bridgewater',
          },
          message:
            'assert: make sure throws is able to handle primitives\n\nThis fixes some possible issues with `assert.throws` and\n`assert.rejects` in combination with an validation object. It will\nnow properly handle primitive values being thrown as error.\n\nIt also makes sure the `generatedMessage` property is properly set\nif `assert.throws` or `assert.rejects` is used in combination with\nan validation object and improves the error performance in such cases\nby only creating the error once.\n\nIn addition it will fix detecting regular expressions from a different\ncontext such as n-api that are passed through as validator for\n`assert.throws` or `assert.rejects`. Until now those were not tested.\n\nPR-URL: https://github.com/nodejs/node/pull/20482\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Michaël Zasso <targos@protonmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/560925fe22bfc23860b04704ff4cae21e4dd19ff',
        },
        {
          sha: '5c6cf30143f3191b043ba0b4e814768efa1069f7',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: add environment cleanup hooks\n\nThis adds pairs of methods to the `Environment` class and to public APIs\nwhich can add and remove cleanup handlers.\n\nUnlike `AtExit`, this API targets addon developers rather than\nembedders, giving them (and Node’s internals) the ability to register\nper-`Environment` cleanup work.\n\nWe may want to replace `AtExit` with this API at some point.\n\nMany thanks for Stephen Belanger for reviewing the original version of\nthis commit in the Ayo.js project.\n\nRefs: https://github.com/ayojs/ayo/pull/82\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5c6cf30143f3191b043ba0b4e814768efa1069f7',
        },
        {
          sha: '17e289eca8f8398243df5c4006d80f7381fd08bc',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: make CleanupHandles() tear down handles/reqs\n\nPreviously, handles would not be closed when the current `Environment`\nstopped, which is acceptable in a single-`Environment`-per-process\nsituation, but would otherwise create memory and file descriptor\nleaks.\n\nAlso, introduce a generic way to close handles via the\n`Environment::CloseHandle()` function, which automatically keeps\ntrack of whether a close callback has been called yet or not.\n\nMany thanks for Stephen Belanger for reviewing the original version of\nthis commit in the Ayo.js project.\n\nRefs: https://github.com/ayojs/ayo/pull/85\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/17e289eca8f8398243df5c4006d80f7381fd08bc',
        },
        {
          sha: 'cac8496c2ff592198a7afd114610deccb0e178ab',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: unify ReqWrap libuv calling\n\nThis allows easier tracking of whether there are active `ReqWrap`s.\n\nMany thanks for Stephen Belanger for reviewing the original version of\nthis commit in the Ayo.js project.\n\nRefs: https://github.com/ayojs/ayo/pull/85\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/cac8496c2ff592198a7afd114610deccb0e178ab',
        },
        {
          sha: '1db0039c505c6081f1d0d84cc24133ed6659e539',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: keep track of open requests\n\nWorkers cannot shut down while requests are open, so keep a counter\nthat is increased whenever libuv requests are made and decreased\nwhenever their callback is called.\n\nThis also applies to other embedders, who may want to shut down\nan `Environment` instance early.\n\nMany thanks for Stephen Belanger for reviewing the original version of\nthis commit in the Ayo.js project.\n\nFixes: https://github.com/nodejs/node/issues/20517\nRefs: https://github.com/ayojs/ayo/pull/85\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/1db0039c505c6081f1d0d84cc24133ed6659e539',
        },
        {
          sha: '61fd027096c0416a6e9bbe3ee7b7edb4c180725a',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: use cleanup hooks to tear down BaseObjects\n\nClean up after `BaseObject` instances when the `Environment`\nis being shut down. This takes care of closing non-libuv resources\nlike `zlib` instances, which do not require asynchronous shutdown.\n\nMany thanks for Stephen Belanger, Timothy Gu and Alexey Orlenko for\nreviewing the original version of this commit in the Ayo.js project.\n\nRefs: https://github.com/ayojs/ayo/pull/88\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/61fd027096c0416a6e9bbe3ee7b7edb4c180725a',
        },
        {
          sha: 'bcb324c3ffd74147041cf892a0b2840aa340c248',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: add can_call_into_js flag\n\nThis prevents calls back into JS from the shutdown phase.\n\nMany thanks for Stephen Belanger for reviewing the original version of\nthis commit in the Ayo.js project.\n\nRefs: https://github.com/ayojs/ayo/pull/82\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/bcb324c3ffd74147041cf892a0b2840aa340c248',
        },
        {
          sha: '0a0c8a7311b16bc60eee64d9ba04da929cd2d667',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'tools: remove `--quiet` from run-valgrind.py\n\nThis should no longer be an issue, now that we clean up\nresources when exiting.\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/0a0c8a7311b16bc60eee64d9ba04da929cd2d667',
        },
        {
          sha: 'a928b2d5300ff5a4d6223c59c4e3bda818de5113',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'process: create stdin with `manualStart: true`\n\nOtherwise Node.js will try to read data from the handle.\nThis causes issues when Node.js is already reading from the\nsame handle, but a different associated stream\n(e.g. a possible IPC channel).\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/a928b2d5300ff5a4d6223c59c4e3bda818de5113',
        },
        {
          sha: '63a84609fb24b245838f2d0838d5141d36f09f83',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            "src: store fd for libuv streams on Windows\n\nOn Windows, we can't just look up a FD for libuv streams and\nreturn it in `GetFD()`.\nHowever, we do sometimes construct streams from their FDs;\nin those cases, it should be okay to store the value on a class field.\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/63a84609fb24b245838f2d0838d5141d36f09f83',
        },
        {
          sha: 'baea5a893d1c365646a3928f5f1a44c1be6921a4',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: remove NodeCategorySet destructor\n\nThis currently crashes during environment cleanup because\nthe object would be torn down while there are enabled categories.\n\nI’m not sure about the exact semantics here, but since the\nobject cannot be garbage collected at this point anyway\nbecause it’s `Persistent` handle is strong, removing the\ndestructor at least doesn’t make anything worse than it is\nright now (i.e. the destructor would never have been called\nbefore anyway).\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/baea5a893d1c365646a3928f5f1a44c1be6921a4',
        },
        {
          sha: '5d7045960628084f79f5da74272000b7d0b8256f',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            "lib: defer pausing stdin to the next tick\n\nThis is done to match the stream implementation, which also\nonly actually stops reading in the next tick after the `'pause'`\nevent is emitted.\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5d7045960628084f79f5da74272000b7d0b8256f',
        },
        {
          sha: '2b3150466e5f4db841f5980cda32172555bdda15',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: always call ReadStop() before Close()\n\nFor libuv-backed streams, always explicitly stop reading before\nclosing the handle.\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/2b3150466e5f4db841f5980cda32172555bdda15',
        },
        {
          sha: 'c0720570498895d06dcec4e8f01e8922a81ac78b',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: unify thread pool work\n\nInstead of using the libuv mechanism directly, provide an internal\n`ThreadPoolWork` wrapper that takes care of increasing/decreasing\nthe waiting request counter.\n\nPR-URL: https://github.com/nodejs/node/pull/19377\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/c0720570498895d06dcec4e8f01e8922a81ac78b',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:30:55Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657950327',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/393',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/393/events',
        html_url: 'https://github.com/standard-things/esm/issues/393',
        id: 322081328,
        number: 393,
        title: 'How to use with builtin modules?',
        user: {
          login: 'Nicholi',
          id: 959775,
          avatar_url: 'https://avatars3.githubusercontent.com/u/959775?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Nicholi',
          html_url: 'https://github.com/Nicholi',
          followers_url: 'https://api.github.com/users/Nicholi/followers',
          following_url:
            'https://api.github.com/users/Nicholi/following{/other_user}',
          gists_url: 'https://api.github.com/users/Nicholi/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Nicholi/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Nicholi/subscriptions',
          organizations_url: 'https://api.github.com/users/Nicholi/orgs',
          repos_url: 'https://api.github.com/users/Nicholi/repos',
          events_url: 'https://api.github.com/users/Nicholi/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Nicholi/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130610,
            url:
              'https://api.github.com/repos/standard-things/esm/labels/question',
            name: 'question',
            color: 'd4c5f9',
            default: true,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-10T20:53:59Z',
        updated_at: '2018-05-10T21:27:36Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          'I am completely new to the ESM space, and just trying to make sense of what to do. From your video presentation I took it that you can make an ES module that can be consumed by both CJS/ESM with no special dependencies for the consuming application. Only my module requires (lol) \'esm\', not the consuming application... unless thats totally wrong? Everything seems to work fine, until the module attempts to utilize a node builtin module, like say \'path\'.\r\n\r\nThe consuming application is throwing a curious error, which I can\'t make sense of.\r\n> file:///home/nicholi/Documents/node/testesm/node_modules/@myscope/testesm/main.js:1\r\n> TypeError: Cannot read property \'options\' of null\r\n>     at Object.Module._extensions..js (module.js:663:10)\r\n\r\nI am assuming I\'m missing something obvious... or one of the config options (but I have no idea which flags to turn on/off). Here is a barebones sample of what I\'m trying to do. Both the ESM module (where it is loading in \'path\'), and a consuming application loading it via normal CJS.\r\n\r\n**ES Module**\r\npackage.json:\r\n```\r\n{\r\n  "name": "@myscope/testesm",\r\n  "version": "1.0.0",\r\n  "main": "index.js",\r\n  "module": "main.js",\r\n  "dependencies": {\r\n    "esm": "^3.0.33"\r\n  }\r\n}\r\n```\r\nindex.js - totally standard\r\n```\r\n\'use strict\';\r\n\r\n// Set options as a parameter, environment variable, or rc file.\r\nrequire = require(\'esm\')(module/*, options*/);\r\nmodule.exports = require(\'./main\');\r\n```\r\nmain.js\r\n```\r\n// no idea which of these notations i should be using, none of them work\r\nimport path from \'path\';\r\nconst {basename} = path;\r\n//import * as path from \'path\';\r\n//const path = require(\'path\');\r\n\r\nexport const a = \'ayyyyyy\';\r\n\r\nexport default class Empty {\r\n  constructor() {\r\n  }\r\n\r\n  test() {\r\n    console.log(\'yo\');\r\n  }\r\n\r\n  test2() {\r\n    console.log(path.basename(\'/this/path/isnt/really.real\'));\r\n  }\r\n}\r\n```\r\n\r\n**CONSUMING APPLICATION**\r\npackage.json:\r\n```\r\n{ \r\n  "name": "runesm",\r\n  "version": "1.0.0",\r\n  "main": "index.js",\r\n  "dependencies": {\r\n    "@myscope/testesm": "^1.0.0"\r\n  }\r\n}\r\n```\r\n\r\nindex.js:\r\n```\r\n// loading as CJS (?)\r\nconst {default: Empty, a} = require(\'@myscope/testesm\');\r\n\r\nconsole.log(\'const a:\', a);\r\n\r\nlet testEsm = new Empty();\r\n\r\ntestEsm.test();\r\ntestEsm.test2();\r\n\r\n\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388191470',
        html_url:
          'https://github.com/standard-things/esm/issues/393#issuecomment-388191470',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/393',
        id: 388191470,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T21:27:36Z',
        updated_at: '2018-05-10T21:27:36Z',
        author_association: 'OWNER',
        body:
          'Hi @Nicholi!\r\n\r\nCan you create a simple repro repo with the latest 3.0.34.',
      },
    },
    public: true,
    created_at: '2018-05-10T21:27:36Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657922084',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2554951967,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/master',
      head: 'e0ec8323ef9b178fba5204c4544e2a63164cddfd',
      before: '7e4c1b69f1c5957e5ea26940545f6dd714c72e40',
      commits: [
        {
          sha: '2080cc646374f065fa262092b7efc3726705ba93',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Cleanup builtinEntries.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/2080cc646374f065fa262092b7efc3726705ba93',
        },
        {
          sha: 'e0ec8323ef9b178fba5204c4544e2a63164cddfd',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.34.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/e0ec8323ef9b178fba5204c4544e2a63164cddfd',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:21:10Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657863809',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2554920579,
      size: 5,
      distinct_size: 5,
      ref: 'refs/heads/master',
      head: '7e4c1b69f1c5957e5ea26940545f6dd714c72e40',
      before: '4ae93fcbcdc9b41def364ed232ecfb617542add0',
      commits: [
        {
          sha: '25a09d4e6774744e80fd44df16f0a6c24dc2198d',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add ability to update a single entry binding.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/25a09d4e6774744e80fd44df16f0a6c24dc2198d',
        },
        {
          sha: '5c3450337044cec152a34521e38b8f862960f54b',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Suppress fs.promises warnings in trash().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/5c3450337044cec152a34521e38b8f862960f54b',
        },
        {
          sha: '52b78357210386cde7b90e6c69b921d973d9f10c',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Lazy define handler.get trap.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/52b78357210386cde7b90e6c69b921d973d9f10c',
        },
        {
          sha: '99ec8cc04b5150c79de75a0067435f4bdcdb42ad',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove unneeded __proto__ assignments.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/99ec8cc04b5150c79de75a0067435f4bdcdb42ad',
        },
        {
          sha: '7e4c1b69f1c5957e5ea26940545f6dd714c72e40',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Memoize all builtinEntries but the Module module. [closes #392]',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/7e4c1b69f1c5957e5ea26940545f6dd714c72e40',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T21:08:05Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7657863756',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/392',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/events',
        html_url: 'https://github.com/standard-things/esm/issues/392',
        id: 321904767,
        number: 392,
        title:
          '3.0.32: custom extensions with babel/register stopped resolving properly',
        user: {
          login: 'deepsweet',
          id: 266822,
          avatar_url: 'https://avatars3.githubusercontent.com/u/266822?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/deepsweet',
          html_url: 'https://github.com/deepsweet',
          followers_url: 'https://api.github.com/users/deepsweet/followers',
          following_url:
            'https://api.github.com/users/deepsweet/following{/other_user}',
          gists_url: 'https://api.github.com/users/deepsweet/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/deepsweet/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/deepsweet/subscriptions',
          organizations_url: 'https://api.github.com/users/deepsweet/orgs',
          repos_url: 'https://api.github.com/users/deepsweet/repos',
          events_url: 'https://api.github.com/users/deepsweet/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/deepsweet/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-05-10T11:50:55Z',
        updated_at: '2018-05-10T21:08:04Z',
        closed_at: '2018-05-10T21:08:04Z',
        author_association: 'NONE',
        body:
          'See [mocku](https://github.com/deepsweet/mocku) – `yarn && yarn upgrade esm && yarn start test`. Every single test is failing now because all files are `.ts` and it says "Cannot find module" on them.\r\n\r\nIt\'s done through the `@babel/register` with custom extensions array, and `@babel/register` is required after `esm` loader.\r\n\r\nWorks fine with 3.0.31 and earlier.',
      },
    },
    public: true,
    created_at: '2018-05-10T21:08:04Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7656972929',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 118073108,
      name: 'standard-things/create-esm',
      url: 'https://api.github.com/repos/standard-things/create-esm',
    },
    payload: {
      push_id: 2554449669,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/master',
      head: '7a72e571778de940a9fa7e414e7e4f5cae4d0a49',
      before: '251ddbede40a737b73197693f517b82c7784b1d6',
      commits: [
        {
          sha: 'a2dbee607af6c6c9c4835a21bb11f7e79dfb38cc',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Suppress fs.promises warnings in trash().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/create-esm/commits/a2dbee607af6c6c9c4835a21bb11f7e79dfb38cc',
        },
        {
          sha: '7a72e571778de940a9fa7e414e7e4f5cae4d0a49',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Update deps.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/create-esm/commits/7a72e571778de940a9fa7e414e7e4f5cae4d0a49',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T18:04:55Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7656258347',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2554076024,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: '6876afd0a3d9b339bed2a7731cccbbd1ad258559',
      before: '3d6c6a106aa2eab477e5d1a8b13eb98c3c44d7a0',
      commits: [
        {
          sha: '6876afd0a3d9b339bed2a7731cccbbd1ad258559',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/6876afd0a3d9b339bed2a7731cccbbd1ad258559',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T15:43:31Z',
  },
  {
    id: '7656223607',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2554058066,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: '3d6c6a106aa2eab477e5d1a8b13eb98c3c44d7a0',
      before: '783c9ad9f2da99ab91ffe8b36288a2c3e03d2fa6',
      commits: [
        {
          sha: '3d6c6a106aa2eab477e5d1a8b13eb98c3c44d7a0',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/3d6c6a106aa2eab477e5d1a8b13eb98c3c44d7a0',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T15:37:14Z',
  },
  {
    id: '7656198120',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      push_id: 2554044849,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm-builtin-module-namespaces',
      head: '783c9ad9f2da99ab91ffe8b36288a2c3e03d2fa6',
      before: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
      commits: [
        {
          sha: '783c9ad9f2da99ab91ffe8b36288a2c3e03d2fa6',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            "esm: provide named exports for builtin libs\n\nprovide named exports for all builtin libraries so that the libraries may be\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\ninstead of importing the entire namespace, `import fs from 'fs'`, and\ncalling `fs.readFile`. the default export is left as the entire\nnamespace (module.exports)",
          distinct: true,
          url:
            'https://api.github.com/repos/devsnek/node/commits/783c9ad9f2da99ab91ffe8b36288a2c3e03d2fa6',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T15:32:36Z',
  },
  {
    id: '7656153673',
    type: 'PullRequestReviewCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/pulls/comments/187364905',
        pull_request_review_id: 119130656,
        id: 187364905,
        diff_hunk:
          "@@ -95,16 +95,42 @@ When loaded via `import` these modules will provide a single `default` export\n representing the value of `module.exports` at the time they finished evaluating.\n \n ```js\n-import fs from 'fs';\n-fs.readFile('./foo.txt', (err, body) => {\n+// foo.js\n+module.exports = { one: 1 };\n+\n+// bar.js\n+import foo from './foo.js';\n+foo.one === 1; // true\n+```\n+\n+Builtin modules will provide named exports of their public API, as well as a\n+default export which can be used for, among other things, modifying the named\n+exports.",
        path: 'doc/api/esm.md',
        position: 16,
        original_position: 16,
        commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        original_commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "> yup, we cannot have perfect sync, just interesting that fs.readFile = fs.readFile updates but fs.readFile doesn't.\r\n\r\nI'll add the trap.",
        created_at: '2018-05-10T15:24:53Z',
        updated_at: '2018-05-10T15:24:54Z',
        html_url:
          'https://github.com/nodejs/node/pull/20403#discussion_r187364905',
        pull_request_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403',
        author_association: 'MEMBER',
        _links: {
          self: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments/187364905',
          },
          html: {
            href:
              'https://github.com/nodejs/node/pull/20403#discussion_r187364905',
          },
          pull_request: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
        },
        in_reply_to_id: 187347182,
      },
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
        id: 184835314,
        html_url: 'https://github.com/nodejs/node/pull/20403',
        diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
        patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        number: 20403,
        state: 'open',
        locked: false,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-10T15:24:54Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: '48bb3e767e609c86da343598cab3de01aa788520',
        assignee: null,
        assignees: [],
        requested_reviewers: [
          {
            login: 'jkrems',
            id: 567540,
            avatar_url: 'https://avatars1.githubusercontent.com/u/567540?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jkrems',
            html_url: 'https://github.com/jkrems',
            followers_url: 'https://api.github.com/users/jkrems/followers',
            following_url:
              'https://api.github.com/users/jkrems/following{/other_user}',
            gists_url: 'https://api.github.com/users/jkrems/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jkrems/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jkrems/subscriptions',
            organizations_url: 'https://api.github.com/users/jkrems/orgs',
            repos_url: 'https://api.github.com/users/jkrems/repos',
            events_url: 'https://api.github.com/users/jkrems/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jkrems/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        requested_teams: [],
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        head: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-10T02:24:47Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 325218,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '945da6d22d109b17597c2c3bc8ea7d25a12db904',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 27193779,
            name: 'node',
            full_name: 'nodejs/node',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/node',
            forks_url: 'https://api.github.com/repos/nodejs/node/forks',
            keys_url: 'https://api.github.com/repos/nodejs/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/node/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/node/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/node/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/node/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/nodejs/node/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/node/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/node/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/node/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/nodejs/node/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/node/deployments',
            created_at: '2014-11-26T19:57:11Z',
            updated_at: '2018-05-10T15:23:48Z',
            pushed_at: '2018-05-10T15:22:35Z',
            git_url: 'git://github.com/nodejs/node.git',
            ssh_url: 'git@github.com:nodejs/node.git',
            clone_url: 'https://github.com/nodejs/node.git',
            svn_url: 'https://github.com/nodejs/node',
            homepage: 'https://nodejs.org',
            size: 375562,
            stargazers_count: 48619,
            watchers_count: 48619,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 10256,
            mirror_url: null,
            archived: false,
            open_issues_count: 767,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 10256,
            open_issues: 767,
            watchers: 48619,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
          html: { href: 'https://github.com/nodejs/node/pull/20403' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/node/issues/20403',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/node/issues/20403/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          },
        },
        author_association: 'MEMBER',
      },
    },
    public: true,
    created_at: '2018-05-10T15:24:53Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7656105603',
    type: 'PullRequestReviewCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/pulls/comments/187362281',
        pull_request_review_id: 119127431,
        id: 187362281,
        diff_hunk:
          "@@ -95,16 +95,42 @@ When loaded via `import` these modules will provide a single `default` export\n representing the value of `module.exports` at the time they finished evaluating.\n \n ```js\n-import fs from 'fs';\n-fs.readFile('./foo.txt', (err, body) => {\n+// foo.js\n+module.exports = { one: 1 };\n+\n+// bar.js\n+import foo from './foo.js';\n+foo.one === 1; // true\n+```\n+\n+Builtin modules will provide named exports of their public API, as well as a\n+default export which can be used for, among other things, modifying the named\n+exports.",
        path: 'doc/api/esm.md',
        position: 16,
        original_position: 16,
        commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        original_commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "> but have no objections to how it behaves.\r\n\r\nCool! Keep in mind trapping on `get` wouldn't help the first assert since accessing `readFile` doesn't trigger a get trap of `fs.readFile` so `a` would still be `10` and `b` would be `11`.\r\n",
        created_at: '2018-05-10T15:16:33Z',
        updated_at: '2018-05-10T15:16:33Z',
        html_url:
          'https://github.com/nodejs/node/pull/20403#discussion_r187362281',
        pull_request_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403',
        author_association: 'MEMBER',
        _links: {
          self: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments/187362281',
          },
          html: {
            href:
              'https://github.com/nodejs/node/pull/20403#discussion_r187362281',
          },
          pull_request: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
        },
        in_reply_to_id: 187347182,
      },
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
        id: 184835314,
        html_url: 'https://github.com/nodejs/node/pull/20403',
        diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
        patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        number: 20403,
        state: 'open',
        locked: false,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-10T15:16:33Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: 'f7119c985d46575edc83f6946134522597c5ec6e',
        assignee: null,
        assignees: [],
        requested_reviewers: [
          {
            login: 'jkrems',
            id: 567540,
            avatar_url: 'https://avatars1.githubusercontent.com/u/567540?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jkrems',
            html_url: 'https://github.com/jkrems',
            followers_url: 'https://api.github.com/users/jkrems/followers',
            following_url:
              'https://api.github.com/users/jkrems/following{/other_user}',
            gists_url: 'https://api.github.com/users/jkrems/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jkrems/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jkrems/subscriptions',
            organizations_url: 'https://api.github.com/users/jkrems/orgs',
            repos_url: 'https://api.github.com/users/jkrems/repos',
            events_url: 'https://api.github.com/users/jkrems/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jkrems/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        requested_teams: [],
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        head: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-10T02:24:47Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 325218,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '945da6d22d109b17597c2c3bc8ea7d25a12db904',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 27193779,
            name: 'node',
            full_name: 'nodejs/node',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/node',
            forks_url: 'https://api.github.com/repos/nodejs/node/forks',
            keys_url: 'https://api.github.com/repos/nodejs/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/node/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/node/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/node/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/node/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/nodejs/node/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/node/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/node/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/node/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/nodejs/node/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/node/deployments',
            created_at: '2014-11-26T19:57:11Z',
            updated_at: '2018-05-10T15:12:37Z',
            pushed_at: '2018-05-10T15:01:27Z',
            git_url: 'git://github.com/nodejs/node.git',
            ssh_url: 'git@github.com:nodejs/node.git',
            clone_url: 'https://github.com/nodejs/node.git',
            svn_url: 'https://github.com/nodejs/node',
            homepage: 'https://nodejs.org',
            size: 375562,
            stargazers_count: 48618,
            watchers_count: 48618,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 10255,
            mirror_url: null,
            archived: false,
            open_issues_count: 768,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 10255,
            open_issues: 768,
            watchers: 48618,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
          html: { href: 'https://github.com/nodejs/node/pull/20403' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/node/issues/20403',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/node/issues/20403/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          },
        },
        author_association: 'MEMBER',
      },
    },
    public: true,
    created_at: '2018-05-10T15:16:33Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7656010405',
    type: 'PullRequestReviewCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/pulls/comments/187357107',
        pull_request_review_id: 119120794,
        id: 187357107,
        diff_hunk:
          "@@ -95,16 +95,42 @@ When loaded via `import` these modules will provide a single `default` export\n representing the value of `module.exports` at the time they finished evaluating.\n \n ```js\n-import fs from 'fs';\n-fs.readFile('./foo.txt', (err, body) => {\n+// foo.js\n+module.exports = { one: 1 };\n+\n+// bar.js\n+import foo from './foo.js';\n+foo.one === 1; // true\n+```\n+\n+Builtin modules will provide named exports of their public API, as well as a\n+default export which can be used for, among other things, modifying the named\n+exports.",
        path: 'doc/api/esm.md',
        position: 16,
        original_position: 16,
        commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        original_commit_id: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "Yep that's a good idea. Maybe just documenting when syncs are done (define/delete/set) and that anything done outside of those won't be captured. To me the above example makes sense, but I have the context of knowing the traps used to simulate live bindings.",
        created_at: '2018-05-10T14:59:40Z',
        updated_at: '2018-05-10T14:59:40Z',
        html_url:
          'https://github.com/nodejs/node/pull/20403#discussion_r187357107',
        pull_request_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403',
        author_association: 'MEMBER',
        _links: {
          self: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments/187357107',
          },
          html: {
            href:
              'https://github.com/nodejs/node/pull/20403#discussion_r187357107',
          },
          pull_request: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
        },
        in_reply_to_id: 187347182,
      },
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
        id: 184835314,
        html_url: 'https://github.com/nodejs/node/pull/20403',
        diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
        patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        number: 20403,
        state: 'open',
        locked: false,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-10T14:59:40Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: 'ca2713049f7aabd07c21ba8f2030177e1d24ba4d',
        assignee: null,
        assignees: [],
        requested_reviewers: [
          {
            login: 'jkrems',
            id: 567540,
            avatar_url: 'https://avatars1.githubusercontent.com/u/567540?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jkrems',
            html_url: 'https://github.com/jkrems',
            followers_url: 'https://api.github.com/users/jkrems/followers',
            following_url:
              'https://api.github.com/users/jkrems/following{/other_user}',
            gists_url: 'https://api.github.com/users/jkrems/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jkrems/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jkrems/subscriptions',
            organizations_url: 'https://api.github.com/users/jkrems/orgs',
            repos_url: 'https://api.github.com/users/jkrems/repos',
            events_url: 'https://api.github.com/users/jkrems/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jkrems/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        requested_teams: [],
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
        head: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: '848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-10T02:24:47Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 325218,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '945da6d22d109b17597c2c3bc8ea7d25a12db904',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 27193779,
            name: 'node',
            full_name: 'nodejs/node',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/node',
            forks_url: 'https://api.github.com/repos/nodejs/node/forks',
            keys_url: 'https://api.github.com/repos/nodejs/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/node/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/node/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/node/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/node/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/nodejs/node/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/node/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/node/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/node/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/nodejs/node/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/node/deployments',
            created_at: '2014-11-26T19:57:11Z',
            updated_at: '2018-05-10T14:48:39Z',
            pushed_at: '2018-05-10T14:55:10Z',
            git_url: 'git://github.com/nodejs/node.git',
            ssh_url: 'git@github.com:nodejs/node.git',
            clone_url: 'https://github.com/nodejs/node.git',
            svn_url: 'https://github.com/nodejs/node',
            homepage: 'https://nodejs.org',
            size: 375562,
            stargazers_count: 48616,
            watchers_count: 48616,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 10255,
            mirror_url: null,
            archived: false,
            open_issues_count: 769,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 10255,
            open_issues: 769,
            watchers: 48616,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
          html: { href: 'https://github.com/nodejs/node/pull/20403' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/node/issues/20403',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/node/issues/20403/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/node/statuses/848e75e7a8d85ae4c3b21f8af0578a4699959aa6',
          },
        },
        author_association: 'MEMBER',
      },
    },
    public: true,
    created_at: '2018-05-10T14:59:40Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7655868611',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/392',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/events',
        html_url: 'https://github.com/standard-things/esm/issues/392',
        id: 321904767,
        number: 392,
        title:
          '3.0.32: custom extensions with babel/register stopped resolving properly',
        user: {
          login: 'deepsweet',
          id: 266822,
          avatar_url: 'https://avatars3.githubusercontent.com/u/266822?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/deepsweet',
          html_url: 'https://github.com/deepsweet',
          followers_url: 'https://api.github.com/users/deepsweet/followers',
          following_url:
            'https://api.github.com/users/deepsweet/following{/other_user}',
          gists_url: 'https://api.github.com/users/deepsweet/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/deepsweet/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/deepsweet/subscriptions',
          organizations_url: 'https://api.github.com/users/deepsweet/orgs',
          repos_url: 'https://api.github.com/users/deepsweet/repos',
          events_url: 'https://api.github.com/users/deepsweet/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/deepsweet/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-05-10T11:50:55Z',
        updated_at: '2018-05-10T14:35:28Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          'See [mocku](https://github.com/deepsweet/mocku) – `yarn && yarn upgrade esm && yarn start test`. Every single test is failing now because all files are `.ts` and it says "Cannot find module" on them.\r\n\r\nIt\'s done through the `@babel/register` with custom extensions array, and `@babel/register` is required after `esm` loader.\r\n\r\nWorks fine with 3.0.31 and earlier.',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388072464',
        html_url:
          'https://github.com/standard-things/esm/issues/392#issuecomment-388072464',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/392',
        id: 388072464,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T14:35:28Z',
        updated_at: '2018-05-10T14:35:28Z',
        author_association: 'OWNER',
        body:
          'Ok narrowed it down to https://github.com/standard-things/esm/commit/4cf5770ea0842a055a2edc57d01f2af1ae57997e.',
      },
    },
    public: true,
    created_at: '2018-05-10T14:35:28Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7655780797',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/392',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/392/events',
        html_url: 'https://github.com/standard-things/esm/issues/392',
        id: 321904767,
        number: 392,
        title:
          '3.0.32: custom extensions with babel/register stopped resolving properly',
        user: {
          login: 'deepsweet',
          id: 266822,
          avatar_url: 'https://avatars3.githubusercontent.com/u/266822?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/deepsweet',
          html_url: 'https://github.com/deepsweet',
          followers_url: 'https://api.github.com/users/deepsweet/followers',
          following_url:
            'https://api.github.com/users/deepsweet/following{/other_user}',
          gists_url: 'https://api.github.com/users/deepsweet/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/deepsweet/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/deepsweet/subscriptions',
          organizations_url: 'https://api.github.com/users/deepsweet/orgs',
          repos_url: 'https://api.github.com/users/deepsweet/repos',
          events_url: 'https://api.github.com/users/deepsweet/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/deepsweet/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-10T11:50:55Z',
        updated_at: '2018-05-10T14:19:59Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          'See [mocku](https://github.com/deepsweet/mocku) – `yarn && yarn upgrade esm && yarn start test`. Every single test is failing now because all files are `.ts` and it says "Cannot find module" on them.\r\n\r\nIt\'s done through the `@babel/register` with custom extensions array, and `@babel/register` is required after `esm` loader.\r\n\r\nWorks fine with 3.0.31 and earlier.',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/388067776',
        html_url:
          'https://github.com/standard-things/esm/issues/392#issuecomment-388067776',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/392',
        id: 388067776,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T14:19:59Z',
        updated_at: '2018-05-10T14:19:59Z',
        author_association: 'OWNER',
        body:
          "Thanks @deepsweet!\r\n\r\nIt's likely related to this change https://github.com/standard-things/esm/commit/024971ecf69f81324c0185ac62d77cda1bb777cf.\r\nIn the back of my mind I was wondering if it would cause issues. I'll dig into the root cause and patch and add a test for it.",
      },
    },
    public: true,
    created_at: '2018-05-10T14:19:59Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653773194',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/391',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/events',
        html_url: 'https://github.com/standard-things/esm/issues/391',
        id: 321774936,
        number: 391,
        title: 'instanceof for builtins not working as expected in 3.0.32',
        user: {
          login: 'marklu',
          id: 383023,
          avatar_url: 'https://avatars0.githubusercontent.com/u/383023?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/marklu',
          html_url: 'https://github.com/marklu',
          followers_url: 'https://api.github.com/users/marklu/followers',
          following_url:
            'https://api.github.com/users/marklu/following{/other_user}',
          gists_url: 'https://api.github.com/users/marklu/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/marklu/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/marklu/subscriptions',
          organizations_url: 'https://api.github.com/users/marklu/orgs',
          repos_url: 'https://api.github.com/users/marklu/repos',
          events_url: 'https://api.github.com/users/marklu/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/marklu/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-10T01:02:17Z',
        updated_at: '2018-05-10T06:17:37Z',
        closed_at: '2018-05-10T01:29:11Z',
        author_association: 'NONE',
        body:
          "It appears that esm@3.0.32 introduced a bug on how `instanceof` is handled with NodeJS builtins.\r\n\r\n```\r\nconst EventEmitter = require('events')\r\nconst Stream = require('stream').Stream\r\n\r\nconst myObject = new Stream()\r\nconsole.log(myObject instanceof EventEmitter)\r\n/* true in vanilla Node.js, false with esm 3.0.32 */\r\n```\r\n\r\nThis works as expected with esm@3.0.31.",
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/387963095',
        html_url:
          'https://github.com/standard-things/esm/issues/391#issuecomment-387963095',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/391',
        id: 387963095,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T06:17:37Z',
        updated_at: '2018-05-10T06:17:37Z',
        author_association: 'OWNER',
        body:
          '[v3.0.33](https://github.com/standard-things/esm/releases/tag/3.0.33) is released :tada:',
      },
    },
    public: true,
    created_at: '2018-05-10T06:17:37Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653770953',
    type: 'ReleaseEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'published',
      release: {
        url:
          'https://api.github.com/repos/standard-things/esm/releases/10935079',
        assets_url:
          'https://api.github.com/repos/standard-things/esm/releases/10935079/assets',
        upload_url:
          'https://uploads.github.com/repos/standard-things/esm/releases/10935079/assets{?name,label}',
        html_url: 'https://github.com/standard-things/esm/releases/tag/3.0.33',
        id: 10935079,
        tag_name: '3.0.33',
        target_commitish: 'master',
        name: '',
        draft: false,
        author: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        prerelease: false,
        created_at: '2018-05-10T06:13:08Z',
        published_at: '2018-05-10T06:16:48Z',
        assets: [],
        tarball_url:
          'https://api.github.com/repos/standard-things/esm/tarball/3.0.33',
        zipball_url:
          'https://api.github.com/repos/standard-things/esm/zipball/3.0.33',
        body:
          '* Added support for `util.types.isModuleNamespaceObject()`\r\n* Ensured `instanceof` builtin modules works as expected (#391)\r\n',
      },
    },
    public: true,
    created_at: '2018-05-10T06:16:48Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653760859',
    type: 'CreateEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      ref: '3.0.33',
      ref_type: 'tag',
      master_branch: 'master',
      description: "Tomorrow's ECMAScript modules today!",
      pusher_type: 'user',
    },
    public: true,
    created_at: '2018-05-10T06:13:16Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653758335',
    type: 'GollumEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      pages: [
        {
          page_name: 'Compile-Node',
          title: 'Compile Node',
          summary: null,
          action: 'created',
          sha: '48b674dba522bc04ca6410160bf308c696774f82',
          html_url: 'https://github.com/standard-things/esm/wiki/Compile-Node',
        },
        {
          page_name: 'Home',
          title: 'Home',
          summary: null,
          action: 'created',
          sha: '48b674dba522bc04ca6410160bf308c696774f82',
          html_url: 'https://github.com/standard-things/esm/wiki/Home',
        },
        {
          page_name: 'Improved-Errors',
          title: 'Improved Errors',
          summary: null,
          action: 'created',
          sha: '48b674dba522bc04ca6410160bf308c696774f82',
          html_url:
            'https://github.com/standard-things/esm/wiki/Improved-Errors',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T06:12:23Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653754891',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131168711,
      name: 'standard-things/node',
      url: 'https://api.github.com/repos/standard-things/node',
    },
    payload: {
      push_id: 2552742874,
      size: 13,
      distinct_size: 13,
      ref: 'refs/heads/esm',
      head: '87165621f6071add52e3bdf76bcdeb3849cef190',
      before: 'ed0cfb99c78218e3d245f2bd30b60a901cc8f507',
      commits: [
        {
          sha: '5db018d1d05de039e00127a3a8adc0c3eed32e97',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            'v8: backport 9fb02b526f1cd3b859a530a01adb08bc0d089f4f\n\nRefs: https://github.com/v8/v8/commit/9fb02b526f1cd3b859a530a01adb08bc0d089f4f\n\nOriginal commit message:\n\n    Allow function callbacks to have Proxy as receiver.\n\n    R=verwaest@chromium.org\n\n    Bug: v8:5773\n    Change-Id: Ifd29a1116ee8c86b8d8d24485bbfd19e260ab66b\n    Reviewed-on: chromium-review.googlesource.com/1046088\n    Commit-Queue: Yang Guo <yangguo@chromium.org>\n    Reviewed-by: Camillo Bruni <cbruni@chromium.org>\n    Cr-Commit-Position: refs/heads/master@{#53015}\n\nPR-URL: https://github.com/nodejs/node/pull/20575\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5db018d1d05de039e00127a3a8adc0c3eed32e97',
        },
        {
          sha: '987387534aba3f23346e5b076058fcb567651389',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: minor refactor to string_search.h\n\n- Use `std::max` instead of a custom variant\n- Use member method pointers to avoid an extra layer of indirection\n- Stop transferring `Vector` into the `node` namespace\n\nPR-URL: https://github.com/nodejs/node/pull/20546\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/987387534aba3f23346e5b076058fcb567651389',
        },
        {
          sha: 'ccdee34072eab0f7ea385571aa43b00cb8dba4fd',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: use lock for c-ares library init/cleanup\n\nThis helps embedders wishing to use Node.js in a multi-threaded fashion\nand helps pave the way for thread-based worker support.\n\nThanks to Stephen Belanger for reviewing this commit in its original PR.\n\nRefs: https://github.com/ayojs/ayo/pull/82\n\nPR-URL: https://github.com/nodejs/node/pull/20539\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/ccdee34072eab0f7ea385571aa43b00cb8dba4fd',
        },
        {
          sha: '2c52f656bd95f1809ac1f75cfd55cf0563301279',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: protect global state with mutexes\n\nProtect environment variables and inherently per-process state with\nmutexes, to better accommodate Node’s usage in\nmulti-threading environments.\n\nThanks to Stephen Belanger for reviewing this change in its original PR.\n\nRefs: https://github.com/ayojs/ayo/pull/82\nPR-URL: https://github.com/nodejs/node/pull/20542\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/2c52f656bd95f1809ac1f75cfd55cf0563301279',
        },
        {
          sha: '5bb5d61cdd76f816c0af3cda5b610f5c34f41023',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: remove unused freelist.h header\n\nAlways easy enough to re-introduce if we do need it.\n\nPR-URL: https://github.com/nodejs/node/pull/20544\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>\nReviewed-By: Matheus Marchini <matheus@sthima.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5bb5d61cdd76f816c0af3cda5b610f5c34f41023',
        },
        {
          sha: 'facb2c53c2bb98d14a2f94844ceaacfc4c606e68',
          author: {
            email: 'daniel.bevenius@gmail.com',
            name: 'Daniel Bevenius',
          },
          message:
            'vm: move emitExperimentalWarning\n\nThis commit moves emitExperimentalWarning into the second object\ndestructoring of require internal/util.\n\nPR-URL: https://github.com/nodejs/node/pull/20593\nReviewed-By: Michaël Zasso <targos@protonmail.com>\nReviewed-By: Сковорода Никита Андреевич <chalkerx@gmail.com>\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Jon Moss <me@jonathanmoss.me>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Anna Henningsen <anna@addaleax.net>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/facb2c53c2bb98d14a2f94844ceaacfc4c606e68',
        },
        {
          sha: '06dc96fa7cc91c9ba4c776f73fef0e509f853ab2',
          author: {
            email: 'gabriel.schulhof@intel.com',
            name: 'Gabriel Schulhof',
          },
          message:
            'doc: fix missing napi_get_typedarray_info() param\n\nAlso, make the type name notation more consistent.\n\nPR-URL: https://github.com/nodejs/node/pull/20631\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/06dc96fa7cc91c9ba4c776f73fef0e509f853ab2',
        },
        {
          sha: '2246c3c843efd32d8c573c0228bbc289a46c28b7',
          author: { email: 'cjihrig@gmail.com', name: 'cjihrig' },
          message:
            'doc: add util.types.isBig{Int,Uint}64Array()\n\nThese methods are exposed, even though the BigInt64Array and\nBigUint64Array types are currently behind the --harmony-bigint\ncommand line flag.\n\nPR-URL: https://github.com/nodejs/node/pull/20615\nFixes: https://github.com/nodejs/node/issues/20602\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>\nReviewed-By: Anna Henningsen <anna@addaleax.net>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/2246c3c843efd32d8c573c0228bbc289a46c28b7',
        },
        {
          sha: '60349bbe0d90a91d66aa4ad71c4c2b0d3b08d54c',
          author: { email: 'cjihrig@gmail.com', name: 'cjihrig' },
          message:
            'deps: upgrade to libuv 1.20.3\n\nRefs: https://github.com/nodejs/node/pull/19377\nPR-URL: https://github.com/nodejs/node/pull/20585\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/60349bbe0d90a91d66aa4ad71c4c2b0d3b08d54c',
        },
        {
          sha: '945da6d22d109b17597c2c3bc8ea7d25a12db904',
          author: { email: 'anna@addaleax.net', name: 'Anna Henningsen' },
          message:
            'src: remove static variables from string_search\n\nThese variables can as well be stack-allocated. This avoids\nrelying on global state that is not protected by mutexes.\n\nThanks to Stephen Belanger for reviewing this change in its original PR.\n\nRefs: https://github.com/ayojs/ayo/pull/82\n\nPR-URL: https://github.com/nodejs/node/pull/20541\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/945da6d22d109b17597c2c3bc8ea7d25a12db904',
        },
        {
          sha: '6446510066e1d8951a81ae0fe4ce8e6f3649ae54',
          author: {
            email: 'daniel.bevenius@gmail.com',
            name: 'Daniel Bevenius',
          },
          message:
            'lib: return directly from packageMainCache\n\nThis commit updates readPackage to return directly when calling\npackageMainCache instead of storing the result in a local var\nand returning later.\n\nPR-URL: https://github.com/nodejs/node/pull/20591\nReviewed-By: Michaël Zasso <targos@protonmail.com>\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/6446510066e1d8951a81ae0fe4ce8e6f3649ae54',
        },
        {
          sha: 'b267d2aae6fc598ae0dd2d6134ec95ddd09891ba',
          author: {
            email: 'daniel.bevenius@gmail.com',
            name: 'Daniel Bevenius',
          },
          message:
            'src: use unqualified names in module_wrap.cc\n\nThis commit removes the usage of qualified names for consistency.\n\nPR-URL: https://github.com/nodejs/node/pull/20594\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/b267d2aae6fc598ae0dd2d6134ec95ddd09891ba',
        },
        {
          sha: '87165621f6071add52e3bdf76bcdeb3849cef190',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add esm to core.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/87165621f6071add52e3bdf76bcdeb3849cef190',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T06:11:13Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653750433',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131168711,
      name: 'standard-things/node',
      url: 'https://api.github.com/repos/standard-things/node',
    },
    payload: {
      push_id: 2552740405,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/esm',
      head: 'ed0cfb99c78218e3d245f2bd30b60a901cc8f507',
      before: '6c1133c2ca519084ff768e9411000d0b90b85e79',
      commits: [
        {
          sha: 'ed0cfb99c78218e3d245f2bd30b60a901cc8f507',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add esm to core.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/ed0cfb99c78218e3d245f2bd30b60a901cc8f507',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T06:09:45Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653667414',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552696911,
      size: 5,
      distinct_size: 5,
      ref: 'refs/heads/master',
      head: '4ae93fcbcdc9b41def364ed232ecfb617542add0',
      before: '34b00f671003742189229f98513027565b773012',
      commits: [
        {
          sha: 'e1963ac0d79f6744b8a467cfd546c419c23f7a80',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Control the result of util.types.isModuleNamespaceObject().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/e1963ac0d79f6744b8a467cfd546c419c23f7a80',
        },
        {
          sha: 'd3378d06f70acdf0b12fb53e32c5cf6dc0a6edf4',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add instanceof live binding test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/d3378d06f70acdf0b12fb53e32c5cf6dc0a6edf4',
        },
        {
          sha: 'acfaa1be5d4ea8f952fca7ffc0ff1821b4c61a38',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Update deps.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/acfaa1be5d4ea8f952fca7ffc0ff1821b4c61a38',
        },
        {
          sha: '4d8e8c507cd639c8f3c25abd4bf3da6bf3ab8082',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Fix failing nodechakra test with support.proxiedClasses.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/4d8e8c507cd639c8f3c25abd4bf3da6bf3ab8082',
        },
        {
          sha: '4ae93fcbcdc9b41def364ed232ecfb617542add0',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.33.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/4ae93fcbcdc9b41def364ed232ecfb617542add0',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T05:39:24Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653571051',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552643811,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '34b00f671003742189229f98513027565b773012',
      before: 'ca6686d1909666d3f546f8d0cfda07bb1528a036',
      commits: [
        {
          sha: '34b00f671003742189229f98513027565b773012',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Fix failing nodechakra test with support.proxiedClasses.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/34b00f671003742189229f98513027565b773012',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T04:59:06Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653506876',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552607730,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: 'ca6686d1909666d3f546f8d0cfda07bb1528a036',
      before: '97c6158c6ae3ce0256ece88029279be22082da5a',
      commits: [
        {
          sha: 'ca6686d1909666d3f546f8d0cfda07bb1528a036',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Update deps.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/ca6686d1909666d3f546f8d0cfda07bb1528a036',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T04:29:44Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653504735',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552606611,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: '97c6158c6ae3ce0256ece88029279be22082da5a',
      before: '59cfffb1c07ad7e07056bcdf25f20ef2477780dd',
      commits: [
        {
          sha: '6901cef84110cd45ed8380442ce56450cbc6e91c',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Mask hasInstance.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/6901cef84110cd45ed8380442ce56450cbc6e91c',
        },
        {
          sha: 'a4843a7214129c3a8a68d9d9c810ab31df5e8960',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Control the result of util.types.isModuleNamespaceObject().',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/a4843a7214129c3a8a68d9d9c810ab31df5e8960',
        },
        {
          sha: '97c6158c6ae3ce0256ece88029279be22082da5a',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add instanceof live binding test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/97c6158c6ae3ce0256ece88029279be22082da5a',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T04:28:46Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653488966',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 57350423,
      name: 'lodash/lodash-webpack-plugin',
      url: 'https://api.github.com/repos/lodash/lodash-webpack-plugin',
    },
    payload: {
      action: 'created',
      issue: {
        url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/133',
        repository_url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin',
        labels_url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/133/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/133/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/133/events',
        html_url: 'https://github.com/lodash/lodash-webpack-plugin/issues/133',
        id: 290342549,
        number: 133,
        title: '`_.each` is compiled to `arrayEach`',
        user: {
          login: 'imcuttle',
          id: 13509258,
          avatar_url: 'https://avatars2.githubusercontent.com/u/13509258?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/imcuttle',
          html_url: 'https://github.com/imcuttle',
          followers_url: 'https://api.github.com/users/imcuttle/followers',
          following_url:
            'https://api.github.com/users/imcuttle/following{/other_user}',
          gists_url: 'https://api.github.com/users/imcuttle/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/imcuttle/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/imcuttle/subscriptions',
          organizations_url: 'https://api.github.com/users/imcuttle/orgs',
          repos_url: 'https://api.github.com/users/imcuttle/repos',
          events_url: 'https://api.github.com/users/imcuttle/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/imcuttle/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 365997753,
            url:
              'https://api.github.com/repos/lodash/lodash-webpack-plugin/labels/question',
            name: 'question',
            color: 'd4c5f9',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 3,
        created_at: '2018-01-22T03:42:27Z',
        updated_at: '2018-05-10T04:21:44Z',
        closed_at: '2018-01-22T03:56:34Z',
        author_association: 'NONE',
        body:
          "when I use lodash-webpack-plugin, unfortunately, the method `_.each` will translate to `arrayEach`\r\n\r\n```javascript\r\nimport _ from 'lodash'\r\n\r\nconst obj = {\r\n  a: 'a',\r\n  b: 'b'\r\n}\r\n\r\n_.each(obj, (v) => {\r\n  // log nothing\r\n  console.log(v)\r\n})\r\n```\r\n",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/comments/387947850',
        html_url:
          'https://github.com/lodash/lodash-webpack-plugin/issues/133#issuecomment-387947850',
        issue_url:
          'https://api.github.com/repos/lodash/lodash-webpack-plugin/issues/133',
        id: 387947850,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T04:21:44Z',
        updated_at: '2018-05-10T04:21:44Z',
        author_association: 'OWNER',
        body:
          "@lili21 Ya, you probably shouldn't use `lodash-webpack-plugin` then and defer it your users if they're making an optimized build.",
      },
    },
    public: true,
    created_at: '2018-05-10T04:21:44Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7653042222',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/391',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/events',
        html_url: 'https://github.com/standard-things/esm/issues/391',
        id: 321774936,
        number: 391,
        title: 'instanceof for builtins not working as expected in 3.0.32',
        user: {
          login: 'marklu',
          id: 383023,
          avatar_url: 'https://avatars0.githubusercontent.com/u/383023?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/marklu',
          html_url: 'https://github.com/marklu',
          followers_url: 'https://api.github.com/users/marklu/followers',
          following_url:
            'https://api.github.com/users/marklu/following{/other_user}',
          gists_url: 'https://api.github.com/users/marklu/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/marklu/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/marklu/subscriptions',
          organizations_url: 'https://api.github.com/users/marklu/orgs',
          repos_url: 'https://api.github.com/users/marklu/repos',
          events_url: 'https://api.github.com/users/marklu/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/marklu/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130605,
            url: 'https://api.github.com/repos/standard-things/esm/labels/bug',
            name: 'bug',
            color: 'ee0701',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-10T01:02:17Z',
        updated_at: '2018-05-10T01:29:22Z',
        closed_at: '2018-05-10T01:29:11Z',
        author_association: 'NONE',
        body:
          "It appears that esm@3.0.32 introduced a bug on how `instanceof` is handled with NodeJS builtins.\r\n\r\n```\r\nconst EventEmitter = require('events')\r\nconst Stream = require('stream').Stream\r\n\r\nconst myObject = new Stream()\r\nconsole.log(myObject instanceof EventEmitter)\r\n/* true in vanilla Node.js, false with esm 3.0.32 */\r\n```\r\n\r\nThis works as expected with esm@3.0.31.",
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/387923027',
        html_url:
          'https://github.com/standard-things/esm/issues/391#issuecomment-387923027',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/391',
        id: 387923027,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T01:29:22Z',
        updated_at: '2018-05-10T01:29:22Z',
        author_association: 'OWNER',
        body: 'Thanks @marklu!',
      },
    },
    public: true,
    created_at: '2018-05-10T01:29:22Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653041743',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552350390,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '59cfffb1c07ad7e07056bcdf25f20ef2477780dd',
      before: '3672160bdf2e044711902b7126d46fd6b7d56002',
      commits: [
        {
          sha: '59cfffb1c07ad7e07056bcdf25f20ef2477780dd',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Ensure builtin instanceof is preserved. [closes #391]',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/59cfffb1c07ad7e07056bcdf25f20ef2477780dd',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T01:29:11Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7653041734',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/391',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/391/events',
        html_url: 'https://github.com/standard-things/esm/issues/391',
        id: 321774936,
        number: 391,
        title: 'instanceof for builtins not working as expected in 3.0.32',
        user: {
          login: 'marklu',
          id: 383023,
          avatar_url: 'https://avatars0.githubusercontent.com/u/383023?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/marklu',
          html_url: 'https://github.com/marklu',
          followers_url: 'https://api.github.com/users/marklu/followers',
          following_url:
            'https://api.github.com/users/marklu/following{/other_user}',
          gists_url: 'https://api.github.com/users/marklu/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/marklu/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/marklu/subscriptions',
          organizations_url: 'https://api.github.com/users/marklu/orgs',
          repos_url: 'https://api.github.com/users/marklu/repos',
          events_url: 'https://api.github.com/users/marklu/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/marklu/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-10T01:02:17Z',
        updated_at: '2018-05-10T01:29:11Z',
        closed_at: '2018-05-10T01:29:11Z',
        author_association: 'NONE',
        body:
          "It appears that esm@3.0.32 introduced a bug on how `instanceof` is handled with NodeJS builtins.\r\n\r\n```\r\nconst EventEmitter = require('events')\r\nconst Stream = require('stream').Stream\r\n\r\nconst myObject = new Stream()\r\nconsole.log(myObject instanceof EventEmitter)\r\n/* true in vanilla Node.js, false with esm 3.0.32 */\r\n```\r\n\r\nThis works as expected with esm@3.0.31.",
      },
    },
    public: true,
    created_at: '2018-05-10T01:29:11Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7652907566',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2552274443,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '3672160bdf2e044711902b7126d46fd6b7d56002',
      before: '6ab4d93b361a3a4edb66b33ab272ecd75c96c52b',
      commits: [
        {
          sha: '3672160bdf2e044711902b7126d46fd6b7d56002',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add Object.prototype check to live binding test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/3672160bdf2e044711902b7126d46fd6b7d56002',
        },
      ],
    },
    public: true,
    created_at: '2018-05-10T00:37:46Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7652888998',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/events',
        html_url: 'https://github.com/nodejs/node/pull/20403',
        id: 318718137,
        number: 20403,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 12,
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-10T00:30:21Z',
        closed_at: null,
        author_association: 'MEMBER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          html_url: 'https://github.com/nodejs/node/pull/20403',
          diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
          patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387914889',
        html_url:
          'https://github.com/nodejs/node/pull/20403#issuecomment-387914889',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        id: 387914889,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T00:30:21Z',
        updated_at: '2018-05-10T00:30:21Z',
        author_association: 'MEMBER',
        body:
          "@bmeck regarding your ❌ on the PR. We've added tests for the inherited receiver case. For the `worstTargetEver` case since this is feature is gated to builtin modules I added the test to my implementation ([here](https://github.com/standard-things/esm/blob/master/test/fixture/cjs/export/accessor.js) and [here](https://github.com/standard-things/esm/blob/6ab4d93b361a3a4edb66b33ab272ecd75c96c52b/test/cjs/import/live.js#L257-L265)) to ensure there isn't an issue there either.",
      },
    },
    public: true,
    created_at: '2018-05-10T00:30:21Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7652850458',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/modules/issues/79',
        repository_url: 'https://api.github.com/repos/nodejs/modules',
        labels_url:
          'https://api.github.com/repos/nodejs/modules/issues/79/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/79/comments',
        events_url:
          'https://api.github.com/repos/nodejs/modules/issues/79/events',
        html_url: 'https://github.com/nodejs/modules/pull/79',
        id: 321711738,
        number: 79,
        title: 'doc: 2018-05-09 meeting notes',
        user: {
          login: 'MylesBorins',
          id: 498775,
          avatar_url: 'https://avatars1.githubusercontent.com/u/498775?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/MylesBorins',
          html_url: 'https://github.com/MylesBorins',
          followers_url: 'https://api.github.com/users/MylesBorins/followers',
          following_url:
            'https://api.github.com/users/MylesBorins/following{/other_user}',
          gists_url: 'https://api.github.com/users/MylesBorins/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/MylesBorins/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/MylesBorins/subscriptions',
          organizations_url: 'https://api.github.com/users/MylesBorins/orgs',
          repos_url: 'https://api.github.com/users/MylesBorins/repos',
          events_url:
            'https://api.github.com/users/MylesBorins/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/MylesBorins/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-09T20:18:27Z',
        updated_at: '2018-05-10T00:16:11Z',
        closed_at: null,
        author_association: 'OWNER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/modules/pulls/79',
          html_url: 'https://github.com/nodejs/modules/pull/79',
          diff_url: 'https://github.com/nodejs/modules/pull/79.diff',
          patch_url: 'https://github.com/nodejs/modules/pull/79.patch',
        },
        body: null,
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/modules/issues/comments/387912834',
        html_url:
          'https://github.com/nodejs/modules/pull/79#issuecomment-387912834',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/79',
        id: 387912834,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-10T00:16:11Z',
        updated_at: '2018-05-10T00:16:11Z',
        author_association: 'MEMBER',
        body: "I'll send a PR this evening with notes.",
      },
    },
    public: true,
    created_at: '2018-05-10T00:16:11Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7652529658',
    type: 'CreateEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 132819111,
      name: 'jdalton/modules',
      url: 'https://api.github.com/repos/jdalton/modules',
    },
    payload: {
      ref: '2018-05-09',
      ref_type: 'branch',
      master_branch: 'master',
      description: 'Node.js Foundation Modules Team',
      pusher_type: 'user',
    },
    public: true,
    created_at: '2018-05-09T22:29:21Z',
  },
  {
    id: '7652519344',
    type: 'ForkEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      forkee: {
        id: 132819111,
        name: 'modules',
        full_name: 'jdalton/modules',
        owner: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        private: false,
        html_url: 'https://github.com/jdalton/modules',
        description: 'Node.js Foundation Modules Team',
        fork: true,
        url: 'https://api.github.com/repos/jdalton/modules',
        forks_url: 'https://api.github.com/repos/jdalton/modules/forks',
        keys_url: 'https://api.github.com/repos/jdalton/modules/keys{/key_id}',
        collaborators_url:
          'https://api.github.com/repos/jdalton/modules/collaborators{/collaborator}',
        teams_url: 'https://api.github.com/repos/jdalton/modules/teams',
        hooks_url: 'https://api.github.com/repos/jdalton/modules/hooks',
        issue_events_url:
          'https://api.github.com/repos/jdalton/modules/issues/events{/number}',
        events_url: 'https://api.github.com/repos/jdalton/modules/events',
        assignees_url:
          'https://api.github.com/repos/jdalton/modules/assignees{/user}',
        branches_url:
          'https://api.github.com/repos/jdalton/modules/branches{/branch}',
        tags_url: 'https://api.github.com/repos/jdalton/modules/tags',
        blobs_url:
          'https://api.github.com/repos/jdalton/modules/git/blobs{/sha}',
        git_tags_url:
          'https://api.github.com/repos/jdalton/modules/git/tags{/sha}',
        git_refs_url:
          'https://api.github.com/repos/jdalton/modules/git/refs{/sha}',
        trees_url:
          'https://api.github.com/repos/jdalton/modules/git/trees{/sha}',
        statuses_url:
          'https://api.github.com/repos/jdalton/modules/statuses/{sha}',
        languages_url: 'https://api.github.com/repos/jdalton/modules/languages',
        stargazers_url:
          'https://api.github.com/repos/jdalton/modules/stargazers',
        contributors_url:
          'https://api.github.com/repos/jdalton/modules/contributors',
        subscribers_url:
          'https://api.github.com/repos/jdalton/modules/subscribers',
        subscription_url:
          'https://api.github.com/repos/jdalton/modules/subscription',
        commits_url:
          'https://api.github.com/repos/jdalton/modules/commits{/sha}',
        git_commits_url:
          'https://api.github.com/repos/jdalton/modules/git/commits{/sha}',
        comments_url:
          'https://api.github.com/repos/jdalton/modules/comments{/number}',
        issue_comment_url:
          'https://api.github.com/repos/jdalton/modules/issues/comments{/number}',
        contents_url:
          'https://api.github.com/repos/jdalton/modules/contents/{+path}',
        compare_url:
          'https://api.github.com/repos/jdalton/modules/compare/{base}...{head}',
        merges_url: 'https://api.github.com/repos/jdalton/modules/merges',
        archive_url:
          'https://api.github.com/repos/jdalton/modules/{archive_format}{/ref}',
        downloads_url: 'https://api.github.com/repos/jdalton/modules/downloads',
        issues_url:
          'https://api.github.com/repos/jdalton/modules/issues{/number}',
        pulls_url:
          'https://api.github.com/repos/jdalton/modules/pulls{/number}',
        milestones_url:
          'https://api.github.com/repos/jdalton/modules/milestones{/number}',
        notifications_url:
          'https://api.github.com/repos/jdalton/modules/notifications{?since,all,participating}',
        labels_url:
          'https://api.github.com/repos/jdalton/modules/labels{/name}',
        releases_url:
          'https://api.github.com/repos/jdalton/modules/releases{/id}',
        deployments_url:
          'https://api.github.com/repos/jdalton/modules/deployments',
        created_at: '2018-05-09T22:26:30Z',
        updated_at: '2018-05-09T20:08:58Z',
        pushed_at: '2018-05-09T21:07:02Z',
        git_url: 'git://github.com/jdalton/modules.git',
        ssh_url: 'git@github.com:jdalton/modules.git',
        clone_url: 'https://github.com/jdalton/modules.git',
        svn_url: 'https://github.com/jdalton/modules',
        homepage: null,
        size: 70,
        stargazers_count: 0,
        watchers_count: 0,
        language: null,
        has_issues: false,
        has_projects: true,
        has_downloads: true,
        has_wiki: true,
        has_pages: false,
        forks_count: 0,
        mirror_url: null,
        archived: false,
        open_issues_count: 0,
        license: {
          key: 'mit',
          name: 'MIT License',
          spdx_id: 'MIT',
          url: 'https://api.github.com/licenses/mit',
        },
        forks: 0,
        open_issues: 0,
        watchers: 0,
        default_branch: 'master',
        public: true,
      },
    },
    public: true,
    created_at: '2018-05-09T22:26:31Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7652416534',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/events',
        html_url: 'https://github.com/nodejs/node/pull/20403',
        id: 318718137,
        number: 20403,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 11,
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-09T21:58:29Z',
        closed_at: null,
        author_association: 'MEMBER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          html_url: 'https://github.com/nodejs/node/pull/20403',
          diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
          patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387888303',
        html_url:
          'https://github.com/nodejs/node/pull/20403#issuecomment-387888303',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        id: 387888303,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T21:58:29Z',
        updated_at: '2018-05-09T21:58:29Z',
        author_association: 'MEMBER',
        body:
          "> This has cleaned up really nicely! Will be great to see it moving forward. Note I see we're getting the fs promises warnings when loading fs now.\r\n\r\nThanks! Yap, I mentioned that to Gus this morning. That will be resolved by https://github.com/nodejs/node/pull/20632",
      },
    },
    public: true,
    created_at: '2018-05-09T21:58:29Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7652383818',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/events',
        html_url: 'https://github.com/nodejs/node/issues/20578',
        id: 320870263,
        number: 20578,
        title:
          "await import() doesn't work in REPL even with --experimental-repl-await",
        user: {
          login: 'fatcerberus',
          id: 4097841,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4097841?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/fatcerberus',
          html_url: 'https://github.com/fatcerberus',
          followers_url: 'https://api.github.com/users/fatcerberus/followers',
          following_url:
            'https://api.github.com/users/fatcerberus/following{/other_user}',
          gists_url: 'https://api.github.com/users/fatcerberus/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/fatcerberus/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/fatcerberus/subscriptions',
          organizations_url: 'https://api.github.com/users/fatcerberus/orgs',
          repos_url: 'https://api.github.com/users/fatcerberus/repos',
          events_url:
            'https://api.github.com/users/fatcerberus/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/fatcerberus/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 647282848,
            url: 'https://api.github.com/repos/nodejs/node/labels/experimental',
            name: 'experimental',
            color: 'c5def5',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 7,
        created_at: '2018-05-07T16:31:08Z',
        updated_at: '2018-05-09T21:50:27Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          '* **Version**: v10.0.0\r\n* **Platform**: Windows 10 Pro 18.03 x64\r\n* **Subsystem**: REPL\r\n\r\n<!-- Enter your issue details below this comment. -->\r\n`await import()` doesn\'t work in the REPL even with `--experimental-repl-await`:\r\n```\r\nC:\\Users\\fatce>node --experimental-modules --experimental-repl-await\r\n> (node:4220) ExperimentalWarning: The ESM module loader is experimental.\r\n> await Promise.resolve(812)\r\n812\r\n> await import("module.mjs")\r\nawait import("module.mjs")\r\n^^^^^\r\n\r\nSyntaxError: await is only valid in async function\r\n\r\n```\r\n\r\nI can verify that dynamic import by itself works in the REPL, it\'s only the `await` that\'s an issue:\r\n```\r\n> import("module.mjs")\r\nPromise {\r\n  <pending>,\r\n  domain:\r\n   Domain {\r\n     domain: null,\r\n     _events:\r\n      { removeListener: [Function: updateExceptionCapture],\r\n        newListener: [Function: updateExceptionCapture],\r\n        error: [Function: debugDomainError] },\r\n     _eventsCount: 3,\r\n     _maxListeners: undefined,\r\n     members: [] } }\r\n> (node:4220) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_URL]: Invalid URL: repl\r\n    at onParseError (internal/url.js:234:17)\r\n    at parse (internal/url.js:243:3)\r\n    at new URL (internal/url.js:318:5)\r\n    at normalizeReferrerURL (internal/process/esm_loader.js:22:10)\r\n    at setImportModuleDynamicallyCallback (internal/process/esm_loader.js:66:37)\r\n    at process._tickCallback (internal/process/next_tick.js:178:7)\r\n(node:4220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)\r\n(node:4220) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.\r\n\\>\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387886448',
        html_url:
          'https://github.com/nodejs/node/issues/20578#issuecomment-387886448',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        id: 387886448,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T21:50:27Z',
        updated_at: '2018-05-09T21:50:27Z',
        author_association: 'MEMBER',
        body:
          '> There is still some tweaks to do to the AST transforms done by the `--experimental-repl-await`\r\n\r\nBy transform improvements I mean tweaking the transform to handle statements a bit better. \r\nFor example, assuming static import worked in the REPL *(I know, just roll with it)*, the following...\r\n```\r\n> import "path";var { sep } = await import("path")\r\nSyntaxError: await is only valid in async function\r\n```\r\nwould error because the transform will fail (falling back to the untransformed literal code).\r\nIt fails because the transform currently results in something like\r\n```\r\n(async () => { import "path";void ({ sep } = await import("path")) })()\r\n```\r\nand static `import` inside a function is an error.\r\n\r\nThe improved parsing bit is just adding Acorn parsing support for things like dynamic import, `import.meta`, class fields, etc. which is what [these](https://github.com/standard-things/esm/tree/master/src/acorn/parser) are for. \r\n\r\nI also have a toolbox of fast-paths/optimization techniques for Acorn to make things snappy. This is all a balance between how much tinkering with Acorn is wanted vs. waiting on a standardizes top-level await. For parsing support at least updating and optimization Acorn is straight forward enough.',
      },
    },
    public: true,
    created_at: '2018-05-09T21:50:27Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7652214005',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3784',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/events',
        html_url: 'https://github.com/lodash/lodash/issues/3784',
        id: 321707323,
        number: 3784,
        title: 'getOwn function?',
        user: {
          login: 'gakada',
          id: 13043588,
          avatar_url: 'https://avatars2.githubusercontent.com/u/13043588?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/gakada',
          html_url: 'https://github.com/gakada',
          followers_url: 'https://api.github.com/users/gakada/followers',
          following_url:
            'https://api.github.com/users/gakada/following{/other_user}',
          gists_url: 'https://api.github.com/users/gakada/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/gakada/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/gakada/subscriptions',
          organizations_url: 'https://api.github.com/users/gakada/orgs',
          repos_url: 'https://api.github.com/users/gakada/repos',
          events_url: 'https://api.github.com/users/gakada/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/gakada/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763154,
            url:
              'https://api.github.com/repos/lodash/lodash/labels/enhancement',
            name: 'enhancement',
            color: '84b6eb',
            default: true,
          },
          {
            id: 357705703,
            url:
              'https://api.github.com/repos/lodash/lodash/labels/votes%20needed',
            name: 'votes needed',
            color: 'c5def5',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-09T20:04:15Z',
        updated_at: '2018-05-09T21:10:46Z',
        closed_at: '2018-05-09T21:10:46Z',
        author_association: 'NONE',
        body:
          "Is there a function like `get` but only for own properties?\r\n\r\nCurrently\r\n```js\r\n> _.get({a: 1}, 'a')\r\n1\r\n> _.get({a: 1}, 'b')\r\nundefined\r\n> _.get({a: 1}, 'toString')\r\n[Function: toString]\r\n> _.has({a: 1}, 'a')\r\ntrue\r\n> _.has({a: 1}, 'b')\r\nfalse\r\n> _.has({a: 1}, 'toString')\r\nfalse\r\n```\r\nso something like\r\n```js\r\n_.has(xs, x) ? _.get(xs, x) : undefined\r\n```\r\nhas to be used.",
      },
    },
    public: true,
    created_at: '2018-05-09T21:10:46Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7652213997',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3784',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3784/events',
        html_url: 'https://github.com/lodash/lodash/issues/3784',
        id: 321707323,
        number: 3784,
        title: 'getOwn function?',
        user: {
          login: 'gakada',
          id: 13043588,
          avatar_url: 'https://avatars2.githubusercontent.com/u/13043588?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/gakada',
          html_url: 'https://github.com/gakada',
          followers_url: 'https://api.github.com/users/gakada/followers',
          following_url:
            'https://api.github.com/users/gakada/following{/other_user}',
          gists_url: 'https://api.github.com/users/gakada/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/gakada/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/gakada/subscriptions',
          organizations_url: 'https://api.github.com/users/gakada/orgs',
          repos_url: 'https://api.github.com/users/gakada/repos',
          events_url: 'https://api.github.com/users/gakada/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/gakada/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 2763154,
            url:
              'https://api.github.com/repos/lodash/lodash/labels/enhancement',
            name: 'enhancement',
            color: '84b6eb',
            default: true,
          },
          {
            id: 357705703,
            url:
              'https://api.github.com/repos/lodash/lodash/labels/votes%20needed',
            name: 'votes needed',
            color: 'c5def5',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-09T20:04:15Z',
        updated_at: '2018-05-09T21:10:46Z',
        closed_at: '2018-05-09T21:10:46Z',
        author_association: 'NONE',
        body:
          "Is there a function like `get` but only for own properties?\r\n\r\nCurrently\r\n```js\r\n> _.get({a: 1}, 'a')\r\n1\r\n> _.get({a: 1}, 'b')\r\nundefined\r\n> _.get({a: 1}, 'toString')\r\n[Function: toString]\r\n> _.has({a: 1}, 'a')\r\ntrue\r\n> _.has({a: 1}, 'b')\r\nfalse\r\n> _.has({a: 1}, 'toString')\r\nfalse\r\n```\r\nso something like\r\n```js\r\n_.has(xs, x) ? _.get(xs, x) : undefined\r\n```\r\nhas to be used.",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash/issues/comments/387876829',
        html_url:
          'https://github.com/lodash/lodash/issues/3784#issuecomment-387876829',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3784',
        id: 387876829,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T21:10:45Z',
        updated_at: '2018-05-09T21:10:45Z',
        author_association: 'OWNER',
        body:
          "Thanks @gakada!\r\n\r\nI can dig it. \r\n\r\nWe'll keep an eye on [the popularity of the request](https://github.com/lodash/lodash/blob/master/.github/CONTRIBUTING.md#feature-requests).",
      },
    },
    public: true,
    created_at: '2018-05-09T21:10:46Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7651959857',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/events',
        html_url: 'https://github.com/nodejs/node/issues/20578',
        id: 320870263,
        number: 20578,
        title:
          "await import() doesn't work in REPL even with --experimental-repl-await",
        user: {
          login: 'fatcerberus',
          id: 4097841,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4097841?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/fatcerberus',
          html_url: 'https://github.com/fatcerberus',
          followers_url: 'https://api.github.com/users/fatcerberus/followers',
          following_url:
            'https://api.github.com/users/fatcerberus/following{/other_user}',
          gists_url: 'https://api.github.com/users/fatcerberus/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/fatcerberus/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/fatcerberus/subscriptions',
          organizations_url: 'https://api.github.com/users/fatcerberus/orgs',
          repos_url: 'https://api.github.com/users/fatcerberus/repos',
          events_url:
            'https://api.github.com/users/fatcerberus/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/fatcerberus/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 647282848,
            url: 'https://api.github.com/repos/nodejs/node/labels/experimental',
            name: 'experimental',
            color: 'c5def5',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 4,
        created_at: '2018-05-07T16:31:08Z',
        updated_at: '2018-05-09T20:17:47Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          '* **Version**: v10.0.0\r\n* **Platform**: Windows 10 Pro 18.03 x64\r\n* **Subsystem**: REPL\r\n\r\n<!-- Enter your issue details below this comment. -->\r\n`await import()` doesn\'t work in the REPL even with `--experimental-repl-await`:\r\n```\r\nC:\\Users\\fatce>node --experimental-modules --experimental-repl-await\r\n> (node:4220) ExperimentalWarning: The ESM module loader is experimental.\r\n> await Promise.resolve(812)\r\n812\r\n> await import("module.mjs")\r\nawait import("module.mjs")\r\n^^^^^\r\n\r\nSyntaxError: await is only valid in async function\r\n\r\n```\r\n\r\nI can verify that dynamic import by itself works in the REPL, it\'s only the `await` that\'s an issue:\r\n```\r\n> import("module.mjs")\r\nPromise {\r\n  <pending>,\r\n  domain:\r\n   Domain {\r\n     domain: null,\r\n     _events:\r\n      { removeListener: [Function: updateExceptionCapture],\r\n        newListener: [Function: updateExceptionCapture],\r\n        error: [Function: debugDomainError] },\r\n     _eventsCount: 3,\r\n     _maxListeners: undefined,\r\n     members: [] } }\r\n> (node:4220) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_URL]: Invalid URL: repl\r\n    at onParseError (internal/url.js:234:17)\r\n    at parse (internal/url.js:243:3)\r\n    at new URL (internal/url.js:318:5)\r\n    at normalizeReferrerURL (internal/process/esm_loader.js:22:10)\r\n    at setImportModuleDynamicallyCallback (internal/process/esm_loader.js:66:37)\r\n    at process._tickCallback (internal/process/next_tick.js:178:7)\r\n(node:4220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)\r\n(node:4220) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.\r\n\\>\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387862499',
        html_url:
          'https://github.com/nodejs/node/issues/20578#issuecomment-387862499',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        id: 387862499,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T20:17:47Z',
        updated_at: '2018-05-09T20:17:47Z',
        author_association: 'MEMBER',
        body:
          "@guybedford Sure! For the parse-side (so non-dynamic-import base url issues) I have acorn extensions and customizations handled in a repo ([here](https://github.com/standard-things/esm/tree/master/src/acorn/parser) - MIT licensed). When I compile into Node I simply update the Acorn parser references to improve parsing. There is still some tweaks to do to the AST transforms done by the `--experimental-repl-await` but the syntax parsing itself can be improved at least. One of the things I leverage is the fact that Acorn doesn't need to perform runtime validation checks (since v8/chakra will handle those) this means parsing can be a bit more loose.\r\n",
      },
    },
    public: true,
    created_at: '2018-05-09T20:17:48Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651922170',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/modules/issues/76',
        repository_url: 'https://api.github.com/repos/nodejs/modules',
        labels_url:
          'https://api.github.com/repos/nodejs/modules/issues/76/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/76/comments',
        events_url:
          'https://api.github.com/repos/nodejs/modules/issues/76/events',
        html_url: 'https://github.com/nodejs/modules/pull/76',
        id: 320433461,
        number: 76,
        title: 'Add tzmanics as an observer',
        user: {
          login: 'tzmanics',
          id: 3611928,
          avatar_url: 'https://avatars1.githubusercontent.com/u/3611928?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tzmanics',
          html_url: 'https://github.com/tzmanics',
          followers_url: 'https://api.github.com/users/tzmanics/followers',
          following_url:
            'https://api.github.com/users/tzmanics/following{/other_user}',
          gists_url: 'https://api.github.com/users/tzmanics/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/tzmanics/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/tzmanics/subscriptions',
          organizations_url: 'https://api.github.com/users/tzmanics/orgs',
          repos_url: 'https://api.github.com/users/tzmanics/repos',
          events_url: 'https://api.github.com/users/tzmanics/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/tzmanics/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 831666985,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/modules-agenda',
            name: 'modules-agenda',
            color: '0e8a16',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-05-04T21:19:01Z',
        updated_at: '2018-05-09T20:09:58Z',
        closed_at: '2018-05-09T19:54:19Z',
        author_association: 'CONTRIBUTOR',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/modules/pulls/76',
          html_url: 'https://github.com/nodejs/modules/pull/76',
          diff_url: 'https://github.com/nodejs/modules/pull/76.diff',
          patch_url: 'https://github.com/nodejs/modules/pull/76.patch',
        },
        body: 'Hoping to help where I can 👍',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/modules/issues/comments/387860339',
        html_url:
          'https://github.com/nodejs/modules/pull/76#issuecomment-387860339',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/76',
        id: 387860339,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T20:09:58Z',
        updated_at: '2018-05-09T20:09:58Z',
        author_association: 'MEMBER',
        body:
          '@MylesBorins I believe there may be some follow-up needed for various script hooks or processes. If so this is just an FYI note for that.',
      },
    },
    public: true,
    created_at: '2018-05-09T20:09:58Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651917382',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/modules/issues/73',
        repository_url: 'https://api.github.com/repos/nodejs/modules',
        labels_url:
          'https://api.github.com/repos/nodejs/modules/issues/73/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/73/comments',
        events_url:
          'https://api.github.com/repos/nodejs/modules/issues/73/events',
        html_url: 'https://github.com/nodejs/modules/pull/73',
        id: 318496551,
        number: 73,
        title: 'doc: add 2018-04-25 notes',
        user: {
          login: 'MylesBorins',
          id: 498775,
          avatar_url: 'https://avatars1.githubusercontent.com/u/498775?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/MylesBorins',
          html_url: 'https://github.com/MylesBorins',
          followers_url: 'https://api.github.com/users/MylesBorins/followers',
          following_url:
            'https://api.github.com/users/MylesBorins/following{/other_user}',
          gists_url: 'https://api.github.com/users/MylesBorins/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/MylesBorins/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/MylesBorins/subscriptions',
          organizations_url: 'https://api.github.com/users/MylesBorins/orgs',
          repos_url: 'https://api.github.com/users/MylesBorins/repos',
          events_url:
            'https://api.github.com/users/MylesBorins/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/MylesBorins/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 837602582,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/meeting-notes',
            name: 'meeting-notes',
            color: 'c2e0c6',
            default: false,
          },
          {
            id: 831666985,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/modules-agenda',
            name: 'modules-agenda',
            color: '0e8a16',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 4,
        created_at: '2018-04-27T17:56:25Z',
        updated_at: '2018-05-09T20:08:58Z',
        closed_at: '2018-05-09T20:08:56Z',
        author_association: 'OWNER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/modules/pulls/73',
          html_url: 'https://github.com/nodejs/modules/pull/73',
          diff_url: 'https://github.com/nodejs/modules/pull/73.diff',
          patch_url: 'https://github.com/nodejs/modules/pull/73.patch',
        },
        body: 'closes #71 ',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/modules/issues/comments/387860048',
        html_url:
          'https://github.com/nodejs/modules/pull/73#issuecomment-387860048',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/73',
        id: 387860048,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T20:08:58Z',
        updated_at: '2018-05-09T20:08:58Z',
        author_association: 'MEMBER',
        body: 'Thanks all!',
      },
    },
    public: true,
    created_at: '2018-05-09T20:08:58Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651917301',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      push_id: 2551743442,
      size: 6,
      distinct_size: 6,
      ref: 'refs/heads/master',
      head: 'faeeb729b4e8d0ed00536a08e31e66f2723c998b',
      before: '303a84a9674287614f2ec5a01fb02f987c9f81f0',
      commits: [
        {
          sha: '42a86efd8f9d4ed272eedb1a00f5c20cce89ca51',
          author: {
            email: 'mylesborins@google.com',
            name: 'Myles Borins',
          },
          message: 'doc: add 2018-04-25 notes',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/42a86efd8f9d4ed272eedb1a00f5c20cce89ca51',
        },
        {
          sha: '0ba4630e3c78382b23a2a8767b36be2308bc5266',
          author: {
            email: 'targos@protonmail.com',
            name: 'Michaël Zasso',
          },
          message: 'minor fixes',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/0ba4630e3c78382b23a2a8767b36be2308bc5266',
        },
        {
          sha: '075ec4ad09027b932c81d3d835a8f49d1cfa1d61',
          author: {
            email: 'GeoffreyBooth@users.noreply.github.com',
            name: 'Geoffrey Booth',
          },
          message: 'Geoffrey was here!',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/075ec4ad09027b932c81d3d835a8f49d1cfa1d61',
        },
        {
          sha: '831f574dd599f7a582b7c3ddb1d977e5ea5978f6',
          author: { email: 'sven.sauleau@xtuc.fr', name: 'Sven SAULEAU' },
          message: 'docs: update participant list',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/831f574dd599f7a582b7c3ddb1d977e5ea5978f6',
        },
        {
          sha: '68e0d4030088b7709198d328aada4ef92f6628f1',
          author: { email: 'sven.sauleau@xtuc.fr', name: 'Sven SAULEAU' },
          message: 'fix: ordering and duplicate',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/68e0d4030088b7709198d328aada4ef92f6628f1',
        },
        {
          sha: 'faeeb729b4e8d0ed00536a08e31e66f2723c998b',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Merge pull request #73 from MylesBorins/2018-04-25-notes\n\ndoc: add 2018-04-25 notes',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/faeeb729b4e8d0ed00536a08e31e66f2723c998b',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T20:08:57Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651917240',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'closed',
      number: 73,
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/modules/pulls/73',
        id: 184687801,
        html_url: 'https://github.com/nodejs/modules/pull/73',
        diff_url: 'https://github.com/nodejs/modules/pull/73.diff',
        patch_url: 'https://github.com/nodejs/modules/pull/73.patch',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/73',
        number: 73,
        state: 'closed',
        locked: false,
        title: 'doc: add 2018-04-25 notes',
        user: {
          login: 'MylesBorins',
          id: 498775,
          avatar_url: 'https://avatars1.githubusercontent.com/u/498775?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/MylesBorins',
          html_url: 'https://github.com/MylesBorins',
          followers_url: 'https://api.github.com/users/MylesBorins/followers',
          following_url:
            'https://api.github.com/users/MylesBorins/following{/other_user}',
          gists_url: 'https://api.github.com/users/MylesBorins/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/MylesBorins/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/MylesBorins/subscriptions',
          organizations_url: 'https://api.github.com/users/MylesBorins/orgs',
          repos_url: 'https://api.github.com/users/MylesBorins/repos',
          events_url:
            'https://api.github.com/users/MylesBorins/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/MylesBorins/received_events',
          type: 'User',
          site_admin: false,
        },
        body: 'closes #71 ',
        created_at: '2018-04-27T17:56:25Z',
        updated_at: '2018-05-09T20:08:56Z',
        closed_at: '2018-05-09T20:08:56Z',
        merged_at: '2018-05-09T20:08:56Z',
        merge_commit_sha: 'faeeb729b4e8d0ed00536a08e31e66f2723c998b',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 837602582,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/meeting-notes',
            name: 'meeting-notes',
            color: 'c2e0c6',
            default: false,
          },
          {
            id: 831666985,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/modules-agenda',
            name: 'modules-agenda',
            color: '0e8a16',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/modules/pulls/73/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/modules/pulls/73/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/73/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/modules/statuses/68e0d4030088b7709198d328aada4ef92f6628f1',
        head: {
          label: 'MylesBorins:2018-04-25-notes',
          ref: '2018-04-25-notes',
          sha: '68e0d4030088b7709198d328aada4ef92f6628f1',
          user: {
            login: 'MylesBorins',
            id: 498775,
            avatar_url: 'https://avatars1.githubusercontent.com/u/498775?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/MylesBorins',
            html_url: 'https://github.com/MylesBorins',
            followers_url: 'https://api.github.com/users/MylesBorins/followers',
            following_url:
              'https://api.github.com/users/MylesBorins/following{/other_user}',
            gists_url:
              'https://api.github.com/users/MylesBorins/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/MylesBorins/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/MylesBorins/subscriptions',
            organizations_url: 'https://api.github.com/users/MylesBorins/orgs',
            repos_url: 'https://api.github.com/users/MylesBorins/repos',
            events_url:
              'https://api.github.com/users/MylesBorins/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/MylesBorins/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 120816462,
            name: 'modules',
            full_name: 'MylesBorins/modules',
            owner: {
              login: 'MylesBorins',
              id: 498775,
              avatar_url: 'https://avatars1.githubusercontent.com/u/498775?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/MylesBorins',
              html_url: 'https://github.com/MylesBorins',
              followers_url:
                'https://api.github.com/users/MylesBorins/followers',
              following_url:
                'https://api.github.com/users/MylesBorins/following{/other_user}',
              gists_url:
                'https://api.github.com/users/MylesBorins/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/MylesBorins/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/MylesBorins/subscriptions',
              organizations_url:
                'https://api.github.com/users/MylesBorins/orgs',
              repos_url: 'https://api.github.com/users/MylesBorins/repos',
              events_url:
                'https://api.github.com/users/MylesBorins/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/MylesBorins/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/MylesBorins/modules',
            description: 'Node.js Foundation Modules Team',
            fork: true,
            url: 'https://api.github.com/repos/MylesBorins/modules',
            forks_url: 'https://api.github.com/repos/MylesBorins/modules/forks',
            keys_url:
              'https://api.github.com/repos/MylesBorins/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/MylesBorins/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/MylesBorins/modules/teams',
            hooks_url: 'https://api.github.com/repos/MylesBorins/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/MylesBorins/modules/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/MylesBorins/modules/events',
            assignees_url:
              'https://api.github.com/repos/MylesBorins/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/MylesBorins/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/MylesBorins/modules/tags',
            blobs_url:
              'https://api.github.com/repos/MylesBorins/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/MylesBorins/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/MylesBorins/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/MylesBorins/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/MylesBorins/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/MylesBorins/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/MylesBorins/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/MylesBorins/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/MylesBorins/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/MylesBorins/modules/subscription',
            commits_url:
              'https://api.github.com/repos/MylesBorins/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/MylesBorins/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/MylesBorins/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/MylesBorins/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/MylesBorins/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/MylesBorins/modules/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/MylesBorins/modules/merges',
            archive_url:
              'https://api.github.com/repos/MylesBorins/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/MylesBorins/modules/downloads',
            issues_url:
              'https://api.github.com/repos/MylesBorins/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/MylesBorins/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/MylesBorins/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/MylesBorins/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/MylesBorins/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/MylesBorins/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/MylesBorins/modules/deployments',
            created_at: '2018-02-08T20:51:05Z',
            updated_at: '2018-05-08T20:57:13Z',
            pushed_at: '2018-05-09T19:05:34Z',
            git_url: 'git://github.com/MylesBorins/modules.git',
            ssh_url: 'git@github.com:MylesBorins/modules.git',
            clone_url: 'https://github.com/MylesBorins/modules.git',
            svn_url: 'https://github.com/MylesBorins/modules',
            homepage: null,
            size: 83,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '99ae0e13c0fdb34d5c9e25c06d73a08cde74faef',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 119901830,
            name: 'modules',
            full_name: 'nodejs/modules',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/modules',
            description: 'Node.js Foundation Modules Team',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/modules',
            forks_url: 'https://api.github.com/repos/nodejs/modules/forks',
            keys_url:
              'https://api.github.com/repos/nodejs/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/modules/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/modules/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/modules/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/modules/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/nodejs/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/modules/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/modules/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/modules/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/nodejs/modules/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/modules/deployments',
            created_at: '2018-02-01T22:33:47Z',
            updated_at: '2018-05-09T19:54:21Z',
            pushed_at: '2018-05-09T20:08:56Z',
            git_url: 'git://github.com/nodejs/modules.git',
            ssh_url: 'git@github.com:nodejs/modules.git',
            clone_url: 'https://github.com/nodejs/modules.git',
            svn_url: 'https://github.com/nodejs/modules',
            homepage: null,
            size: 50,
            stargazers_count: 104,
            watchers_count: 104,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 16,
            mirror_url: null,
            archived: false,
            open_issues_count: 14,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 16,
            open_issues: 14,
            watchers: 104,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/modules/pulls/73',
          },
          html: { href: 'https://github.com/nodejs/modules/pull/73' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/modules/issues/73',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/issues/73/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/73/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/73/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/modules/statuses/68e0d4030088b7709198d328aada4ef92f6628f1',
          },
        },
        author_association: 'OWNER',
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        comments: 4,
        review_comments: 4,
        maintainer_can_modify: false,
        commits: 5,
        additions: 104,
        deletions: 0,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-09T20:08:56Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651847178',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      push_id: 2551706567,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/master',
      head: '303a84a9674287614f2ec5a01fb02f987c9f81f0',
      before: 'ec4cb6a20f4f85c314927677b432f6f42e932ab7',
      commits: [
        {
          sha: 'd76e600ff90cbc68a92632bed512602b0248c124',
          author: { email: 'tzmanics@gmail.com', name: 'tzmanics' },
          message: 'Add tzmanics as observer',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/d76e600ff90cbc68a92632bed512602b0248c124',
        },
        {
          sha: '303a84a9674287614f2ec5a01fb02f987c9f81f0',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Merge pull request #76 from tzmanics/add-tzmanics-observer\n\nAdd tzmanics as an observer',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/303a84a9674287614f2ec5a01fb02f987c9f81f0',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T19:54:20Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651847126',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'closed',
      number: 76,
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/modules/pulls/76',
        id: 186106529,
        html_url: 'https://github.com/nodejs/modules/pull/76',
        diff_url: 'https://github.com/nodejs/modules/pull/76.diff',
        patch_url: 'https://github.com/nodejs/modules/pull/76.patch',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/76',
        number: 76,
        state: 'closed',
        locked: false,
        title: 'Add tzmanics as an observer',
        user: {
          login: 'tzmanics',
          id: 3611928,
          avatar_url: 'https://avatars1.githubusercontent.com/u/3611928?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/tzmanics',
          html_url: 'https://github.com/tzmanics',
          followers_url: 'https://api.github.com/users/tzmanics/followers',
          following_url:
            'https://api.github.com/users/tzmanics/following{/other_user}',
          gists_url: 'https://api.github.com/users/tzmanics/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/tzmanics/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/tzmanics/subscriptions',
          organizations_url: 'https://api.github.com/users/tzmanics/orgs',
          repos_url: 'https://api.github.com/users/tzmanics/repos',
          events_url: 'https://api.github.com/users/tzmanics/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/tzmanics/received_events',
          type: 'User',
          site_admin: false,
        },
        body: 'Hoping to help where I can 👍',
        created_at: '2018-05-04T21:19:01Z',
        updated_at: '2018-05-09T19:54:19Z',
        closed_at: '2018-05-09T19:54:19Z',
        merged_at: '2018-05-09T19:54:19Z',
        merge_commit_sha: '303a84a9674287614f2ec5a01fb02f987c9f81f0',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 831666985,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/modules-agenda',
            name: 'modules-agenda',
            color: '0e8a16',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/modules/pulls/76/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/modules/pulls/76/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/76/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/modules/statuses/d76e600ff90cbc68a92632bed512602b0248c124',
        head: {
          label: 'tzmanics:add-tzmanics-observer',
          ref: 'add-tzmanics-observer',
          sha: 'd76e600ff90cbc68a92632bed512602b0248c124',
          user: {
            login: 'tzmanics',
            id: 3611928,
            avatar_url: 'https://avatars1.githubusercontent.com/u/3611928?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/tzmanics',
            html_url: 'https://github.com/tzmanics',
            followers_url: 'https://api.github.com/users/tzmanics/followers',
            following_url:
              'https://api.github.com/users/tzmanics/following{/other_user}',
            gists_url: 'https://api.github.com/users/tzmanics/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/tzmanics/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/tzmanics/subscriptions',
            organizations_url: 'https://api.github.com/users/tzmanics/orgs',
            repos_url: 'https://api.github.com/users/tzmanics/repos',
            events_url:
              'https://api.github.com/users/tzmanics/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/tzmanics/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 132030803,
            name: 'modules',
            full_name: 'tzmanics/modules',
            owner: {
              login: 'tzmanics',
              id: 3611928,
              avatar_url:
                'https://avatars1.githubusercontent.com/u/3611928?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/tzmanics',
              html_url: 'https://github.com/tzmanics',
              followers_url: 'https://api.github.com/users/tzmanics/followers',
              following_url:
                'https://api.github.com/users/tzmanics/following{/other_user}',
              gists_url:
                'https://api.github.com/users/tzmanics/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/tzmanics/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/tzmanics/subscriptions',
              organizations_url: 'https://api.github.com/users/tzmanics/orgs',
              repos_url: 'https://api.github.com/users/tzmanics/repos',
              events_url:
                'https://api.github.com/users/tzmanics/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/tzmanics/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/tzmanics/modules',
            description: 'Node.js Foundation Modules Team',
            fork: true,
            url: 'https://api.github.com/repos/tzmanics/modules',
            forks_url: 'https://api.github.com/repos/tzmanics/modules/forks',
            keys_url:
              'https://api.github.com/repos/tzmanics/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/tzmanics/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/tzmanics/modules/teams',
            hooks_url: 'https://api.github.com/repos/tzmanics/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/tzmanics/modules/issues/events{/number}',
            events_url: 'https://api.github.com/repos/tzmanics/modules/events',
            assignees_url:
              'https://api.github.com/repos/tzmanics/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/tzmanics/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/tzmanics/modules/tags',
            blobs_url:
              'https://api.github.com/repos/tzmanics/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/tzmanics/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/tzmanics/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/tzmanics/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/tzmanics/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/tzmanics/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/tzmanics/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/tzmanics/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/tzmanics/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/tzmanics/modules/subscription',
            commits_url:
              'https://api.github.com/repos/tzmanics/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/tzmanics/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/tzmanics/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/tzmanics/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/tzmanics/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/tzmanics/modules/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/tzmanics/modules/merges',
            archive_url:
              'https://api.github.com/repos/tzmanics/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/tzmanics/modules/downloads',
            issues_url:
              'https://api.github.com/repos/tzmanics/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/tzmanics/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/tzmanics/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/tzmanics/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/tzmanics/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/tzmanics/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/tzmanics/modules/deployments',
            created_at: '2018-05-03T17:51:47Z',
            updated_at: '2018-05-03T17:51:48Z',
            pushed_at: '2018-05-04T21:09:48Z',
            git_url: 'git://github.com/tzmanics/modules.git',
            ssh_url: 'git@github.com:tzmanics/modules.git',
            clone_url: 'https://github.com/tzmanics/modules.git',
            svn_url: 'https://github.com/tzmanics/modules',
            homepage: null,
            size: 50,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '99ae0e13c0fdb34d5c9e25c06d73a08cde74faef',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 119901830,
            name: 'modules',
            full_name: 'nodejs/modules',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/modules',
            description: 'Node.js Foundation Modules Team',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/modules',
            forks_url: 'https://api.github.com/repos/nodejs/modules/forks',
            keys_url:
              'https://api.github.com/repos/nodejs/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/modules/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/modules/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/modules/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/modules/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/nodejs/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/modules/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/modules/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/modules/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/nodejs/modules/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/modules/deployments',
            created_at: '2018-02-01T22:33:47Z',
            updated_at: '2018-05-09T19:52:40Z',
            pushed_at: '2018-05-09T19:54:19Z',
            git_url: 'git://github.com/nodejs/modules.git',
            ssh_url: 'git@github.com:nodejs/modules.git',
            clone_url: 'https://github.com/nodejs/modules.git',
            svn_url: 'https://github.com/nodejs/modules',
            homepage: null,
            size: 50,
            stargazers_count: 104,
            watchers_count: 104,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 16,
            mirror_url: null,
            archived: false,
            open_issues_count: 15,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 16,
            open_issues: 15,
            watchers: 104,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/modules/pulls/76',
          },
          html: { href: 'https://github.com/nodejs/modules/pull/76' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/modules/issues/76',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/issues/76/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/76/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/76/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/modules/statuses/d76e600ff90cbc68a92632bed512602b0248c124',
          },
        },
        author_association: 'NONE',
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        comments: 2,
        review_comments: 0,
        maintainer_can_modify: false,
        commits: 1,
        additions: 1,
        deletions: 0,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-09T19:54:20Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651839415',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      push_id: 2551702341,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: 'ec4cb6a20f4f85c314927677b432f6f42e932ab7',
      before: 'ccd8def39aac2e3c2e643bd57e9888e9f9c795cc',
      commits: [
        {
          sha: '64295e51d84883540154481405d7daf9f371e7d4',
          author: {
            email: 'fishrock123@rocketmail.com',
            name: 'Jeremiah Senkpiel',
          },
          message:
            'governance: introduce PR exemptions for minutes\n\nThis changes the special PR merging exemption for Errata and Editorial\nchanges to be a general "Special Exemptions to the PR landing process",\nwhich has been updated to include meeting minutes.\n\nThis is done so as to not consume time in meetings approving minutes.\n\nPR-URL: https://github.com/nodejs/modules/pull/72',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/64295e51d84883540154481405d7daf9f371e7d4',
        },
        {
          sha: '2e250001a4e729724fa8a9760bdad6a48ccc559a',
          author: {
            email: 'fishrock123@rocketmail.com',
            name: 'Jeremiah Senkpiel',
          },
          message:
            'governance: add a PR exemption for ncu-sync\n\nAdd updating the team lists in the readme via ncu-sync to the list of\nspecial exemptions for landing PRs.\n\nPR-URL: https://github.com/nodejs/modules/pull/72',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/2e250001a4e729724fa8a9760bdad6a48ccc559a',
        },
        {
          sha: 'ec4cb6a20f4f85c314927677b432f6f42e932ab7',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Merge pull request #72 from Fishrock123/pr-special-exeptions\n\ngovernance: introduce PR exemptions for minutes',
          distinct: true,
          url:
            'https://api.github.com/repos/nodejs/modules/commits/ec4cb6a20f4f85c314927677b432f6f42e932ab7',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T19:52:39Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651839340',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 119901830,
      name: 'nodejs/modules',
      url: 'https://api.github.com/repos/nodejs/modules',
    },
    payload: {
      action: 'closed',
      number: 72,
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/modules/pulls/72',
        id: 184137727,
        html_url: 'https://github.com/nodejs/modules/pull/72',
        diff_url: 'https://github.com/nodejs/modules/pull/72.diff',
        patch_url: 'https://github.com/nodejs/modules/pull/72.patch',
        issue_url: 'https://api.github.com/repos/nodejs/modules/issues/72',
        number: 72,
        state: 'closed',
        locked: false,
        title: 'governance: introduce PR exemptions for minutes',
        user: {
          login: 'Fishrock123',
          id: 1093990,
          avatar_url: 'https://avatars0.githubusercontent.com/u/1093990?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/Fishrock123',
          html_url: 'https://github.com/Fishrock123',
          followers_url: 'https://api.github.com/users/Fishrock123/followers',
          following_url:
            'https://api.github.com/users/Fishrock123/following{/other_user}',
          gists_url: 'https://api.github.com/users/Fishrock123/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/Fishrock123/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/Fishrock123/subscriptions',
          organizations_url: 'https://api.github.com/users/Fishrock123/orgs',
          repos_url: 'https://api.github.com/users/Fishrock123/repos',
          events_url:
            'https://api.github.com/users/Fishrock123/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/Fishrock123/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          'This changes the special PR merging exemption for Errata and Editorial changes to be a general "Special Exemptions to the PR landing process", which has been updated to include meeting minutes & team updates via `ncu-sync`.\r\n\r\nThis is done so as to not consume time in meetings approving minutes.\r\n\r\nThis _could_ be left for the next meeting. (PR Made during the meeting of April the 25th.)',
        created_at: '2018-04-25T19:21:55Z',
        updated_at: '2018-05-09T19:52:38Z',
        closed_at: '2018-05-09T19:52:38Z',
        merged_at: '2018-05-09T19:52:38Z',
        merge_commit_sha: 'ec4cb6a20f4f85c314927677b432f6f42e932ab7',
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [
          {
            id: 831668223,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/governance',
            name: 'governance',
            color: 'fef2c0',
            default: false,
          },
          {
            id: 831666985,
            url:
              'https://api.github.com/repos/nodejs/modules/labels/modules-agenda',
            name: 'modules-agenda',
            color: '0e8a16',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/modules/pulls/72/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/modules/pulls/72/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/modules/issues/72/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/modules/statuses/2e250001a4e729724fa8a9760bdad6a48ccc559a',
        head: {
          label: 'Fishrock123:pr-special-exeptions',
          ref: 'pr-special-exeptions',
          sha: '2e250001a4e729724fa8a9760bdad6a48ccc559a',
          user: {
            login: 'Fishrock123',
            id: 1093990,
            avatar_url: 'https://avatars0.githubusercontent.com/u/1093990?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/Fishrock123',
            html_url: 'https://github.com/Fishrock123',
            followers_url: 'https://api.github.com/users/Fishrock123/followers',
            following_url:
              'https://api.github.com/users/Fishrock123/following{/other_user}',
            gists_url:
              'https://api.github.com/users/Fishrock123/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/Fishrock123/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/Fishrock123/subscriptions',
            organizations_url: 'https://api.github.com/users/Fishrock123/orgs',
            repos_url: 'https://api.github.com/users/Fishrock123/repos',
            events_url:
              'https://api.github.com/users/Fishrock123/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/Fishrock123/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 131052049,
            name: 'modules',
            full_name: 'Fishrock123/modules',
            owner: {
              login: 'Fishrock123',
              id: 1093990,
              avatar_url:
                'https://avatars0.githubusercontent.com/u/1093990?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/Fishrock123',
              html_url: 'https://github.com/Fishrock123',
              followers_url:
                'https://api.github.com/users/Fishrock123/followers',
              following_url:
                'https://api.github.com/users/Fishrock123/following{/other_user}',
              gists_url:
                'https://api.github.com/users/Fishrock123/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/Fishrock123/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/Fishrock123/subscriptions',
              organizations_url:
                'https://api.github.com/users/Fishrock123/orgs',
              repos_url: 'https://api.github.com/users/Fishrock123/repos',
              events_url:
                'https://api.github.com/users/Fishrock123/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/Fishrock123/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/Fishrock123/modules',
            description: 'Node.js Foundation Modules Team',
            fork: true,
            url: 'https://api.github.com/repos/Fishrock123/modules',
            forks_url: 'https://api.github.com/repos/Fishrock123/modules/forks',
            keys_url:
              'https://api.github.com/repos/Fishrock123/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/Fishrock123/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/Fishrock123/modules/teams',
            hooks_url: 'https://api.github.com/repos/Fishrock123/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/Fishrock123/modules/issues/events{/number}',
            events_url:
              'https://api.github.com/repos/Fishrock123/modules/events',
            assignees_url:
              'https://api.github.com/repos/Fishrock123/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/Fishrock123/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/Fishrock123/modules/tags',
            blobs_url:
              'https://api.github.com/repos/Fishrock123/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/Fishrock123/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/Fishrock123/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/Fishrock123/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/Fishrock123/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/Fishrock123/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/Fishrock123/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/Fishrock123/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/Fishrock123/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/Fishrock123/modules/subscription',
            commits_url:
              'https://api.github.com/repos/Fishrock123/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/Fishrock123/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/Fishrock123/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/Fishrock123/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/Fishrock123/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/Fishrock123/modules/compare/{base}...{head}',
            merges_url:
              'https://api.github.com/repos/Fishrock123/modules/merges',
            archive_url:
              'https://api.github.com/repos/Fishrock123/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/Fishrock123/modules/downloads',
            issues_url:
              'https://api.github.com/repos/Fishrock123/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/Fishrock123/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/Fishrock123/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/Fishrock123/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/Fishrock123/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/Fishrock123/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/Fishrock123/modules/deployments',
            created_at: '2018-04-25T19:09:08Z',
            updated_at: '2018-04-25T19:09:10Z',
            pushed_at: '2018-04-25T21:13:39Z',
            git_url: 'git://github.com/Fishrock123/modules.git',
            ssh_url: 'git@github.com:Fishrock123/modules.git',
            clone_url: 'https://github.com/Fishrock123/modules.git',
            svn_url: 'https://github.com/Fishrock123/modules',
            homepage: null,
            size: 51,
            stargazers_count: 0,
            watchers_count: 0,
            language: null,
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '99ae0e13c0fdb34d5c9e25c06d73a08cde74faef',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 119901830,
            name: 'modules',
            full_name: 'nodejs/modules',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/modules',
            description: 'Node.js Foundation Modules Team',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/modules',
            forks_url: 'https://api.github.com/repos/nodejs/modules/forks',
            keys_url:
              'https://api.github.com/repos/nodejs/modules/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/modules/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/modules/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/modules/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/modules/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/modules/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/modules/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/modules/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/modules/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/modules/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/modules/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/modules/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/modules/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/modules/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/nodejs/modules/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/modules/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/modules/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/modules/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/modules/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/modules/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/modules/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/modules/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/modules/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/modules/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/modules/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/modules/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/modules/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/nodejs/modules/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/modules/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/modules/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/modules/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/modules/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/modules/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/modules/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/modules/deployments',
            created_at: '2018-02-01T22:33:47Z',
            updated_at: '2018-05-08T20:57:29Z',
            pushed_at: '2018-05-09T19:52:38Z',
            git_url: 'git://github.com/nodejs/modules.git',
            ssh_url: 'git@github.com:nodejs/modules.git',
            clone_url: 'https://github.com/nodejs/modules.git',
            svn_url: 'https://github.com/nodejs/modules',
            homepage: null,
            size: 50,
            stargazers_count: 104,
            watchers_count: 104,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 16,
            mirror_url: null,
            archived: false,
            open_issues_count: 16,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 16,
            open_issues: 16,
            watchers: 104,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/modules/pulls/72',
          },
          html: { href: 'https://github.com/nodejs/modules/pull/72' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/modules/issues/72',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/issues/72/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/72/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/modules/pulls/72/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/modules/statuses/2e250001a4e729724fa8a9760bdad6a48ccc559a',
          },
        },
        author_association: 'OWNER',
        merged: true,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        comments: 4,
        review_comments: 4,
        maintainer_can_modify: false,
        commits: 2,
        additions: 22,
        deletions: 15,
        changed_files: 1,
      },
    },
    public: true,
    created_at: '2018-05-09T19:52:38Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651255418',
    type: 'WatchEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 22020904,
      name: 'sindresorhus/import-fresh',
      url: 'https://api.github.com/repos/sindresorhus/import-fresh',
    },
    payload: { action: 'started' },
    public: true,
    created_at: '2018-05-09T17:52:31Z',
  },
  {
    id: '7651103711',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20578/events',
        html_url: 'https://github.com/nodejs/node/issues/20578',
        id: 320870263,
        number: 20578,
        title:
          "await import() doesn't work in REPL even with --experimental-repl-await",
        user: {
          login: 'fatcerberus',
          id: 4097841,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4097841?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/fatcerberus',
          html_url: 'https://github.com/fatcerberus',
          followers_url: 'https://api.github.com/users/fatcerberus/followers',
          following_url:
            'https://api.github.com/users/fatcerberus/following{/other_user}',
          gists_url: 'https://api.github.com/users/fatcerberus/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/fatcerberus/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/fatcerberus/subscriptions',
          organizations_url: 'https://api.github.com/users/fatcerberus/orgs',
          repos_url: 'https://api.github.com/users/fatcerberus/repos',
          events_url:
            'https://api.github.com/users/fatcerberus/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/fatcerberus/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 647282848,
            url: 'https://api.github.com/repos/nodejs/node/labels/experimental',
            name: 'experimental',
            color: 'c5def5',
            default: false,
          },
        ],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 2,
        created_at: '2018-05-07T16:31:08Z',
        updated_at: '2018-05-09T17:21:45Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          '* **Version**: v10.0.0\r\n* **Platform**: Windows 10 Pro 18.03 x64\r\n* **Subsystem**: REPL\r\n\r\n<!-- Enter your issue details below this comment. -->\r\n`await import()` doesn\'t work in the REPL even with `--experimental-repl-await`:\r\n```\r\nC:\\Users\\fatce>node --experimental-modules --experimental-repl-await\r\n> (node:4220) ExperimentalWarning: The ESM module loader is experimental.\r\n> await Promise.resolve(812)\r\n812\r\n> await import("module.mjs")\r\nawait import("module.mjs")\r\n^^^^^\r\n\r\nSyntaxError: await is only valid in async function\r\n\r\n```\r\n\r\nI can verify that dynamic import by itself works in the REPL, it\'s only the `await` that\'s an issue:\r\n```\r\n> import("module.mjs")\r\nPromise {\r\n  <pending>,\r\n  domain:\r\n   Domain {\r\n     domain: null,\r\n     _events:\r\n      { removeListener: [Function: updateExceptionCapture],\r\n        newListener: [Function: updateExceptionCapture],\r\n        error: [Function: debugDomainError] },\r\n     _eventsCount: 3,\r\n     _maxListeners: undefined,\r\n     members: [] } }\r\n> (node:4220) UnhandledPromiseRejectionWarning: TypeError [ERR_INVALID_URL]: Invalid URL: repl\r\n    at onParseError (internal/url.js:234:17)\r\n    at parse (internal/url.js:243:3)\r\n    at new URL (internal/url.js:318:5)\r\n    at normalizeReferrerURL (internal/process/esm_loader.js:22:10)\r\n    at setImportModuleDynamicallyCallback (internal/process/esm_loader.js:66:37)\r\n    at process._tickCallback (internal/process/next_tick.js:178:7)\r\n(node:4220) UnhandledPromiseRejectionWarning: Unhandled promise rejection. This error originated either by throwing inside of an async function without a catch block, or by rejecting a promise which was not handled with .catch(). (rejection id: 1)\r\n(node:4220) [DEP0018] DeprecationWarning: Unhandled promise rejections are deprecated. In the future, promise rejections that are not handled will terminate the Node.js process with a non-zero exit code.\r\n\\>\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387812481',
        html_url:
          'https://github.com/nodejs/node/issues/20578#issuecomment-387812481',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20578',
        id: 387812481,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T17:21:45Z',
        updated_at: '2018-05-09T17:21:45Z',
        author_association: 'MEMBER',
        body:
          'As you all iterate on it from the parse side I have a pretty good handle on acorn and the ins-and-outs of making it to work _(up to the latest `--harmony` syntax supported in Node 10)_.\r\n\r\nFeel free to cc me in to update/tweak/improve bits around it.\r\n\r\n><img src="https://user-images.githubusercontent.com/4303/39829188-73ac001c-5372-11e8-9620-ff74d03f1132.gif" width="80%">\r\n',
      },
    },
    public: true,
    created_at: '2018-05-09T17:21:45Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7651077269',
    type: 'DeleteEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131568342,
      name: 'jdalton/node',
      url: 'https://api.github.com/repos/jdalton/node',
    },
    payload: { ref: 'tweaks', ref_type: 'branch', pusher_type: 'user' },
    public: true,
    created_at: '2018-05-09T17:16:17Z',
  },
  {
    id: '7651018145',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131568342,
      name: 'jdalton/node',
      url: 'https://api.github.com/repos/jdalton/node',
    },
    payload: {
      push_id: 2551275082,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/tweaks',
      head: '99234088d29f02d6f833fb05ba721d47eee54c41',
      before: 'eb0df34070dca174e97dd4849dccb540e02ef2d0',
      commits: [
        {
          sha: '99234088d29f02d6f833fb05ba721d47eee54c41',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove try-caches from live binding tests.',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/99234088d29f02d6f833fb05ba721d47eee54c41',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T17:04:03Z',
  },
  {
    id: '7650938789',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/standard-things/esm/issues/390',
        repository_url: 'https://api.github.com/repos/standard-things/esm',
        labels_url:
          'https://api.github.com/repos/standard-things/esm/issues/390/labels{/name}',
        comments_url:
          'https://api.github.com/repos/standard-things/esm/issues/390/comments',
        events_url:
          'https://api.github.com/repos/standard-things/esm/issues/390/events',
        html_url: 'https://github.com/standard-things/esm/issues/390',
        id: 321287789,
        number: 390,
        title: 'Unable to unmock nested import of builtin module',
        user: {
          login: 'deepsweet',
          id: 266822,
          avatar_url: 'https://avatars3.githubusercontent.com/u/266822?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/deepsweet',
          html_url: 'https://github.com/deepsweet',
          followers_url: 'https://api.github.com/users/deepsweet/followers',
          following_url:
            'https://api.github.com/users/deepsweet/following{/other_user}',
          gists_url: 'https://api.github.com/users/deepsweet/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/deepsweet/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/deepsweet/subscriptions',
          organizations_url: 'https://api.github.com/users/deepsweet/orgs',
          repos_url: 'https://api.github.com/users/deepsweet/repos',
          events_url: 'https://api.github.com/users/deepsweet/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/deepsweet/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 613130609,
            url:
              'https://api.github.com/repos/standard-things/esm/labels/invalid',
            name: 'invalid',
            color: 'e6e6e6',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 6,
        created_at: '2018-05-08T18:02:05Z',
        updated_at: '2018-05-09T16:48:17Z',
        closed_at: '2018-05-08T18:46:44Z',
        author_association: 'NONE',
        body:
          '[repro repo](https://github.com/deepsweet/esm-issue) ©\r\n\r\n```sh\r\n$ node -r esm index.js\r\n```',
      },
      comment: {
        url:
          'https://api.github.com/repos/standard-things/esm/issues/comments/387802965',
        html_url:
          'https://github.com/standard-things/esm/issues/390#issuecomment-387802965',
        issue_url:
          'https://api.github.com/repos/standard-things/esm/issues/390',
        id: 387802965,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T16:48:17Z',
        updated_at: '2018-05-09T16:48:17Z',
        author_association: 'OWNER',
        body: 'Awesome @deepsweet!',
      },
    },
    public: true,
    created_at: '2018-05-09T16:48:17Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7650909502',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131568342,
      name: 'jdalton/node',
      url: 'https://api.github.com/repos/jdalton/node',
    },
    payload: {
      push_id: 2551218422,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/tweaks',
      head: 'eb0df34070dca174e97dd4849dccb540e02ef2d0',
      before: '445b31429204ee345158f434840ae3e9060b16ce',
      commits: [
        {
          sha: 'eb0df34070dca174e97dd4849dccb540e02ef2d0',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove try-caches from live binding tests.',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/eb0df34070dca174e97dd4849dccb540e02ef2d0',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T16:42:32Z',
  },
  {
    id: '7650906439',
    type: 'PullRequestEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 86208251,
      name: 'devsnek/node',
      url: 'https://api.github.com/repos/devsnek/node',
    },
    payload: {
      action: 'opened',
      number: 4,
      pull_request: {
        url: 'https://api.github.com/repos/devsnek/node/pulls/4',
        id: 186977825,
        html_url: 'https://github.com/devsnek/node/pull/4',
        diff_url: 'https://github.com/devsnek/node/pull/4.diff',
        patch_url: 'https://github.com/devsnek/node/pull/4.patch',
        issue_url: 'https://api.github.com/repos/devsnek/node/issues/4',
        number: 4,
        state: 'open',
        locked: false,
        title: 'Update for code review',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body: '',
        created_at: '2018-05-09T16:41:54Z',
        updated_at: '2018-05-09T16:41:54Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: null,
        assignee: null,
        assignees: [],
        requested_reviewers: [],
        requested_teams: [],
        labels: [],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/devsnek/node/pulls/4/commits',
        review_comments_url:
          'https://api.github.com/repos/devsnek/node/pulls/4/comments',
        review_comment_url:
          'https://api.github.com/repos/devsnek/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/devsnek/node/issues/4/comments',
        statuses_url:
          'https://api.github.com/repos/devsnek/node/statuses/445b31429204ee345158f434840ae3e9060b16ce',
        head: {
          label: 'jdalton:tweaks',
          ref: 'tweaks',
          sha: '445b31429204ee345158f434840ae3e9060b16ce',
          user: {
            login: 'jdalton',
            id: 4303,
            avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jdalton',
            html_url: 'https://github.com/jdalton',
            followers_url: 'https://api.github.com/users/jdalton/followers',
            following_url:
              'https://api.github.com/users/jdalton/following{/other_user}',
            gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jdalton/subscriptions',
            organizations_url: 'https://api.github.com/users/jdalton/orgs',
            repos_url: 'https://api.github.com/users/jdalton/repos',
            events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jdalton/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 131568342,
            name: 'node',
            full_name: 'jdalton/node',
            owner: {
              login: 'jdalton',
              id: 4303,
              avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/jdalton',
              html_url: 'https://github.com/jdalton',
              followers_url: 'https://api.github.com/users/jdalton/followers',
              following_url:
                'https://api.github.com/users/jdalton/following{/other_user}',
              gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/jdalton/subscriptions',
              organizations_url: 'https://api.github.com/users/jdalton/orgs',
              repos_url: 'https://api.github.com/users/jdalton/repos',
              events_url:
                'https://api.github.com/users/jdalton/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/jdalton/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/jdalton/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/jdalton/node',
            forks_url: 'https://api.github.com/repos/jdalton/node/forks',
            keys_url: 'https://api.github.com/repos/jdalton/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/jdalton/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/jdalton/node/teams',
            hooks_url: 'https://api.github.com/repos/jdalton/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/jdalton/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/jdalton/node/events',
            assignees_url:
              'https://api.github.com/repos/jdalton/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/jdalton/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/jdalton/node/tags',
            blobs_url:
              'https://api.github.com/repos/jdalton/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/jdalton/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/jdalton/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/jdalton/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/jdalton/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/jdalton/node/languages',
            stargazers_url:
              'https://api.github.com/repos/jdalton/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/jdalton/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/jdalton/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/jdalton/node/subscription',
            commits_url:
              'https://api.github.com/repos/jdalton/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/jdalton/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/jdalton/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/jdalton/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/jdalton/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/jdalton/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/jdalton/node/merges',
            archive_url:
              'https://api.github.com/repos/jdalton/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/jdalton/node/downloads',
            issues_url:
              'https://api.github.com/repos/jdalton/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/jdalton/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/jdalton/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/jdalton/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/jdalton/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/jdalton/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/jdalton/node/deployments',
            created_at: '2018-04-30T07:40:01Z',
            updated_at: '2018-04-30T07:40:20Z',
            pushed_at: '2018-05-09T16:40:44Z',
            git_url: 'git://github.com/jdalton/node.git',
            ssh_url: 'git@github.com:jdalton/node.git',
            clone_url: 'https://github.com/jdalton/node.git',
            svn_url: 'https://github.com/jdalton/node',
            homepage: 'https://nodejs.org',
            size: 324874,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 0,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 0,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-09T15:22:28Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 324869,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 1,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 1,
            watchers: 0,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/devsnek/node/pulls/4',
          },
          html: { href: 'https://github.com/devsnek/node/pull/4' },
          issue: {
            href: 'https://api.github.com/repos/devsnek/node/issues/4',
          },
          comments: {
            href: 'https://api.github.com/repos/devsnek/node/issues/4/comments',
          },
          review_comments: {
            href: 'https://api.github.com/repos/devsnek/node/pulls/4/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/devsnek/node/pulls/comments{/number}',
          },
          commits: {
            href: 'https://api.github.com/repos/devsnek/node/pulls/4/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/devsnek/node/statuses/445b31429204ee345158f434840ae3e9060b16ce',
          },
        },
        author_association: 'NONE',
        merged: false,
        mergeable: null,
        rebaseable: null,
        mergeable_state: 'unknown',
        merged_by: null,
        comments: 0,
        review_comments: 0,
        maintainer_can_modify: true,
        commits: 2,
        additions: 11,
        deletions: 29,
        changed_files: 2,
      },
    },
    public: true,
    created_at: '2018-05-09T16:41:55Z',
  },
  {
    id: '7650900696',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131568342,
      name: 'jdalton/node',
      url: 'https://api.github.com/repos/jdalton/node',
    },
    payload: {
      push_id: 2551213726,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/tweaks',
      head: '445b31429204ee345158f434840ae3e9060b16ce',
      before: 'ce60134b864fb3d5d48f85d6370db0dbd6e1229d',
      commits: [
        {
          sha: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Tweaks (#3)\n\n* Use getOwn helper to dry out checks.\r\n\r\n* Remove get/getOwnPropertyDescriptor traps for exports proxy.\r\n\r\n* Write live binding tests to ensure augmented environments are restored.',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/ace2aec768e892ac161641cf5945ffe67e4a3e57',
        },
        {
          sha: 'd539fff1d2d9f7eb259078ca7563b580cf6547d0',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Use ReflectApply.',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/d539fff1d2d9f7eb259078ca7563b580cf6547d0',
        },
        {
          sha: '445b31429204ee345158f434840ae3e9060b16ce',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove try-caches from live binding tests.',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/445b31429204ee345158f434840ae3e9060b16ce',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T16:40:46Z',
  },
  {
    id: '7650891231',
    type: 'PullRequestReviewCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/pulls/comments/187101562',
        pull_request_review_id: 118813969,
        id: 187101562,
        diff_hunk:
          "@@ -0,0 +1,142 @@\n+// Flags: --experimental-modules\n+\n+import '../common';\n+import assert from 'assert';\n+\n+import fs, { readFile } from 'fs';\n+import events from 'events';\n+import util from 'util';\n+\n+let error;\n+let threw = false;\n+\n+const fsDescriptor = Reflect.getOwnPropertyDescriptor(fs, 'readFile');\n+\n+try {\n+  const s = Symbol();\n+  const fn = () => s;\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+\n+  assert.strictEqual(fs.readFile, undefined);\n+  assert.strictEqual(readFile, undefined);\n+\n+  fs.readFile = fn;\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+  Reflect.defineProperty(fs, 'readFile', {\n+    value: fn,\n+    configurable: true,\n+    writable: true,\n+  });\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+\n+  assert.strictEqual(fs.readFile, undefined);\n+  assert.strictEqual(readFile, undefined);\n+\n+  Reflect.defineProperty(fs, 'readFile', {\n+    get() { return fn; },\n+    set() {},\n+    configurable: true,\n+  });\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+} catch (e) {\n+  threw = true;\n+  error = e;\n+}\n+\n+Reflect.defineProperty(fs, 'readFile', fsDescriptor);\n+\n+if (threw) {\n+  throw error;\n+}",
        path: 'test/es-module/test-esm-live-binding.mjs',
        position: 61,
        original_position: 61,
        commit_id: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
        original_commit_id: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body: 'Nice!',
        created_at: '2018-05-09T16:38:47Z',
        updated_at: '2018-05-09T16:38:47Z',
        html_url:
          'https://github.com/nodejs/node/pull/20403#discussion_r187101562',
        pull_request_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403',
        author_association: 'MEMBER',
        _links: {
          self: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments/187101562',
          },
          html: {
            href:
              'https://github.com/nodejs/node/pull/20403#discussion_r187101562',
          },
          pull_request: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
        },
        in_reply_to_id: 187097455,
      },
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
        id: 184835314,
        html_url: 'https://github.com/nodejs/node/pull/20403',
        diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
        patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        number: 20403,
        state: 'open',
        locked: false,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-09T16:38:47Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: '0a34cf99cba73272152a628967cabff91453d45d',
        assignee: null,
        assignees: [],
        requested_reviewers: [
          {
            login: 'jkrems',
            id: 567540,
            avatar_url: 'https://avatars1.githubusercontent.com/u/567540?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jkrems',
            html_url: 'https://github.com/jkrems',
            followers_url: 'https://api.github.com/users/jkrems/followers',
            following_url:
              'https://api.github.com/users/jkrems/following{/other_user}',
            gists_url: 'https://api.github.com/users/jkrems/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jkrems/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jkrems/subscriptions',
            organizations_url: 'https://api.github.com/users/jkrems/orgs',
            repos_url: 'https://api.github.com/users/jkrems/repos',
            events_url: 'https://api.github.com/users/jkrems/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jkrems/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        requested_teams: [],
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/node/statuses/ace2aec768e892ac161641cf5945ffe67e4a3e57',
        head: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-09T15:22:28Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 324869,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '5db018d1d05de039e00127a3a8adc0c3eed32e97',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 27193779,
            name: 'node',
            full_name: 'nodejs/node',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/node',
            forks_url: 'https://api.github.com/repos/nodejs/node/forks',
            keys_url: 'https://api.github.com/repos/nodejs/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/node/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/node/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/node/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/node/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/nodejs/node/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/node/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/node/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/node/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/nodejs/node/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/node/deployments',
            created_at: '2014-11-26T19:57:11Z',
            updated_at: '2018-05-09T16:35:53Z',
            pushed_at: '2018-05-09T16:38:30Z',
            git_url: 'git://github.com/nodejs/node.git',
            ssh_url: 'git@github.com:nodejs/node.git',
            clone_url: 'https://github.com/nodejs/node.git',
            svn_url: 'https://github.com/nodejs/node',
            homepage: 'https://nodejs.org',
            size: 374686,
            stargazers_count: 48586,
            watchers_count: 48586,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 10246,
            mirror_url: null,
            archived: false,
            open_issues_count: 768,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 10246,
            open_issues: 768,
            watchers: 48586,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
          html: { href: 'https://github.com/nodejs/node/pull/20403' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/node/issues/20403',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/node/issues/20403/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/node/statuses/ace2aec768e892ac161641cf5945ffe67e4a3e57',
          },
        },
        author_association: 'MEMBER',
      },
    },
    public: true,
    created_at: '2018-05-09T16:38:47Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7650846655',
    type: 'PullRequestReviewCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/pulls/comments/187099249',
        pull_request_review_id: 118811177,
        id: 187099249,
        diff_hunk:
          "@@ -0,0 +1,142 @@\n+// Flags: --experimental-modules\n+\n+import '../common';\n+import assert from 'assert';\n+\n+import fs, { readFile } from 'fs';\n+import events from 'events';\n+import util from 'util';\n+\n+let error;\n+let threw = false;\n+\n+const fsDescriptor = Reflect.getOwnPropertyDescriptor(fs, 'readFile');\n+\n+try {\n+  const s = Symbol();\n+  const fn = () => s;\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+\n+  assert.strictEqual(fs.readFile, undefined);\n+  assert.strictEqual(readFile, undefined);\n+\n+  fs.readFile = fn;\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+  Reflect.defineProperty(fs, 'readFile', {\n+    value: fn,\n+    configurable: true,\n+    writable: true,\n+  });\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+\n+  Reflect.deleteProperty(fs, 'readFile');\n+\n+  assert.strictEqual(fs.readFile, undefined);\n+  assert.strictEqual(readFile, undefined);\n+\n+  Reflect.defineProperty(fs, 'readFile', {\n+    get() { return fn; },\n+    set() {},\n+    configurable: true,\n+  });\n+\n+  assert.strictEqual(fs.readFile(), s);\n+  assert.strictEqual(readFile(), s);\n+} catch (e) {\n+  threw = true;\n+  error = e;\n+}\n+\n+Reflect.defineProperty(fs, 'readFile', fsDescriptor);\n+\n+if (threw) {\n+  throw error;\n+}",
        path: 'test/es-module/test-esm-live-binding.mjs',
        position: 61,
        original_position: 61,
        commit_id: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
        original_commit_id: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "I wasn't sure how the runner operates. If it loads tests and runs them in sequence in a shared process then even if there are failed tests augmented environments could effect other tests if not properly reset/cleaned.",
        created_at: '2018-05-09T16:29:55Z',
        updated_at: '2018-05-09T16:29:56Z',
        html_url:
          'https://github.com/nodejs/node/pull/20403#discussion_r187099249',
        pull_request_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403',
        author_association: 'MEMBER',
        _links: {
          self: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments/187099249',
          },
          html: {
            href:
              'https://github.com/nodejs/node/pull/20403#discussion_r187099249',
          },
          pull_request: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
        },
        in_reply_to_id: 187097455,
      },
      pull_request: {
        url: 'https://api.github.com/repos/nodejs/node/pulls/20403',
        id: 184835314,
        html_url: 'https://github.com/nodejs/node/pull/20403',
        diff_url: 'https://github.com/nodejs/node/pull/20403.diff',
        patch_url: 'https://github.com/nodejs/node/pull/20403.patch',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20403',
        number: 20403,
        state: 'open',
        locked: false,
        title: 'esm: provide named exports for builtin libs',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        body:
          "provide named exports for all builtin libraries so that the libraries may be\r\nimported in a nicer way for esm users: `import { readFile } from 'fs'`\r\ninstead of importing the entire namespace, `import fs from 'fs'`, and\r\ncalling `fs.readFile`. the default export is left as the entire\r\nnamespace (module.exports)\r\n\r\ncontinuation of #18131 because it got too long and github was giving unicorns\r\n\r\n##### Checklist\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n",
        created_at: '2018-04-29T13:43:41Z',
        updated_at: '2018-05-09T16:29:56Z',
        closed_at: null,
        merged_at: null,
        merge_commit_sha: '0a34cf99cba73272152a628967cabff91453d45d',
        assignee: null,
        assignees: [],
        requested_reviewers: [
          {
            login: 'jkrems',
            id: 567540,
            avatar_url: 'https://avatars1.githubusercontent.com/u/567540?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/jkrems',
            html_url: 'https://github.com/jkrems',
            followers_url: 'https://api.github.com/users/jkrems/followers',
            following_url:
              'https://api.github.com/users/jkrems/following{/other_user}',
            gists_url: 'https://api.github.com/users/jkrems/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/jkrems/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/jkrems/subscriptions',
            organizations_url: 'https://api.github.com/users/jkrems/orgs',
            repos_url: 'https://api.github.com/users/jkrems/repos',
            events_url: 'https://api.github.com/users/jkrems/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/jkrems/received_events',
            type: 'User',
            site_admin: false,
          },
        ],
        requested_teams: [],
        labels: [
          {
            id: 690799345,
            url: 'https://api.github.com/repos/nodejs/node/labels/ES%20Modules',
            name: 'ES Modules',
            color: '0052cc',
            default: false,
          },
          {
            id: 155435814,
            url: 'https://api.github.com/repos/nodejs/node/labels/module',
            name: 'module',
            color: 'fbca04',
            default: false,
          },
        ],
        milestone: null,
        commits_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
        review_comments_url:
          'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
        review_comment_url:
          'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20403/comments',
        statuses_url:
          'https://api.github.com/repos/nodejs/node/statuses/ace2aec768e892ac161641cf5945ffe67e4a3e57',
        head: {
          label: 'devsnek:esm-builtin-module-namespaces',
          ref: 'esm-builtin-module-namespaces',
          sha: 'ace2aec768e892ac161641cf5945ffe67e4a3e57',
          user: {
            login: 'devsnek',
            id: 5952481,
            avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/devsnek',
            html_url: 'https://github.com/devsnek',
            followers_url: 'https://api.github.com/users/devsnek/followers',
            following_url:
              'https://api.github.com/users/devsnek/following{/other_user}',
            gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/devsnek/subscriptions',
            organizations_url: 'https://api.github.com/users/devsnek/orgs',
            repos_url: 'https://api.github.com/users/devsnek/repos',
            events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/devsnek/received_events',
            type: 'User',
            site_admin: false,
          },
          repo: {
            id: 86208251,
            name: 'node',
            full_name: 'devsnek/node',
            owner: {
              login: 'devsnek',
              id: 5952481,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/5952481?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/devsnek',
              html_url: 'https://github.com/devsnek',
              followers_url: 'https://api.github.com/users/devsnek/followers',
              following_url:
                'https://api.github.com/users/devsnek/following{/other_user}',
              gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/devsnek/subscriptions',
              organizations_url: 'https://api.github.com/users/devsnek/orgs',
              repos_url: 'https://api.github.com/users/devsnek/repos',
              events_url:
                'https://api.github.com/users/devsnek/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/devsnek/received_events',
              type: 'User',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/devsnek/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: true,
            url: 'https://api.github.com/repos/devsnek/node',
            forks_url: 'https://api.github.com/repos/devsnek/node/forks',
            keys_url: 'https://api.github.com/repos/devsnek/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/devsnek/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/devsnek/node/teams',
            hooks_url: 'https://api.github.com/repos/devsnek/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/devsnek/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/devsnek/node/events',
            assignees_url:
              'https://api.github.com/repos/devsnek/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/devsnek/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/devsnek/node/tags',
            blobs_url:
              'https://api.github.com/repos/devsnek/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/devsnek/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/devsnek/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/devsnek/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/devsnek/node/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/devsnek/node/languages',
            stargazers_url:
              'https://api.github.com/repos/devsnek/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/devsnek/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/devsnek/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/devsnek/node/subscription',
            commits_url:
              'https://api.github.com/repos/devsnek/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/devsnek/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/devsnek/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/devsnek/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/devsnek/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/devsnek/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/devsnek/node/merges',
            archive_url:
              'https://api.github.com/repos/devsnek/node/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/devsnek/node/downloads',
            issues_url:
              'https://api.github.com/repos/devsnek/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/devsnek/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/devsnek/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/devsnek/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/devsnek/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/devsnek/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/devsnek/node/deployments',
            created_at: '2017-03-26T04:48:23Z',
            updated_at: '2018-05-09T03:10:04Z',
            pushed_at: '2018-05-09T15:22:28Z',
            git_url: 'git://github.com/devsnek/node.git',
            ssh_url: 'git@github.com:devsnek/node.git',
            clone_url: 'https://github.com/devsnek/node.git',
            svn_url: 'https://github.com/devsnek/node',
            homepage: 'https://nodejs.org',
            size: 324869,
            stargazers_count: 0,
            watchers_count: 0,
            language: 'JavaScript',
            has_issues: false,
            has_projects: false,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1,
            mirror_url: null,
            archived: false,
            open_issues_count: 0,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 1,
            open_issues: 0,
            watchers: 0,
            default_branch: 'master',
          },
        },
        base: {
          label: 'nodejs:master',
          ref: 'master',
          sha: '5db018d1d05de039e00127a3a8adc0c3eed32e97',
          user: {
            login: 'nodejs',
            id: 9950313,
            avatar_url: 'https://avatars3.githubusercontent.com/u/9950313?v=4',
            gravatar_id: '',
            url: 'https://api.github.com/users/nodejs',
            html_url: 'https://github.com/nodejs',
            followers_url: 'https://api.github.com/users/nodejs/followers',
            following_url:
              'https://api.github.com/users/nodejs/following{/other_user}',
            gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
            starred_url:
              'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
            subscriptions_url:
              'https://api.github.com/users/nodejs/subscriptions',
            organizations_url: 'https://api.github.com/users/nodejs/orgs',
            repos_url: 'https://api.github.com/users/nodejs/repos',
            events_url: 'https://api.github.com/users/nodejs/events{/privacy}',
            received_events_url:
              'https://api.github.com/users/nodejs/received_events',
            type: 'Organization',
            site_admin: false,
          },
          repo: {
            id: 27193779,
            name: 'node',
            full_name: 'nodejs/node',
            owner: {
              login: 'nodejs',
              id: 9950313,
              avatar_url:
                'https://avatars3.githubusercontent.com/u/9950313?v=4',
              gravatar_id: '',
              url: 'https://api.github.com/users/nodejs',
              html_url: 'https://github.com/nodejs',
              followers_url: 'https://api.github.com/users/nodejs/followers',
              following_url:
                'https://api.github.com/users/nodejs/following{/other_user}',
              gists_url: 'https://api.github.com/users/nodejs/gists{/gist_id}',
              starred_url:
                'https://api.github.com/users/nodejs/starred{/owner}{/repo}',
              subscriptions_url:
                'https://api.github.com/users/nodejs/subscriptions',
              organizations_url: 'https://api.github.com/users/nodejs/orgs',
              repos_url: 'https://api.github.com/users/nodejs/repos',
              events_url:
                'https://api.github.com/users/nodejs/events{/privacy}',
              received_events_url:
                'https://api.github.com/users/nodejs/received_events',
              type: 'Organization',
              site_admin: false,
            },
            private: false,
            html_url: 'https://github.com/nodejs/node',
            description:
              'Node.js JavaScript runtime :sparkles::turtle::rocket::sparkles:',
            fork: false,
            url: 'https://api.github.com/repos/nodejs/node',
            forks_url: 'https://api.github.com/repos/nodejs/node/forks',
            keys_url: 'https://api.github.com/repos/nodejs/node/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/nodejs/node/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/nodejs/node/teams',
            hooks_url: 'https://api.github.com/repos/nodejs/node/hooks',
            issue_events_url:
              'https://api.github.com/repos/nodejs/node/issues/events{/number}',
            events_url: 'https://api.github.com/repos/nodejs/node/events',
            assignees_url:
              'https://api.github.com/repos/nodejs/node/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/nodejs/node/branches{/branch}',
            tags_url: 'https://api.github.com/repos/nodejs/node/tags',
            blobs_url:
              'https://api.github.com/repos/nodejs/node/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/nodejs/node/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/nodejs/node/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/nodejs/node/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/nodejs/node/statuses/{sha}',
            languages_url: 'https://api.github.com/repos/nodejs/node/languages',
            stargazers_url:
              'https://api.github.com/repos/nodejs/node/stargazers',
            contributors_url:
              'https://api.github.com/repos/nodejs/node/contributors',
            subscribers_url:
              'https://api.github.com/repos/nodejs/node/subscribers',
            subscription_url:
              'https://api.github.com/repos/nodejs/node/subscription',
            commits_url:
              'https://api.github.com/repos/nodejs/node/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/nodejs/node/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/nodejs/node/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/nodejs/node/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/nodejs/node/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/nodejs/node/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/nodejs/node/merges',
            archive_url:
              'https://api.github.com/repos/nodejs/node/{archive_format}{/ref}',
            downloads_url: 'https://api.github.com/repos/nodejs/node/downloads',
            issues_url:
              'https://api.github.com/repos/nodejs/node/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/nodejs/node/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/nodejs/node/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/nodejs/node/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/nodejs/node/labels{/name}',
            releases_url:
              'https://api.github.com/repos/nodejs/node/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/nodejs/node/deployments',
            created_at: '2014-11-26T19:57:11Z',
            updated_at: '2018-05-09T16:29:24Z',
            pushed_at: '2018-05-09T16:28:33Z',
            git_url: 'git://github.com/nodejs/node.git',
            ssh_url: 'git@github.com:nodejs/node.git',
            clone_url: 'https://github.com/nodejs/node.git',
            svn_url: 'https://github.com/nodejs/node',
            homepage: 'https://nodejs.org',
            size: 374686,
            stargazers_count: 48585,
            watchers_count: 48585,
            language: 'JavaScript',
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 10246,
            mirror_url: null,
            archived: false,
            open_issues_count: 767,
            license: {
              key: 'other',
              name: 'Other',
              spdx_id: null,
              url: null,
            },
            forks: 10246,
            open_issues: 767,
            watchers: 48585,
            default_branch: 'master',
          },
        },
        _links: {
          self: {
            href: 'https://api.github.com/repos/nodejs/node/pulls/20403',
          },
          html: { href: 'https://github.com/nodejs/node/pull/20403' },
          issue: {
            href: 'https://api.github.com/repos/nodejs/node/issues/20403',
          },
          comments: {
            href:
              'https://api.github.com/repos/nodejs/node/issues/20403/comments',
          },
          review_comments: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/comments',
          },
          review_comment: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/comments{/number}',
          },
          commits: {
            href:
              'https://api.github.com/repos/nodejs/node/pulls/20403/commits',
          },
          statuses: {
            href:
              'https://api.github.com/repos/nodejs/node/statuses/ace2aec768e892ac161641cf5945ffe67e4a3e57',
          },
        },
        author_association: 'MEMBER',
      },
    },
    public: true,
    created_at: '2018-05-09T16:29:55Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7650827624',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20016',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20016/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20016/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20016/events',
        html_url: 'https://github.com/nodejs/node/pull/20016',
        id: 314223400,
        number: 20016,
        title: 'deps: cherry-pick 39d546a from upstream v8',
        user: {
          login: 'devsnek',
          id: 5952481,
          avatar_url: 'https://avatars3.githubusercontent.com/u/5952481?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/devsnek',
          html_url: 'https://github.com/devsnek',
          followers_url: 'https://api.github.com/users/devsnek/followers',
          following_url:
            'https://api.github.com/users/devsnek/following{/other_user}',
          gists_url: 'https://api.github.com/users/devsnek/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/devsnek/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/devsnek/subscriptions',
          organizations_url: 'https://api.github.com/users/devsnek/orgs',
          repos_url: 'https://api.github.com/users/devsnek/repos',
          events_url: 'https://api.github.com/users/devsnek/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/devsnek/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 176191361,
            url: 'https://api.github.com/repos/nodejs/node/labels/V8%20Engine',
            name: 'V8 Engine',
            color: '0052cc',
            default: false,
          },
          {
            id: 311670452,
            url:
              'https://api.github.com/repos/nodejs/node/labels/dont-land-on-v4.x',
            name: 'dont-land-on-v4.x',
            color: 'eb6420',
            default: false,
          },
          {
            id: 364533783,
            url:
              'https://api.github.com/repos/nodejs/node/labels/dont-land-on-v6.x',
            name: 'dont-land-on-v6.x',
            color: 'c2e0c6',
            default: false,
          },
          {
            id: 169485478,
            url: 'https://api.github.com/repos/nodejs/node/labels/semver-minor',
            name: 'semver-minor',
            color: 'fef2c0',
            default: false,
          },
          {
            id: 155267446,
            url: 'https://api.github.com/repos/nodejs/node/labels/util',
            name: 'util',
            color: 'd4c5f9',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 24,
        created_at: '2018-04-13T19:23:21Z',
        updated_at: '2018-05-09T16:26:10Z',
        closed_at: '2018-04-15T19:48:34Z',
        author_association: 'MEMBER',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/node/pulls/20016',
          html_url: 'https://github.com/nodejs/node/pull/20016',
          diff_url: 'https://github.com/nodejs/node/pull/20016.diff',
          patch_url: 'https://github.com/nodejs/node/pull/20016.patch',
        },
        body:
          'Two commits here:\r\n\r\n1. `[api] introduce v8::Value::IsModuleNamespaceObject` (https://github.com/v8/v8/commit/39d546a24022b62b00aedf7b556ac6c9e2306aab)\r\n2. `util: introduce isModuleNamespaceObject` (ff9eba9e4dfd99f5d5d3f4963e3703a3128cc6f0)\r\n\r\n##### Checklist\r\n<!-- Remove items that do not apply. For completed items, change [ ] to [x]. -->\r\n\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387796629',
        html_url:
          'https://github.com/nodejs/node/pull/20016#issuecomment-387796629',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20016',
        id: 387796629,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T16:26:10Z',
        updated_at: '2018-05-09T16:26:10Z',
        author_association: 'MEMBER',
        body:
          "Related PR doc which makes it officially exposed (supported) PR is https://github.com/nodejs/node/pull/20616. It's marked as fast-track so if there are objections to it in favor of flagging you might raise them sooner than later.",
      },
    },
    public: true,
    created_at: '2018-05-09T16:26:10Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7650380917',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131568342,
      name: 'jdalton/node',
      url: 'https://api.github.com/repos/jdalton/node',
    },
    payload: {
      push_id: 2550943257,
      size: 104,
      distinct_size: 104,
      ref: 'refs/heads/tweaks',
      head: 'ce60134b864fb3d5d48f85d6370db0dbd6e1229d',
      before: '8c4db0d4436616157f32a26796a80a4e79a126ac',
      commits: [
        {
          sha: 'bdf5be98dd901f6c312938198439dbda0b20d517',
          author: {
            email: 'gabriel.schulhof@intel.com',
            name: 'Gabriel Schulhof',
          },
          message:
            'n-api: test and doc napi_throw() of a primitive\n\nEnsure that napi_throw() is able to throw a primitive value, and\ndocument that it is able to throw any JavaScript value.\n\nFixes: https://github.com/nodejs/abi-stable-node/issues/309\nPR-URL: https://github.com/nodejs/node/pull/20428\nReviewed-By: Michael Dawson <michael_dawson@ca.ibm.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/bdf5be98dd901f6c312938198439dbda0b20d517',
        },
        {
          sha: '7588ceaf353af0f257d4d832bace4600edac704e',
          author: {
            email: 'vsemozhetbyt@gmail.com',
            name: 'Vse Mozhet Byt',
          },
          message:
            'doc: add more missing backticks\n\nAlso, fix some other nits in passing\n(formatting, punctuation, typos, redundancy, obsoleteness).\n\nPR-URL: https://github.com/nodejs/node/pull/20438\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/7588ceaf353af0f257d4d832bace4600edac704e',
        },
        {
          sha: 'ac6d1f20b9668d5f904d9e592bfd0ae0bfd3445e',
          author: { email: 'rtrott@gmail.com', name: 'Rich Trott' },
          message:
            "doc: remove squash guideline from onboarding doc\n\nAlthough I agree with the guideline people should generally not squash\ncommits in a pull request until the end (in other words, until it's time\nto land the PR), it is clear from comments and actions in the issue\ntracker that many do not share that view. This is fine by me, but I do\nthink that we should our documentation should reflect our practices\nrather than being an aspirational statement.\n\nIf we *do* wish to preserve this recommendation, it probably belongs in\nanother document anyway as this is not a recommendation for\nCollaborators only but for anyone opening a pull request.\n\nPR-URL: https://github.com/nodejs/node/pull/20413\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/ac6d1f20b9668d5f904d9e592bfd0ae0bfd3445e',
        },
        {
          sha: '24a5ac797d6eb2431d532ddb3a9e2062490a7737',
          author: { email: 'rtrott@gmail.com', name: 'Rich Trott' },
          message:
            'doc: add squash guideline to pull-requests doc\n\nTell the contributor to generally not squash commits during the pull\nrequest review process.\n\nPR-URL: https://github.com/nodejs/node/pull/20413\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/24a5ac797d6eb2431d532ddb3a9e2062490a7737',
        },
        {
          sha: 'a957f248aedb89aff510fa619e80f017cf318e05',
          author: {
            email: 'apapirovski@mac.com',
            name: 'Anatoli Papirovski',
          },
          message:
            'benchmark: fix next-tick-depth\n\nA recent change made these benchmarks fail by always finishing\nwith 0 iterations. Restore a counter variable.\n\nPR-URL: https://github.com/nodejs/node/pull/20461\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Rich Trott <rtrott@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/a957f248aedb89aff510fa619e80f017cf318e05',
        },
        {
          sha: '516349d99cd64448f88899485352753f847b1ae9',
          author: { email: 'darai0512@yahoo.co.jp', name: 'Daiki Arai' },
          message:
            "doc: add http.ClientRequest maxHeadersCount\n\nIn http.ClientRequest's doc, add maxHeadersCount as a public property.\nAnd in the description of server's one, change a hyphen to a comma.\n\nPR-URL: https://github.com/nodejs/node/pull/20361\nRefs: https://github.com/nodejs/node/pull/20359\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/516349d99cd64448f88899485352753f847b1ae9',
        },
        {
          sha: 'ab15198471cdd62b9c98619b033ac17f0f56d01e',
          author: { email: 'riclau@uk.ibm.com', name: 'Richard Lau' },
          message:
            'tools: fix TypeError from `test.py --time`\n\nCalculated durations are timedelta objects but the FormatTime function\nis expecting a number in seconds.\n\nPR-URL: https://github.com/nodejs/node/pull/20368\nFixes: https://github.com/nodejs/node/issues/20341\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/ab15198471cdd62b9c98619b033ac17f0f56d01e',
        },
        {
          sha: '751c2d6a8da7aae5db730d87b878dea761b384e0',
          author: { email: 'xsbchen@qq.com', name: 'xsbchen' },
          message:
            'doc: update writing-and-running-benchmarks.md\n\nRefs: https://github.com/nodejs/node/commit/368517c0dc2576e1f8f315e53d0cfebb22acf9e2\n\nPR-URL: https://github.com/nodejs/node/pull/20379\nReviewed-By: Joyee Cheung <joyeec9h3@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/751c2d6a8da7aae5db730d87b878dea761b384e0',
        },
        {
          sha: '482b662cb1d698a7b6dae1b31232451893c72b15',
          author: {
            email: 'kyle.martin@hotmail.co.nz',
            name: 'Kyle Martin',
          },
          message:
            'timers: named anonymous functions\n\nPR-URL: https://github.com/nodejs/node/pull/20397\nRefs: https://github.com/nodejs/node/issues/8913\nReviewed-By: Anatoli Papirovski <apapirovski@mac.com>\nReviewed-By: Minwoo Jung <minwoo@nodesource.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Benjamin Gruenbaum <benjamingr@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/482b662cb1d698a7b6dae1b31232451893c72b15',
        },
        {
          sha: 'c493b98b0bc3857340441c4ababf701288ffbd96',
          author: { email: 'serayaeryn@gmail.com', name: 'Denis Fäcke' },
          message:
            'child_process: name anonymous functions\n\nRefs: https://github.com/nodejs/node/issues/8913\n\nPR-URL: https://github.com/nodejs/node/pull/20399\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/c493b98b0bc3857340441c4ababf701288ffbd96',
        },
        {
          sha: 'aa18e22a235d75a28e8a25470b5f3b5f9be06a1f',
          author: {
            email: 'daylor.yanes@gmail.com',
            name: 'Daylor Yanes',
          },
          message:
            'test: remove unnecessary strictEqual() argument from remoteClose()\n\nPR-URL: https://github.com/nodejs/node/pull/20343\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Richard Lau <riclau@uk.ibm.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/aa18e22a235d75a28e8a25470b5f3b5f9be06a1f',
        },
        {
          sha: 'b457ec8437e6f4960d7862fa5a81821bf967e698',
          author: { email: 'riclau@uk.ibm.com', name: 'Richard Lau' },
          message:
            'test: use fs.copyFileSync()\n\nUse the potentially more efficient fs.copyFileSync() instead of reading\nthe whole file in and writing the whole file out in JavaScript.\n\nPR-URL: https://github.com/nodejs/node/pull/20340\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>\nReviewed-By: Khaidi Chu <i@2333.moe>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/b457ec8437e6f4960d7862fa5a81821bf967e698',
        },
        {
          sha: '2553377d118f8762bbb665936e4ce41eb84bf3bb',
          author: {
            email: 'vsemozhetbyt@gmail.com',
            name: 'Vse Mozhet Byt',
          },
          message:
            'doc: add missing periods in documentation.md\n\nPR-URL: https://github.com/nodejs/node/pull/20469\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/2553377d118f8762bbb665936e4ce41eb84bf3bb',
        },
        {
          sha: 'fe8794560a22cc62a482bf071e2050ce1ea6ea3e',
          author: {
            email: 'apapirovski@mac.com',
            name: 'Anatoli Papirovski',
          },
          message:
            "events: optimize condition for optimal scenario\n\nInstead of always checking whether we've already warned about a\npossible EventEmitter memory leak, first run the rest of the\ncode as accessing random properties on an Array is expensive.\n\nIn addition, remove an unnecessary truthy check.\n\nPR-URL: https://github.com/nodejs/node/pull/20452\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/fe8794560a22cc62a482bf071e2050ce1ea6ea3e',
        },
        {
          sha: 'b04d0921aeaa70521dea5fcb27256c686157eb87',
          author: {
            email: 'apapirovski@mac.com',
            name: 'Anatoli Papirovski',
          },
          message:
            'util: improve spliceOne perf\n\nDo less variable allocations and reassignments inside spliceOne\nsince it\'s relied on by some performance sensitive code.\n\nPR-URL: https://github.com/nodejs/node/pull/20453\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Daniel Bevenius <daniel.bevenius@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/b04d0921aeaa70521dea5fcb27256c686157eb87',
        },
        {
          sha: '6a24c0c4d6a29a223db26469d33aa0a6f0ed2a1e',
          author: {
            email: 'chittorashobhit@gmail.com',
            name: 'Shobhit Chittora',
          },
          message:
            'doc: update cli flag in crypto.md\n\nPR-URL: https://github.com/nodejs/node/pull/20400\nFixes: https://github.com/nodejs/node/issues/20385\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Shigeki Ohtsu <ohtsu@ohtsu.org>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/6a24c0c4d6a29a223db26469d33aa0a6f0ed2a1e',
        },
        {
          sha: 'a00f76c360a223464f330b8a19612c8a0991f6c8',
          author: { email: 'rtrott@gmail.com', name: 'Rich Trott' },
          message:
            "doc: synchronize argument names for appendFile()\n\nThe documentation used `file` for the first argument to `appendFile()`\nfunctions. However, the code and (more importantly) thrown errors\nreferred to it as `path`. The latter is especially important because\ncontext is not provided. So you're looking for a function that takes\n`path` but that string doesn't appear in your code *or* in the\ndocumentation. It's not until the end user looks at the source code of\nNode.js that they can figure out what's going on. This is why it is\nimportant that the names of variables in the documentation match that in\nthe code. If we want to change this to `file`, then that's OK, but we\nneed to do it in the source code and error messages too, not just in the\ndocs. Changing the docs is the smallest change to synchronize everything\nso that's what this change does.\n\nPR-URL: https://github.com/nodejs/node/pull/20489\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/a00f76c360a223464f330b8a19612c8a0991f6c8',
        },
        {
          sha: '4d8806fc407a127833d483ccd1cc8b35f33528c8',
          author: {
            email: 'carrie.coxwell@gmail.com',
            name: 'Carrie Coxwell',
          },
          message:
            'util: named anonymous functions\n\nPR-URL: https://github.com/nodejs/node/pull/20408\nReviewed-By: Michaël Zasso <targos@protonmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Weijia Wang <starkwang@126.com>\nReviewed-By: Matheus Marchini <matheus@sthima.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/4d8806fc407a127833d483ccd1cc8b35f33528c8',
        },
        {
          sha: '0930d7ec05d8a0d29d7562f881ca67a959ec18a4',
          author: {
            email: 'carrie.coxwell@gmail.com',
            name: 'Carrie Coxwell',
          },
          message:
            'lib: named anonymous functions\n\nPR-URL: https://github.com/nodejs/node/pull/20408\nReviewed-By: Michaël Zasso <targos@protonmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Weijia Wang <starkwang@126.com>\nReviewed-By: Matheus Marchini <matheus@sthima.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/0930d7ec05d8a0d29d7562f881ca67a959ec18a4',
        },
        {
          sha: 'a59826403a76fcc7a6685a52ee82d19be323a699',
          author: { email: 'me@gus.host', name: 'Gus Caplan' },
          message:
            'console: console.time() should not reset a timer when it exists\n\nPR-URL: https://github.com/nodejs/node/pull/20442\nFixes: https://github.com/nodejs/node/issues/20440\nRefs: https://console.spec.whatwg.org/#time\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Jeremiah Senkpiel <fishrock123@rocketmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/jdalton/node/commits/a59826403a76fcc7a6685a52ee82d19be323a699',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T15:09:36Z',
  },
  {
    id: '7650350444',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 2791348,
      name: 'jprichardson/node-fs-extra',
      url: 'https://api.github.com/repos/jprichardson/node-fs-extra',
    },
    payload: {
      action: 'created',
      issue: {
        url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/577',
        repository_url:
          'https://api.github.com/repos/jprichardson/node-fs-extra',
        labels_url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/577/labels{/name}',
        comments_url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/577/comments',
        events_url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/577/events',
        html_url: 'https://github.com/jprichardson/node-fs-extra/issues/577',
        id: 321514183,
        number: 577,
        title:
          'ExperimentalWarning: The fs.promises API is experimental (Node.js 10.1.0)',
        user: {
          login: 'bajtos',
          id: 1140553,
          avatar_url: 'https://avatars1.githubusercontent.com/u/1140553?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/bajtos',
          html_url: 'https://github.com/bajtos',
          followers_url: 'https://api.github.com/users/bajtos/followers',
          following_url:
            'https://api.github.com/users/bajtos/following{/other_user}',
          gists_url: 'https://api.github.com/users/bajtos/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/bajtos/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/bajtos/subscriptions',
          organizations_url: 'https://api.github.com/users/bajtos/orgs',
          repos_url: 'https://api.github.com/users/bajtos/repos',
          events_url: 'https://api.github.com/users/bajtos/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/bajtos/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'open',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-09T10:22:21Z',
        updated_at: '2018-05-09T15:04:42Z',
        closed_at: null,
        author_association: 'NONE',
        body:
          '<!-- Please fill out the following information if it applies to your issue: -->\r\n- **Operating System:** MacOS 10.13.4\r\n- **Node.js version:** 10.1.0\r\n- **`fs-extra` version:** 5.0.0\r\n\r\nHello! First of all, thank you for the great work on maintaining fs-extra 🙇 \r\n\r\nWith Node.js 10.1.0 recently released, we started to see the following warning in our test suite:\r\n\r\n```\r\n(node:7885) ExperimentalWarning: The fs.promises API is experimental\r\n```\r\n\r\nIt turns out the `fs` module provides a new property `promises` which triggers the warning on the first access.\r\n\r\nYou can try it out yourself:\r\n\r\n```\r\n$ node -v\r\nv10.1.0\r\n$ node -e "console.log(typeof fs.promises)"\r\nobject\r\n(node:8277) ExperimentalWarning: The fs.promises API is experimental\r\n```\r\n\r\nOn Node.js version 10.0.0:\r\n\r\n```\r\n$ node -e "console.log(typeof fs.promises)"\r\nundefined\r\n```\r\n\r\nCan we fix [lib/fs/index.js](https://github.com/jprichardson/node-fs-extra/blob/7d36349abe257c15ac1b216a374de697161ba5f3/lib/fs/index.js) to not emit ExperimentalWarning until the experimental API is actually accessed?',
      },
      comment: {
        url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/comments/387770445',
        html_url:
          'https://github.com/jprichardson/node-fs-extra/issues/577#issuecomment-387770445',
        issue_url:
          'https://api.github.com/repos/jprichardson/node-fs-extra/issues/577',
        id: 387770445,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T15:04:42Z',
        updated_at: '2018-05-09T15:04:42Z',
        author_association: 'CONTRIBUTOR',
        body: 'Related Node PR: https://github.com/nodejs/node/pull/20504.',
      },
    },
    public: true,
    created_at: '2018-05-09T15:04:43Z',
  },
  {
    id: '7650295495',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 27193779,
      name: 'nodejs/node',
      url: 'https://api.github.com/repos/nodejs/node',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/nodejs/node/issues/20504',
        repository_url: 'https://api.github.com/repos/nodejs/node',
        labels_url:
          'https://api.github.com/repos/nodejs/node/issues/20504/labels{/name}',
        comments_url:
          'https://api.github.com/repos/nodejs/node/issues/20504/comments',
        events_url:
          'https://api.github.com/repos/nodejs/node/issues/20504/events',
        html_url: 'https://github.com/nodejs/node/pull/20504',
        id: 320035687,
        number: 20504,
        title: 'fs: move fs/promises to fs.promises',
        user: {
          login: 'cjihrig',
          id: 2512748,
          avatar_url: 'https://avatars1.githubusercontent.com/u/2512748?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/cjihrig',
          html_url: 'https://github.com/cjihrig',
          followers_url: 'https://api.github.com/users/cjihrig/followers',
          following_url:
            'https://api.github.com/users/cjihrig/following{/other_user}',
          gists_url: 'https://api.github.com/users/cjihrig/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/cjihrig/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/cjihrig/subscriptions',
          organizations_url: 'https://api.github.com/users/cjihrig/orgs',
          repos_url: 'https://api.github.com/users/cjihrig/repos',
          events_url: 'https://api.github.com/users/cjihrig/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/cjihrig/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 647282848,
            url: 'https://api.github.com/repos/nodejs/node/labels/experimental',
            name: 'experimental',
            color: 'c5def5',
            default: false,
          },
          {
            id: 155435785,
            url: 'https://api.github.com/repos/nodejs/node/labels/fs',
            name: 'fs',
            color: '0052cc',
            default: false,
          },
          {
            id: 281232761,
            url:
              'https://api.github.com/repos/nodejs/node/labels/lib%20/%20src',
            name: 'lib / src',
            color: 'fad8c7',
            default: false,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 16,
        created_at: '2018-05-03T18:44:22Z',
        updated_at: '2018-05-09T14:56:06Z',
        closed_at: '2018-05-07T23:48:50Z',
        author_association: 'CONTRIBUTOR',
        pull_request: {
          url: 'https://api.github.com/repos/nodejs/node/pulls/20504',
          html_url: 'https://github.com/nodejs/node/pull/20504',
          diff_url: 'https://github.com/nodejs/node/pull/20504.diff',
          patch_url: 'https://github.com/nodejs/node/pull/20504.patch',
        },
        body:
          'Refs: https://github.com/nodejs/TSC/issues/389\r\n\r\nThis only deals with moving `fs/promises` to `fs.promises`, and nothing about a CLI flag.\r\n\r\n##### Checklist\r\n- [x] `make -j4 test` (UNIX), or `vcbuild test` (Windows) passes\r\n- [x] tests and/or benchmarks are included\r\n- [x] documentation is changed or added\r\n- [x] commit message follows [commit guidelines](https://github.com/nodejs/node/blob/master/doc/guides/contributing/pull-requests.md#commit-message-guidelines)\r\n',
      },
      comment: {
        url:
          'https://api.github.com/repos/nodejs/node/issues/comments/387767313',
        html_url:
          'https://github.com/nodejs/node/pull/20504#issuecomment-387767313',
        issue_url: 'https://api.github.com/repos/nodejs/node/issues/20504',
        id: 387767313,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T14:56:06Z',
        updated_at: '2018-05-09T14:56:06Z',
        author_association: 'MEMBER',
        body:
          'The added runtime warning has affected `fs-extra`https://github.com/jprichardson/node-fs-extra/issues/577.\r\n\r\n',
      },
    },
    public: true,
    created_at: '2018-05-09T14:56:06Z',
    org: {
      id: 9950313,
      login: 'nodejs',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/nodejs',
      avatar_url: 'https://avatars.githubusercontent.com/u/9950313?',
    },
  },
  {
    id: '7650219318',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3783',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3783/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3783/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3783/events',
        html_url: 'https://github.com/lodash/lodash/issues/3783',
        id: 321586966,
        number: 3783,
        title: 'feature request: hasDuplicate hasDuplicateBy',
        user: {
          login: 'freddi301',
          id: 1537394,
          avatar_url: 'https://avatars2.githubusercontent.com/u/1537394?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/freddi301',
          html_url: 'https://github.com/freddi301',
          followers_url: 'https://api.github.com/users/freddi301/followers',
          following_url:
            'https://api.github.com/users/freddi301/following{/other_user}',
          gists_url: 'https://api.github.com/users/freddi301/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/freddi301/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/freddi301/subscriptions',
          organizations_url: 'https://api.github.com/users/freddi301/orgs',
          repos_url: 'https://api.github.com/users/freddi301/repos',
          events_url: 'https://api.github.com/users/freddi301/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/freddi301/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 1,
        created_at: '2018-05-09T14:11:12Z',
        updated_at: '2018-05-09T14:44:06Z',
        closed_at: '2018-05-09T14:44:06Z',
        author_association: 'NONE',
        body: '',
      },
    },
    public: true,
    created_at: '2018-05-09T14:44:06Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7649996168',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2550745612,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '6ab4d93b361a3a4edb66b33ab272ecd75c96c52b',
      before: '5384649682da41f24f199a2fff70e5b557597ed4',
      commits: [
        {
          sha: '6ab4d93b361a3a4edb66b33ab272ecd75c96c52b',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message:
            'Ensure support.nativeProxyReceiver check has a side-effect so it works with uglifyjs unsafe compression.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/6ab4d93b361a3a4edb66b33ab272ecd75c96c52b',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T14:08:15Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7649872273',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2550681154,
      size: 1,
      distinct_size: 1,
      ref: 'refs/heads/master',
      head: '5384649682da41f24f199a2fff70e5b557597ed4',
      before: '82bfd0e3de09ea4a226f6cbfb123e46c2d97ed77',
      commits: [
        {
          sha: '5384649682da41f24f199a2fff70e5b557597ed4',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add builtin constructor live bindings test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/5384649682da41f24f199a2fff70e5b557597ed4',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T13:47:40Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7649815241',
    type: 'GollumEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      pages: [
        {
          page_name: 'Compile-Node',
          title: 'Compile Node',
          summary: null,
          action: 'created',
          sha: 'df4da5ce4033babc303e7d1634a5e3e0a727e015',
          html_url: 'https://github.com/standard-things/esm/wiki/Compile-Node',
        },
        {
          page_name: 'Home',
          title: 'Home',
          summary: null,
          action: 'created',
          sha: 'df4da5ce4033babc303e7d1634a5e3e0a727e015',
          html_url: 'https://github.com/standard-things/esm/wiki/Home',
        },
        {
          page_name: 'Improved-Errors',
          title: 'Improved Errors',
          summary: null,
          action: 'created',
          sha: 'df4da5ce4033babc303e7d1634a5e3e0a727e015',
          html_url:
            'https://github.com/standard-things/esm/wiki/Improved-Errors',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T13:37:52Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7649810660',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 131168711,
      name: 'standard-things/node',
      url: 'https://api.github.com/repos/standard-things/node',
    },
    payload: {
      push_id: 2550648566,
      size: 23,
      distinct_size: 23,
      ref: 'refs/heads/esm',
      head: '6c1133c2ca519084ff768e9411000d0b90b85e79',
      before: '78c9aa909dcf33a8a15bfba8274744297e0b1d9f',
      commits: [
        {
          sha: '0452f1152cb15db01631196e893b875332946b76',
          author: {
            email: 'vsemozhetbyt@gmail.com',
            name: 'Vse Mozhet Byt',
          },
          message:
            'doc: update "Who to cc..." in COLLABORATOR_GUIDE\n\nSome of the mentioned files seem to be moved or renamed.\n\nPR-URL: https://github.com/nodejs/node/pull/20564\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ujjwal Sharma <usharma1998@gmail.com>\nReviewed-By: Michael Dawson <michael_dawson@ca.ibm.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/0452f1152cb15db01631196e893b875332946b76',
        },
        {
          sha: '975f6c1f7077fd33db95eaeee6ccfa49e4a29348',
          author: { email: 'cjihrig@gmail.com', name: 'cjihrig' },
          message:
            'fs: move fs/promises to fs.promises\n\nPR-URL: https://github.com/nodejs/node/pull/20504\nRefs: https://github.com/nodejs/TSC/issues/389\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Myles Borins <myles.borins@gmail.com>\nReviewed-By: Shingo Inoue <leko.noor@gmail.com>\nReviewed-By: Joyee Cheung <joyeec9h3@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Ali Ijaz Sheikh <ofrobots@google.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/975f6c1f7077fd33db95eaeee6ccfa49e4a29348',
        },
        {
          sha: '852c4592b14db61f87b3d6b8a8f8588fee09df75',
          author: { email: 'chhuang@us.ibm.com', name: 'Chin Huang' },
          message:
            'doc: add trace category for fs sync methods\n\nAdd the trace category for file system synchronous methods to\ndocumentation so the users can enable it when they want to look\ninto file system sync method trace data.\n\nPR-URL: https://github.com/nodejs/node/pull/20526\nRefs: https://github.com/nodejs/node/pull/19649\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Ali Ijaz Sheikh <ofrobots@google.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/852c4592b14db61f87b3d6b8a8f8588fee09df75',
        },
        {
          sha: '6af26b11b79efab37b547ce5a85807291c26845c',
          author: {
            email: 'make.just.on@gmail.com',
            name: 'TSUYUSATO Kitsune',
          },
          message:
            'console: make console.table() use colored inspect\n\nThis makes `console.table()` inspect objects with color if available\nlike `console.log()`.\n\nPR-URL: https://github.com/nodejs/node/pull/20510\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Jackson Tian <shyvo1987@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/6af26b11b79efab37b547ce5a85807291c26845c',
        },
        {
          sha: 'dd03709148ec49b55792a1e29144634a323326b0',
          author: { email: 'rtrott@gmail.com', name: 'Rich Trott' },
          message:
            'doc: move tunniclm to Emeritus\n\ntunniclm indicated that it would be a good idea to move them to\nCollaborator Emeritus for now. This commit makes that change in the\nREADME.md file.\n\nPR-URL: https://github.com/nodejs/node/pull/20533\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Gireesh Punathil <gpunathi@in.ibm.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Tobias Nießen <tniessen@tnie.de>\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Yuta Hiroto <hello@hiroppy.me>\nReviewed-By: Gibson Fahnestock <gibfahn@gmail.com>\nReviewed-By: Michael Dawson <michael_dawson@ca.ibm.com>\nReviewed-By: Richard Lau <riclau@uk.ibm.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/dd03709148ec49b55792a1e29144634a323326b0',
        },
        {
          sha: 'ca6b12e28df53110de7ee58699d5af099d036c67',
          author: {
            email: 'chalkerx@gmail.com',
            name: 'Сковорода Никита Андреевич',
          },
          message:
            "fs: remove broken code in promises/write\n\nThat code expects the last argument to be a callback.\nWhen it's not a callback, it shifts arguments, defaulting\nencoding to 'utf-8', which is clearly broken.\n\nOld signature: (fd, string[, position[, encoding]], callback)\nNew signature: (fd, string[, position[, encoding]])\n\nPR-URL: https://github.com/nodejs/node/pull/20407\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Benjamin Gruenbaum <benjamingr@gmail.com>\nReviewed-By: Tiancheng \"Timothy\" Gu <timothygu99@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Jamie Davis <davisjam@vt.edu>\nReviewed-By: Sakthipriyan Vairamani <thechargingvolcano@gmail.com>",
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/ca6b12e28df53110de7ee58699d5af099d036c67',
        },
        {
          sha: '15f743165cdb61bcc4dcaf865f18931f2c883b41',
          author: {
            email: 'chalkerx@gmail.com',
            name: 'Сковорода Никита Андреевич',
          },
          message:
            'fs: fchmod->fchown in promises/lchown\n\nThis was a clear error.\n\nchown should do chown, not chmod.\n\nPR-URL: https://github.com/nodejs/node/pull/20407\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Benjamin Gruenbaum <benjamingr@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Jamie Davis <davisjam@vt.edu>\nReviewed-By: Sakthipriyan Vairamani <thechargingvolcano@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/15f743165cdb61bcc4dcaf865f18931f2c883b41',
        },
        {
          sha: '2d945fd64581c279e22e6b020714a703d7fbd248',
          author: { email: 'daniel1kdago@gmail.com', name: 'daGo' },
          message:
            'doc: clarify `this` in event listeners\n\nthis === eventEmitter or this === instance of EventEmitter,\nbut it\'s this is not EventEmitter.\n\nPR-URL: https://github.com/nodejs/node/pull/20537\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/2d945fd64581c279e22e6b020714a703d7fbd248',
        },
        {
          sha: '802a63139f7bd7abff60ce98781599344f0c8fab',
          author: {
            email: 'vsemozhetbyt@gmail.com',
            name: 'Vse Mozhet Byt',
          },
          message:
            'tools: add v10 to alternative version docs menu\n\nPR-URL: https://github.com/nodejs/node/pull/20586\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/802a63139f7bd7abff60ce98781599344f0c8fab',
        },
        {
          sha: '8e6601a789ec6c3657314f475f1493192a2fda2b',
          author: { email: 'cjihrig@gmail.com', name: 'cjihrig' },
          message:
            'test: use common.canCreateSymLink() consistently\n\nThis commit replaces two ad hoc symlink permission tests with\ncommon.canCreateSymLink().\n\nPR-URL: https://github.com/nodejs/node/pull/20540\nReviewed-By: Ruben Bridgewater <ruben@bridgewater.de>\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/8e6601a789ec6c3657314f475f1493192a2fda2b',
        },
        {
          sha: '870ae722279678a6d4f49b664bd4fba2051fbf4a',
          author: { email: 'riclau@uk.ibm.com', name: 'Richard Lau' },
          message:
            'tools: add eslint check for skipIfEslintMissing\n\nAdd a custom eslint rule to check for `common.skipIfEslintMissing()` to\nallow tests to run from source tarballs that do not include eslint.\n\nFix up rule tests that were failing the new check.\n\nRefs: https://github.com/nodejs/node/issues/20336\n\nPR-URL: https://github.com/nodejs/node/pull/20372\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: Rich Trott <rtrott@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/870ae722279678a6d4f49b664bd4fba2051fbf4a',
        },
        {
          sha: 'cf44abbbfeae02505f2afe629f6cee325ef73e86',
          author: {
            email: 'Lambdac0re@users.noreply.github.com',
            name: 'Lambdac0re',
          },
          message:
            'doc: match console.count()/countReset() signatures\n\nPR-URL: https://github.com/nodejs/node/pull/20599\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/cf44abbbfeae02505f2afe629f6cee325ef73e86',
        },
        {
          sha: 'ac894503261e4f509eec2e10e56ff72764abd5f5',
          author: {
            email: 'apapirovski@mac.com',
            name: 'Anatoli Papirovski',
          },
          message:
            'test: fix flaky http2-flow-control test\n\nPR-URL: https://github.com/nodejs/node/pull/20556\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Matteo Collina <matteo.collina@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/ac894503261e4f509eec2e10e56ff72764abd5f5',
        },
        {
          sha: 'a76dfd24ec5c76d268ab2c6b6bd6a9cf36f602c6',
          author: {
            email: 'chittorashobhit@gmail.com',
            name: 'Shobhit Chittora',
          },
          message:
            'doc: refactor mode constants parts in fs.md\n\n1. removed extra mode constants doc.\n2. creates bookmark to the common File Access Contants block.\n\nPR-URL: https://github.com/nodejs/node/pull/20558\nFixes: https://github.com/nodejs/node/issues/20049\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/a76dfd24ec5c76d268ab2c6b6bd6a9cf36f602c6',
        },
        {
          sha: '5f2b67dbcd13d5f1112ec9f6eaed1828c0d71e72',
          author: {
            email: 'vsemozhetbyt@gmail.com',
            name: 'Vse Mozhet Byt',
          },
          message:
            'doc, tools: unify stability signatures\n\nPR-URL: https://github.com/nodejs/node/pull/20552\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/5f2b67dbcd13d5f1112ec9f6eaed1828c0d71e72',
        },
        {
          sha: '2c0fc3bd89325b14e7e611993580574cb62c2b65',
          author: {
            email: 'mylesborins@google.com',
            name: 'Myles Borins',
          },
          message:
            '2018-05-08, Version 10.1.0 (Current)\n\nNotable Changes:\n\n* console:\n  - make console.table() use colored inspect (TSUYUSATO Kitsune)\n    https://github.com/nodejs/node/pull/20510\n* fs:\n  - move fs/promises to fs.promises (cjihrig)\n    https://github.com/nodejs/node/pull/20504\n* http:\n  - added aborted property to request (Robert Nagy)\n    https://github.com/nodejs/node/pull/20094\n* n-api:\n  - initialize a module via a special symbol (Gabriel Schulhof)\n    https://github.com/nodejs/node/pull/20161\n* src:\n  - add public API to expose the main V8 Platform (Allen Yonghuang Wang)\n    https://github.com/nodejs/node/pull/20447\n\nPR-URL: https://github.com/nodejs/node/pull/20606',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/2c0fc3bd89325b14e7e611993580574cb62c2b65',
        },
        {
          sha: '4214c2fd33bcb0d57dde87d028a69f4e3f7a8119',
          author: {
            email: 'usharma1998@gmail.com',
            name: 'Ujjwal Sharma',
          },
          message:
            'doc: add params for ClientHttp2Session:altsvc\n\nAdd parameters for the callback for the ClientHttp2Session:altsvc\nevent inline with the pattern in the rest of the documentation.\n\nRefs: https://github.com/nodejs/help/issues/877#issuecomment-381253464\n\nPR-URL: https://github.com/nodejs/node/pull/20598\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Luigi Pinca <luigipinca@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/4214c2fd33bcb0d57dde87d028a69f4e3f7a8119',
        },
        {
          sha: 'd5b259e22bdd165929e20ae211f72d71d70c9dae',
          author: {
            email: 'usharma1998@gmail.com',
            name: 'Ujjwal Sharma',
          },
          message:
            'doc: add parameters for Http2Stream:error event\n\nAdd parameters for the callback for the Http2Stream:error event\ninline with the pattern in the rest of the documentation.\n\nRefs: https://github.com/nodejs/help/issues/877#issuecomment-381253464\n\nPR-URL: https://github.com/nodejs/node/pull/20610\nReviewed-By: Vse Mozhet Byt <vsemozhetbyt@gmail.com>\nReviewed-By: Trivikram Kamat <trivikr.dev@gmail.com>\nReviewed-By: Colin Ihrig <cjihrig@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/d5b259e22bdd165929e20ae211f72d71d70c9dae',
        },
        {
          sha: '36793b8c650e80ad6f35728d586eda7637703466',
          author: {
            email: 'daniel.bevenius@gmail.com',
            name: 'Daniel Bevenius',
          },
          message:
            'src: rename handle parameter object\n\nThis commit renames the handle parameter for the BaseObject constructor\nto object instead of handle.\n\nThe motivation for doing this is that when stepping through an\ninheritance chain it can sometimes be a little confusing when\nHandleWrap is in involved. HandleWrap has a handle parameter\nbut calls the object that is passed to AsyncWrap object, but\nthen when you end up in BaseObject it is named handle.\n\nPR-URL: https://github.com/nodejs/node/pull/20570\nReviewed-By: Anna Henningsen <anna@addaleax.net>\nReviewed-By: James M Snell <jasnell@gmail.com>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/36793b8c650e80ad6f35728d586eda7637703466',
        },
        {
          sha: '590769bb96a9012e85b06569952743abb8fe68ad',
          author: {
            email: 'daniel.bevenius@gmail.com',
            name: 'Daniel Bevenius',
          },
          message:
            'src: don\'t create Undefined if not needed\n\nThis commit moves the creation of argv and only creates an undefined\nvalue if the passed in status was not 0.\n\nThe variable name client_handle was already used in this function but\nI\'ve change that usage so that this variable name matches the\nonconnection callback functions parameter name clientHandle.\n\nPR-URL: https://github.com/nodejs/node/pull/20573\nReviewed-By: Ben Noordhuis <info@bnoordhuis.nl>\nReviewed-By: James M Snell <jasnell@gmail.com>\nReviewed-By: Tiancheng "Timothy" Gu <timothygu99@gmail.com>\nReviewed-By: Gus Caplan <me@gus.host>\nReviewed-By: Anna Henningsen <anna@addaleax.net>',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/node/commits/590769bb96a9012e85b06569952743abb8fe68ad',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T13:37:03Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7649778699',
    type: 'ReleaseEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      action: 'published',
      release: {
        url:
          'https://api.github.com/repos/standard-things/esm/releases/10921533',
        assets_url:
          'https://api.github.com/repos/standard-things/esm/releases/10921533/assets',
        upload_url:
          'https://uploads.github.com/repos/standard-things/esm/releases/10921533/assets{?name,label}',
        html_url: 'https://github.com/standard-things/esm/releases/tag/3.0.32',
        id: 10921533,
        tag_name: '3.0.32',
        target_commitish: 'master',
        name: '',
        draft: false,
        author: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        prerelease: false,
        created_at: '2018-05-09T07:34:23Z',
        published_at: '2018-05-09T13:31:22Z',
        assets: [],
        tarball_url:
          'https://api.github.com/repos/standard-things/esm/tarball/3.0.32',
        zipball_url:
          'https://api.github.com/repos/standard-things/esm/zipball/3.0.32',
        body:
          '* Ensured builtin modules are not augmented\r\n* Ensured more shared data persists across loader instances',
      },
    },
    public: true,
    created_at: '2018-05-09T13:31:23Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7648074857',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2549732099,
      size: 3,
      distinct_size: 3,
      ref: 'refs/heads/master',
      head: '82bfd0e3de09ea4a226f6cbfb123e46c2d97ed77',
      before: '47cc3b18ca4299fb236d3555a07e0b06bdb98095',
      commits: [
        {
          sha: '51a07550b81a2a071d134f6a3a5d41185b954018',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove unsafe uglifyjs option.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/51a07550b81a2a071d134f6a3a5d41185b954018',
        },
        {
          sha: '1e95da78c49ffda37ec52d8b870c824e7d8591f2',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Update nyc.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/1e95da78c49ffda37ec52d8b870c824e7d8591f2',
        },
        {
          sha: '82bfd0e3de09ea4a226f6cbfb123e46c2d97ed77',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.32.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/82bfd0e3de09ea4a226f6cbfb123e46c2d97ed77',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T07:34:32Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7647909704',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 37036250,
      name: 'lodash/lodash.com',
      url: 'https://api.github.com/repos/lodash/lodash.com',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash.com/issues/45',
        repository_url: 'https://api.github.com/repos/lodash/lodash.com',
        labels_url:
          'https://api.github.com/repos/lodash/lodash.com/issues/45/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash.com/issues/45/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash.com/issues/45/events',
        html_url: 'https://github.com/lodash/lodash.com/issues/45',
        id: 174648858,
        number: 45,
        title: 'Browser locks while loading Lodash docs',
        user: {
          login: 'calvinf',
          id: 40245,
          avatar_url: 'https://avatars1.githubusercontent.com/u/40245?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/calvinf',
          html_url: 'https://github.com/calvinf',
          followers_url: 'https://api.github.com/users/calvinf/followers',
          following_url:
            'https://api.github.com/users/calvinf/following{/other_user}',
          gists_url: 'https://api.github.com/users/calvinf/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/calvinf/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/calvinf/subscriptions',
          organizations_url: 'https://api.github.com/users/calvinf/orgs',
          repos_url: 'https://api.github.com/users/calvinf/repos',
          events_url: 'https://api.github.com/users/calvinf/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/calvinf/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [
          {
            id: 221623007,
            url: 'https://api.github.com/repos/lodash/lodash.com/labels/bug',
            name: 'bug',
            color: 'fc2929',
            default: true,
          },
          {
            id: 221623013,
            url:
              'https://api.github.com/repos/lodash/lodash.com/labels/wontfix',
            name: 'wontfix',
            color: 'ffffff',
            default: true,
          },
        ],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 13,
        created_at: '2016-09-01T23:26:50Z',
        updated_at: '2018-05-09T06:53:36Z',
        closed_at: '2016-09-02T17:02:40Z',
        author_association: 'NONE',
        body:
          "When I load the Lodash docs, my browser freezes for several seconds.\n\nRepro steps:\n- Navigate to docs from Lodash homepage (click [Documentation](https://lodash.com/docs/4.15.0) link)\n- Browser (Firefox 48.0.1) freezes for a few seconds\n- Switch versions (to 3.10.1 or 2.4.2)\n- Browser freezes for a few seconds\n\nSomething about how the docs are being loaded is slowing things down.  I haven't had time to dig in and find out why.\n",
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash.com/issues/comments/387638932',
        html_url:
          'https://github.com/lodash/lodash.com/issues/45#issuecomment-387638932',
        issue_url: 'https://api.github.com/repos/lodash/lodash.com/issues/45',
        id: 387638932,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T06:53:36Z',
        updated_at: '2018-05-09T06:53:36Z',
        author_association: 'OWNER',
        body:
          "Nothing has changed on our end. If you think it's a Chrome regression you're better off filing the bug with Chrome since I'm not going to do any work on this.",
      },
    },
    public: true,
    created_at: '2018-05-09T06:53:37Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7647900336',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2549641921,
      size: 5,
      distinct_size: 5,
      ref: 'refs/heads/master',
      head: '47cc3b18ca4299fb236d3555a07e0b06bdb98095',
      before: '0b8268f23c234080255ded5f115e1e4a5705f101',
      commits: [
        {
          sha: '1cc8222bad567be65deb6068eeb3ef54228fa8fe',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Newline nits.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/1cc8222bad567be65deb6068eeb3ef54228fa8fe',
        },
        {
          sha: 'f8f4a9eda4c5fb91bd122e05ec152a1ad547bd29',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove bind module.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/f8f4a9eda4c5fb91bd122e05ec152a1ad547bd29',
        },
        {
          sha: 'c59f40adeccf4fe561bff71e1f73372c2dc3a7bd',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Remove unneeded var assignments.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/c59f40adeccf4fe561bff71e1f73372c2dc3a7bd',
        },
        {
          sha: '89e703a75d54fa42a4adc578b23ef901b7e300ff',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add createSourceMap() to shared.module cache.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/89e703a75d54fa42a4adc578b23ef901b7e300ff',
        },
        {
          sha: '47cc3b18ca4299fb236d3555a07e0b06bdb98095',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.32.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/47cc3b18ca4299fb236d3555a07e0b06bdb98095',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T06:51:00Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7647752878',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2549563455,
      size: 7,
      distinct_size: 7,
      ref: 'refs/heads/master',
      head: '0b8268f23c234080255ded5f115e1e4a5705f101',
      before: 'b7ae37181086bdcf43e858f101775d8210b95e70',
      commits: [
        {
          sha: '324d91c7378a6391bd7192dacf0cb5c2314f732d',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Set prototype of global repl.context.module in repl test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/324d91c7378a6391bd7192dacf0cb5c2314f732d',
        },
        {
          sha: '4572ff647071265c2090ea00d3694819628c6f0c',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Module constructor usage nit in test.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/4572ff647071265c2090ea00d3694819628c6f0c',
        },
        {
          sha: 'ab6bfd2f1d8801032bca6fb843f9d21e2c089eb6',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Use Package.state.cache[""] for builtin modules.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/ab6bfd2f1d8801032bca6fb843f9d21e2c089eb6',
        },
        {
          sha: '4cf5770ea0842a055a2edc57d01f2af1ae57997e',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Avoid augmenting builtin function exports.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/4cf5770ea0842a055a2edc57d01f2af1ae57997e',
        },
        {
          sha: '1730499c6b1bc024722ccdb55ff75372d746b6c7',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Move builtin check higher.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/1730499c6b1bc024722ccdb55ff75372d746b6c7',
        },
        {
          sha: '08a4acb01d6dc80738b2daa112aedcd681ecc006',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Add shared.reloaded flag.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/08a4acb01d6dc80738b2daa112aedcd681ecc006',
        },
        {
          sha: '0b8268f23c234080255ded5f115e1e4a5705f101',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.32.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/0b8268f23c234080255ded5f115e1e4a5705f101',
        },
      ],
    },
    public: true,
    created_at: '2018-05-09T06:06:08Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7646934523',
    type: 'IssueCommentEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'created',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3782',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/events',
        html_url: 'https://github.com/lodash/lodash/issues/3782',
        id: 321388530,
        number: 3782,
        title: 'Security Vulnerability Prototype Pollution',
        user: {
          login: 'xlcrr',
          id: 25985241,
          avatar_url: 'https://avatars0.githubusercontent.com/u/25985241?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/xlcrr',
          html_url: 'https://github.com/xlcrr',
          followers_url: 'https://api.github.com/users/xlcrr/followers',
          following_url:
            'https://api.github.com/users/xlcrr/following{/other_user}',
          gists_url: 'https://api.github.com/users/xlcrr/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/xlcrr/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/xlcrr/subscriptions',
          organizations_url: 'https://api.github.com/users/xlcrr/orgs',
          repos_url: 'https://api.github.com/users/xlcrr/repos',
          events_url: 'https://api.github.com/users/xlcrr/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/xlcrr/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-09T00:15:08Z',
        updated_at: '2018-05-09T00:50:43Z',
        closed_at: '2018-05-09T00:34:10Z',
        author_association: 'NONE',
        body:
          'Hi,\r\n\r\nI am just getting started with react-native and installed this package:\r\n\r\nhttps://github.com/NewOldMax/react-native-validator-form/issues/3\r\n\r\nI was prompted with 4 vulnerabilities, one of which links to lodash.\r\n\r\nMore info for lodash vulnerability:\r\nhttps://nodesecurity.io/advisories/577\r\n\r\nsays \r\n\r\nUpdate to version 4.17.5 or later.\r\n\r\nI am running "lodash": "^4.17.10"\r\n\r\nCan anyone advise on how to proceed? Thanks ',
      },
      comment: {
        url:
          'https://api.github.com/repos/lodash/lodash/issues/comments/387586424',
        html_url:
          'https://github.com/lodash/lodash/issues/3782#issuecomment-387586424',
        issue_url: 'https://api.github.com/repos/lodash/lodash/issues/3782',
        id: 387586424,
        user: {
          login: 'jdalton',
          id: 4303,
          avatar_url: 'https://avatars2.githubusercontent.com/u/4303?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/jdalton',
          html_url: 'https://github.com/jdalton',
          followers_url: 'https://api.github.com/users/jdalton/followers',
          following_url:
            'https://api.github.com/users/jdalton/following{/other_user}',
          gists_url: 'https://api.github.com/users/jdalton/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/jdalton/starred{/owner}{/repo}',
          subscriptions_url:
            'https://api.github.com/users/jdalton/subscriptions',
          organizations_url: 'https://api.github.com/users/jdalton/orgs',
          repos_url: 'https://api.github.com/users/jdalton/repos',
          events_url: 'https://api.github.com/users/jdalton/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/jdalton/received_events',
          type: 'User',
          site_admin: false,
        },
        created_at: '2018-05-09T00:50:43Z',
        updated_at: '2018-05-09T00:50:43Z',
        author_association: 'OWNER',
        body: "Hi!\r\n\r\nYou're prolly seeing the warning for a dep of a dap.",
      },
    },
    public: true,
    created_at: '2018-05-09T00:50:43Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7646892567',
    type: 'IssuesEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 3955647,
      name: 'lodash/lodash',
      url: 'https://api.github.com/repos/lodash/lodash',
    },
    payload: {
      action: 'closed',
      issue: {
        url: 'https://api.github.com/repos/lodash/lodash/issues/3782',
        repository_url: 'https://api.github.com/repos/lodash/lodash',
        labels_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/labels{/name}',
        comments_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/comments',
        events_url:
          'https://api.github.com/repos/lodash/lodash/issues/3782/events',
        html_url: 'https://github.com/lodash/lodash/issues/3782',
        id: 321388530,
        number: 3782,
        title: 'Security Vulnerability Prototype Pollution',
        user: {
          login: 'xlcrr',
          id: 25985241,
          avatar_url: 'https://avatars0.githubusercontent.com/u/25985241?v=4',
          gravatar_id: '',
          url: 'https://api.github.com/users/xlcrr',
          html_url: 'https://github.com/xlcrr',
          followers_url: 'https://api.github.com/users/xlcrr/followers',
          following_url:
            'https://api.github.com/users/xlcrr/following{/other_user}',
          gists_url: 'https://api.github.com/users/xlcrr/gists{/gist_id}',
          starred_url:
            'https://api.github.com/users/xlcrr/starred{/owner}{/repo}',
          subscriptions_url: 'https://api.github.com/users/xlcrr/subscriptions',
          organizations_url: 'https://api.github.com/users/xlcrr/orgs',
          repos_url: 'https://api.github.com/users/xlcrr/repos',
          events_url: 'https://api.github.com/users/xlcrr/events{/privacy}',
          received_events_url:
            'https://api.github.com/users/xlcrr/received_events',
          type: 'User',
          site_admin: false,
        },
        labels: [],
        state: 'closed',
        locked: false,
        assignee: null,
        assignees: [],
        milestone: null,
        comments: 0,
        created_at: '2018-05-09T00:15:08Z',
        updated_at: '2018-05-09T00:34:10Z',
        closed_at: '2018-05-09T00:34:10Z',
        author_association: 'NONE',
        body:
          'Hi,\r\n\r\nI am just getting started with react-native and installed this package:\r\n\r\nhttps://github.com/NewOldMax/react-native-validator-form/issues/3\r\n\r\nI was prompted with 4 vulnerabilities, one of which links to lodash.\r\n\r\nMore info for lodash vulnerability:\r\nhttps://nodesecurity.io/advisories/577\r\n\r\nsays \r\n\r\nUpdate to version 4.17.5 or later.\r\n\r\nI am running "lodash": "^4.17.10"\r\n\r\nCan anyone advise on how to proceed? Thanks ',
      },
    },
    public: true,
    created_at: '2018-05-09T00:34:11Z',
    org: {
      id: 2565403,
      login: 'lodash',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/lodash',
      avatar_url: 'https://avatars.githubusercontent.com/u/2565403?',
    },
  },
  {
    id: '7646359022',
    type: 'CreateEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      ref: '3.0.32',
      ref_type: 'tag',
      master_branch: 'master',
      description: "Tomorrow's ECMAScript modules today!",
      pusher_type: 'user',
    },
    public: true,
    created_at: '2018-05-08T21:48:17Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
  {
    id: '7646358542',
    type: 'PushEvent',
    actor: {
      id: 4303,
      login: 'jdalton',
      display_login: 'jdalton',
      gravatar_id: '',
      url: 'https://api.github.com/users/jdalton',
      avatar_url: 'https://avatars.githubusercontent.com/u/4303?',
    },
    repo: {
      id: 92424220,
      name: 'standard-things/esm',
      url: 'https://api.github.com/repos/standard-things/esm',
    },
    payload: {
      push_id: 2548794264,
      size: 2,
      distinct_size: 2,
      ref: 'refs/heads/master',
      head: 'b7ae37181086bdcf43e858f101775d8210b95e70',
      before: '8b072131c3e648a1eddb84a818483e9dffc441b6',
      commits: [
        {
          sha: '024971ecf69f81324c0185ac62d77cda1bb777cf',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Cleanup and document mock support in runtime.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/024971ecf69f81324c0185ac62d77cda1bb777cf',
        },
        {
          sha: 'b7ae37181086bdcf43e858f101775d8210b95e70',
          author: {
            email: 'john.david.dalton@gmail.com',
            name: 'John-David Dalton',
          },
          message: 'Bump to v3.0.32.',
          distinct: true,
          url:
            'https://api.github.com/repos/standard-things/esm/commits/b7ae37181086bdcf43e858f101775d8210b95e70',
        },
      ],
    },
    public: true,
    created_at: '2018-05-08T21:48:11Z',
    org: {
      id: 26613658,
      login: 'standard-things',
      gravatar_id: '',
      url: 'https://api.github.com/orgs/standard-things',
      avatar_url: 'https://avatars.githubusercontent.com/u/26613658?',
    },
  },
];
