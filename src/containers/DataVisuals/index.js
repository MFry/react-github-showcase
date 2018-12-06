import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import PieChart from 'components/PieChart';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';

const Section = styled.section`
  margin: 3em auto;
  color: #292b2c;

  &:first-child {
    margin-top: 0;
  }
`;
type Props = {
  repos: Array<Object> | boolean,
};
const Visualizations = ({ repos = [] }: Props) => {
  const dataPoints = [
    { label: 'Forks', value: 0 },
    { label: 'Issues', value: 0 },
    { label: 'StarGazers', value: 0 },
  ];
  if (repos !== false) {
    repos.forEach(repo => {
      // Add Fork
      dataPoints[0].value += repo.forks;
      // Add Issue
      dataPoints[1].value += repo.open_issues_count;
      // Add StarGazers
      dataPoints[2].value += repo.stargazers_count;
    });
    return (
      <Section>
        <PieChart title="Repo Statistics" dataPoints={dataPoints} />
      </Section>
    );
  }
  return null;
};
const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

const withConnect = connect(mapStateToProps);

export default compose(withConnect)(Visualizations);
