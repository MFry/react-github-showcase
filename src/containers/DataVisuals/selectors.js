import { createSelector } from 'reselect';

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
        const dataPoints = [
          { name: 'Forks', value: 0 },
          { name: 'Issues', value: 0 },
          { name: 'StarGazers', value: 0 },
        ];
        repos.forEach(repo => {
          // Add Fork
          dataPoints[0].value += repo.forks;
          // Add Issue
          dataPoints[1].value += repo.open_issues_count;
          // Add StarGazers
          dataPoints[2].value += repo.stargazers_count;
        });
        return dataPoints;
      }
      return false;
    },
  );

// eslint-disable-next-line import/prefer-default-export
export { makeSelectReposStats };
