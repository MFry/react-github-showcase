import React from 'react';
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

// eslint-disable-next-line no-unused-vars
const LogoWrapper = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 5vmin;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Header = () => <HeaderWrapper />;

export default Header;
