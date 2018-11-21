/**
 * index.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import FontFaceObserver from 'fontfaceobserver';
import './index.css';
import history from './utils/history';
import App from './containers/App/App';
import configureStore from './configureStore';
import * as serviceWorker from './serviceWorker';

// Observe loading of Roboto (to remove Roboto, remove the <link> tag in
// the index.html file and this observer)
const RobotoObserver = new FontFaceObserver('Roboto', {});

// When Roboto is loaded, add a font-family using Roboto to the body
RobotoObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);
const MOUNT_NODE = document.getElementById('root');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  MOUNT_NODE,
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
