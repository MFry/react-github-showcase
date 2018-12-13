// @flow
import * as React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
  background-color: #282c34;
  min-height: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

// eslint-disable-next-line react/require-default-props
const Header = ({ children }: { children?: React.Node }) => (
  <HeaderWrapper>{children}</HeaderWrapper>
);

export default Header;
