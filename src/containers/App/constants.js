/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const LOAD_REPOS = 'githubPortfolio/App/LOAD_REPOS';
export const LOAD_REPOS_SUCCESS = 'githubPortfolio/App/LOAD_REPOS_SUCCESS';
export const LOAD_REPOS_ERROR = 'githubPortfolio/App/LOAD_REPOS_ERROR';
export const LOAD_EVENTS = 'githubPortfolio/App/LOAD_EVENTS';
export const LOAD_EVENTS_SUCCESS = 'githubPortfolio/App/LOAD_EVENTS_SUCCESS';
export const LOAD_EVENTS_ERROR = 'githubPortfolio/App/LOAD_EVENTS_ERROR';
