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
import { loadRepos, loadEvents } from 'containers/App/actions';
import Intro from 'containers/Intro';
import CardCarousel from 'components/CardCarousel';
// eslint-disable-next-line no-unused-vars
import DataVisuals from 'containers/DataVisuals';
import Section from './Section';
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
          <meta
            name="description"
            content="A React.js Github API landing page"
          />
        </Helmet>
        <Intro />
        <Section
          style={{
            height: '30vh',
            paddingLeft: '2vw',
            paddingRight: '2vw',
          }}
        >
          <CardCarousel {...reposListProps} />
        </Section>
        <DataVisuals />
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
      dispatch(loadEvents());
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
