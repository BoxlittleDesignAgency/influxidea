/* eslint-disable no-use-before-define */

import React from 'react';
import ReactDOMServer from 'react-dom/server';

import { ConnectedRouter } from 'react-router-redux';
import { createMemoryHistory } from 'history';

import { StaticRouter } from 'react-router-dom';
import InfluxideaHome from '../src/components/influxidea-home';

const renderCondition = (req, res) => {
  const context = {};
  const history = createMemoryHistory({
    /**
     * By setting initialEntries to the current path, the application will correctly render into the
     * right view when server rendering
     */
    initialEntries: [req.path],
});

  return (<StaticRouter  
    location={req.url}
    context={context}>
  <InfluxideaHome /> 
</StaticRouter>);
}

const serverRender = (req, res) => {
  return ReactDOMServer.renderToString( 
    renderCondition(req, res)
  );
};


export default serverRender;