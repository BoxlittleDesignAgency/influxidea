import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createBrowserHistory, createMemoryHistory } from 'history';

import WOW from 'wow.js/dist/wow.js';
import './styles/styles.scss';

import InfluxideaHome from './components/influxidea-home';




const render = (_App) => {
  let history;
  if (typeof (window) !== 'undefined') {
    history = createBrowserHistory();
  } else {
    history = createMemoryHistory(); //This kind of history is needed for server-side rendering.
  }
  ReactDOM.render(
    <BrowserRouter>
      <_App />
    </BrowserRouter>, document.getElementById('app'));
};

if (module.hot) {
  module.hot.accept('./components/influxidea-home', () => {
    const NextApp = require('./components/influxidea-home').default;
    render(NextApp);
  });
}

render(InfluxideaHome);
