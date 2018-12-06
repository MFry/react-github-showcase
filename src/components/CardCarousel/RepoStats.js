import React from 'react';
import styled from 'styled-components';
import IssueIcon from 'components/IssueIcon';
import Star from '@material-ui/icons/Star';

const Wrapper = styled.div`
  display: flex;
`;

const StatWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  align-items: center;
`;

const Spacer = styled.span`
  padding-left: 0.5rem;
  padding-right: 0.5rem;
`;

const RepoStats = (starCount, issueCount) => (
  <Wrapper>
    <StatWrapper>
      <Star /> {starCount}
      <Spacer />
      <IssueIcon /> {issueCount}
    </StatWrapper>
  </Wrapper>
);

export default RepoStats;
