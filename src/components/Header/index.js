import React from 'react';
import styled from 'styled-components';
import A from '../A';
import logo from './logo.svg';

const HeaderWrapper = styled.div`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const LogoWrapper = styled.img`
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const Header = () => (
  <HeaderWrapper>
    <header className="App-header">
      <LogoWrapper src={logo} alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <A href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        Learn React
      </A>
    </header>{' '}
  </HeaderWrapper>
);

export default Header;
