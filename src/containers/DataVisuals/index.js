import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import RadialBarChart from 'components/RadialStatChart';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectReposStats, makeSelectEventsStats } from './selectors';

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  &:first-child {
    margin-top: 0;
  }
`;
type Props = {
  repoStats: Array<Object> | boolean,
  eventStats: Array<Object> | boolean,
};
const Visualizations = ({ repoStats, eventStats }: Props) => {
  if (repoStats !== false) {
    return (
      <Section>
        <RadialBarChart title="Repos Statistics" data={repoStats} />
        <RadialBarChart title="Events Statistics" data={eventStats} />
      </Section>
    );
  }
  return null;
};
const mapStateToProps = createStructuredSelector({
  repoStats: makeSelectReposStats(),
  eventStats: makeSelectEventsStats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Visualizations);
