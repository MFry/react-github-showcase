/**
 * Gets the repositories of the user from Github
 */

import { call, put, select, takeLatest } from 'redux-saga/effects';
import {
  reposLoaded,
  repoLoadingError,
  eventsLoaded,
  eventsLoadingError,
} from 'containers/App/actions';

import { LOAD_REPOS, LOAD_EVENTS } from 'containers/App/constants';
import { makeSelectUsername } from 'containers/HomePage/selectors';
import request from 'utils/request';

/**
 * Github repos request/response handler
 */
export function* getRepos() {
  // Select username from store
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/repos?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const repos = yield call(request, requestURL);
    yield put(reposLoaded(repos, username));
  } catch (err) {
    yield put(repoLoadingError(err));
  }
}

/**
 * Github events request/response handler
 */
export function* getEvents() {
  const username = yield select(makeSelectUsername());
  const requestURL = `https://api.github.com/users/${username}/events?type=all&sort=updated?per_page=100`;

  try {
    const events = yield call(request, requestURL);
    yield put(eventsLoaded(events, username));
  } catch (err) {
    yield put(eventsLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* githubData() {
  // Watches for LOAD_REPOS and LOAD_EVENTS actions and calls getRepos or getEvents
  // when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield takeLatest(LOAD_REPOS, getRepos);
  yield takeLatest(LOAD_EVENTS, getEvents);
}
