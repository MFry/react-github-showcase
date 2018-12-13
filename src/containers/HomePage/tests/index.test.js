/**
 * Test the HomePage
 *  Known issue: Warning: Failed prop type... Ref: https://github.com/didierfranc/react-waterfall/issues/35
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { Provider } from 'react-redux';
import { fromJS } from 'immutable';
import configureMockStore from 'redux-mock-store';

import CardCarousel from 'components/CardCarousel';
import DataVisuals from 'containers/DataVisuals';
import { HomePage, mapDispatchToProps } from '../index';
import { changeUsername } from '../actions';
import { initialState as initialAppState } from '../../App/reducer';
import { loadRepos } from '../../App/actions';

describe('<HomePage />', () => {
  const mockStore = configureMockStore();
  const initialState = fromJS({
    global: initialAppState,
    home: {},
    router: {},
  });
  const store = mockStore(initialState);

  it('should render the card repos list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} repos={[]} />,
    );
    expect(
      renderedComponent.contains(
        <CardCarousel loading error={false} repos={[]} />,
      ),
    ).toEqual(true);
  });

  it('should render the data visuals', () => {
    const newState = initialState
      .setIn(
        ['userData', 'repositories'],
        [
          {
            id: 1835403,
            name: 'docdown',
            full_name: 'jdalton/docdown',
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
            html_url: 'https://github.com/jdalton/docdown',
            description: 'A simple JSDoc to Markdown generator.',
            fork: false,
            url: 'https://api.github.com/repos/jdalton/docdown',
            forks_url: 'https://api.github.com/repos/jdalton/docdown/forks',
            keys_url:
              'https://api.github.com/repos/jdalton/docdown/keys{/key_id}',
            collaborators_url:
              'https://api.github.com/repos/jdalton/docdown/collaborators{/collaborator}',
            teams_url: 'https://api.github.com/repos/jdalton/docdown/teams',
            hooks_url: 'https://api.github.com/repos/jdalton/docdown/hooks',
            issue_events_url:
              'https://api.github.com/repos/jdalton/docdown/issues/events{/number}',
            events_url: 'https://api.github.com/repos/jdalton/docdown/events',
            assignees_url:
              'https://api.github.com/repos/jdalton/docdown/assignees{/user}',
            branches_url:
              'https://api.github.com/repos/jdalton/docdown/branches{/branch}',
            tags_url: 'https://api.github.com/repos/jdalton/docdown/tags',
            blobs_url:
              'https://api.github.com/repos/jdalton/docdown/git/blobs{/sha}',
            git_tags_url:
              'https://api.github.com/repos/jdalton/docdown/git/tags{/sha}',
            git_refs_url:
              'https://api.github.com/repos/jdalton/docdown/git/refs{/sha}',
            trees_url:
              'https://api.github.com/repos/jdalton/docdown/git/trees{/sha}',
            statuses_url:
              'https://api.github.com/repos/jdalton/docdown/statuses/{sha}',
            languages_url:
              'https://api.github.com/repos/jdalton/docdown/languages',
            stargazers_url:
              'https://api.github.com/repos/jdalton/docdown/stargazers',
            contributors_url:
              'https://api.github.com/repos/jdalton/docdown/contributors',
            subscribers_url:
              'https://api.github.com/repos/jdalton/docdown/subscribers',
            subscription_url:
              'https://api.github.com/repos/jdalton/docdown/subscription',
            commits_url:
              'https://api.github.com/repos/jdalton/docdown/commits{/sha}',
            git_commits_url:
              'https://api.github.com/repos/jdalton/docdown/git/commits{/sha}',
            comments_url:
              'https://api.github.com/repos/jdalton/docdown/comments{/number}',
            issue_comment_url:
              'https://api.github.com/repos/jdalton/docdown/issues/comments{/number}',
            contents_url:
              'https://api.github.com/repos/jdalton/docdown/contents/{+path}',
            compare_url:
              'https://api.github.com/repos/jdalton/docdown/compare/{base}...{head}',
            merges_url: 'https://api.github.com/repos/jdalton/docdown/merges',
            archive_url:
              'https://api.github.com/repos/jdalton/docdown/{archive_format}{/ref}',
            downloads_url:
              'https://api.github.com/repos/jdalton/docdown/downloads',
            issues_url:
              'https://api.github.com/repos/jdalton/docdown/issues{/number}',
            pulls_url:
              'https://api.github.com/repos/jdalton/docdown/pulls{/number}',
            milestones_url:
              'https://api.github.com/repos/jdalton/docdown/milestones{/number}',
            notifications_url:
              'https://api.github.com/repos/jdalton/docdown/notifications{?since,all,participating}',
            labels_url:
              'https://api.github.com/repos/jdalton/docdown/labels{/name}',
            releases_url:
              'https://api.github.com/repos/jdalton/docdown/releases{/id}',
            deployments_url:
              'https://api.github.com/repos/jdalton/docdown/deployments',
            created_at: '2011-06-02T03:24:16Z',
            updated_at: '2018-03-05T12:08:12Z',
            pushed_at: '2018-02-04T06:34:06Z',
            git_url: 'git://github.com/jdalton/docdown.git',
            ssh_url: 'git@github.com:jdalton/docdown.git',
            clone_url: 'https://github.com/jdalton/docdown.git',
            svn_url: 'https://github.com/jdalton/docdown',
            homepage: '',
            size: 223,
            stargazers_count: 166,
            watchers_count: 166,
            language: 'JavaScript',
            has_issues: true,
            has_projects: false,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 23,
            mirror_url: null,
            archived: false,
            open_issues_count: 4,
            license: {
              key: 'mit',
              name: 'MIT License',
              spdx_id: 'MIT',
              url: 'https://api.github.com/licenses/mit',
            },
            forks: 23,
            open_issues: 4,
            watchers: 166,
            default_branch: 'master',
          },
        ],
      )
      .setIn(
        ['userData', 'events'],
        [
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
        ],
      );
    const testStore = mockStore(newState);
    const renderedComponent = mount(
      <Provider store={testStore}>
        <HomePage loading={false} error={false} repos={[]} />
      </Provider>,
    );
    expect(renderedComponent.find(DataVisuals)).toHaveLength(1);
  });

  it('should render fetch the repos on mount if a username exists', () => {
    const submitSpy = jest.fn();
    mount(
      <Provider store={store}>
        <HomePage
          username="Not Empty"
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </Provider>,
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is an empty string', () => {
    const submitSpy = jest.fn();
    mount(
      <Provider store={store}>
        <HomePage
          username=""
          onChangeUsername={() => {}}
          onSubmitForm={submitSpy}
        />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  it('should not call onSubmitForm if username is null', () => {
    const submitSpy = jest.fn();
    mount(
      <Provider store={store}>
        <HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />
      </Provider>,
    );
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeUsername', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeUsername).toBeDefined();
      });

      it('should dispatch changeUsername when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const username = 'mxstbr';
        result.onChangeUsername({ target: { value: username } });
        expect(dispatch).toHaveBeenCalledWith(changeUsername(username));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should dispatch loadRepos when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        result.onSubmitForm();
        expect(dispatch).toHaveBeenCalledWith(loadRepos());
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const evt = { preventDefault };
        result.onSubmitForm(evt);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});
