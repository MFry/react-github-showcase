import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Code from 'components/Code';
import { makeSelectUsername } from './selectors';
import Hero from './Hero';

const Title = styled.h1`
  margin-top: 20%;
`;

const IntroBanner = ({ username }: { username: string }) => (
  <Hero>
    <Title>
      <Code>
        @{username}
        {"'s"}
      </Code>{' '}
      portfolio
    </Title>
    <p />
  </Hero>
);

const mapStateToProps = createStructuredSelector({
  username: makeSelectUsername(),
});
export { IntroBanner };
export default connect(mapStateToProps)(IntroBanner);
