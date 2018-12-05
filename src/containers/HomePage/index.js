/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import Intro from 'containers/Intro';
import ReposList from 'components/ReposList';
import CardCarousel from 'components/CardCarousel';
import Section from './Section';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';

type Props = {
  loading: boolean,
  error: Object | boolean,
  repos: Array<Object> | boolean,
  onSubmitForm: Function,
  username: string,
  initialSetUsername: string,
  onChangeUsername: Function,
};

/* eslint-disable react/prefer-stateless-function */
export class HomePage extends React.PureComponent<Props> {
  /**
   * when initial state username is not null, submit the form to load repos
   */
  componentDidMount() {
    const {
      username,
      onSubmitForm,
      onChangeUsername,
      initialSetUsername,
    } = this.props;
    if (initialSetUsername && initialSetUsername.trim().length > 0) {
      const mockEvent = { target: { value: initialSetUsername } };
      onChangeUsername(mockEvent);
      onSubmitForm();
    }
    if (username && username.trim().length > 0) {
      onSubmitForm();
    }
  }

  render() {
    const { loading, error, repos } = this.props;
    const reposListProps = {
      loading,
      error,
      repos,
    };

    return (
      <article>
        <Helmet>
          <title>Home Page</title>
          <meta name="description" content="A React.js Github API interface" />
        </Helmet>
        <Intro />
        <Section style={{ paddingLeft: '2vw', paddingRight: '2vw' }}>
          <CardCarousel {...reposListProps} />
        </Section>
        <Section>
          <ReposList {...reposListProps} />
        </Section>
      </article>
    );
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'home', reducer });
const withSaga = injectSaga({ key: 'home', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(HomePage);
