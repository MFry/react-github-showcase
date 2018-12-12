import { createSelector } from 'reselect';

const base10Radix = 10;
const selectGlobal = state => state.get('global');

/**
 * Aggregate stats (stars, issues, and forks) from all Repos that are under the user
 */
const makeSelectReposStats = () =>
  createSelector(
    selectGlobal,
    globalState => {
      const repos = globalState.getIn(['userData', 'repositories']);
      if (repos !== false) {
        const data = [
          { name: 'Forks', value: 0, fill: '#8884d8' },
          { name: 'Issues', value: 0, fill: '#83a6ed' },
          { name: 'StarGazers', value: 0, fill: '#8dd1e1' },
        ];
        repos.forEach(repo => {
          // Add Fork
          data[0].value += parseInt(repo.forks, base10Radix);
          // Add Issue
          data[1].value += parseInt(repo.open_issues_count, base10Radix);
          // Add StarGazers
          data[2].value += parseInt(repo.stargazers_count, base10Radix);
        });
        return data;
      }
      return false;
    },
  );

const makeSelectEventsStats = () =>
  createSelector(
    selectGlobal,
    globalState => {
      const events = globalState.getIn(['userData', 'events']);
      if (events !== false) {
        const data = [
          { name: 'Pull Requests', value: 0, fill: '#FF7F50' },
          { name: 'Comments', value: 0, fill: '#FF4500' },
          { name: 'Push Commit', value: 0, fill: '#FF8C00' },
          { name: 'Miscellaneous', value: 0, fill: '#000000' },
        ];
        events.forEach(e => {
          switch (e.type) {
            case 'PullRequestEvent':
              data[0].value += 1;
              break;
            case 'IssueCommentEvent':
              data[1].value += 1;
              break;
            case 'PushEvent':
              data[2].value += 1;
              break;
            default:
              data[3].value += 1;
              break;
          }
        });
        return data;
      }
      return false;
    },
  );

export { makeSelectReposStats, makeSelectEventsStats };
