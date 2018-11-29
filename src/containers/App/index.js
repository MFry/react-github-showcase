import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';

const AppWrapper = styled.div`
  text-align: center;
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Roboto', 'Oxygen', 'Ubuntu',
    'Segoe UI', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const AppContentWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

const App = () => (
  <AppWrapper>
    <Helmet
      titleTemplate="%s - React.js powered"
      defaultTitle="Simple Portfolio"
    >
      <meta
        name="description"
        content="Webapp powered by Github to showcase work done."
      />
    </Helmet>
    <Header />
    <AppContentWrapper>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="" component={NotFoundPage} />
      </Switch>
    </AppContentWrapper>
  </AppWrapper>
);

export default App;
