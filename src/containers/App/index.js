import React from 'react';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';
import Header from 'components/Header';
import Footer from 'components/Footer';
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
    <Switch>
      <Route
        exact
        path="/"
        render={() => <HomePage initialSetUsername="jdalton" />}
      />
      <Route path="" component={NotFoundPage} />
    </Switch>
    <Footer />
  </AppWrapper>
);

export default App;
