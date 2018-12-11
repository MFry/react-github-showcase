import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import RadialBarChart from 'components/RadialRepoChart';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import { makeSelectReposStats } from './selectors';

const Section = styled.div`
  display: flex;
  align-items: center;
  height: 50vh;
  &:first-child {
    margin-top: 0;
  }
`;
type Props = {
  data: Array<Object> | boolean,
};
const Visualizations = ({ data }: Props) => {
  if (data !== false) {
    return (
      <Section>
        <RadialBarChart title="Repo Statistics" data={data} />
      </Section>
    );
  }
  return null;
};
const mapStateToProps = createStructuredSelector({
  data: makeSelectReposStats(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Visualizations);
