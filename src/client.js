import 'babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/lib/createBrowserHistory';
import useScroll from 'scroll-behavior/lib/useStandardScroll';
import {Provider} from 'react-redux';
import {reduxReactRouter, ReduxRouter} from 'redux-router';
import FontFaceObserver from 'fontfaceobserver';

import getRoutes from './routes';
import createStore from './createStore';
import makeRouteHooksSafe from './utils/makeRouteHooksSafe';
import ApiClient from './utils/ApiClient';
import {View} from './components';

import './styles/base.css';

const helveticaObserver = new FontFaceObserver('Helvetica neue', {});

helveticaObserver.check().then(() => {
  document.body.classList.add('js-helvetica-loaded');
}, () => {
  document.body.classList.remove('js-helvetica-loaded');
});

const client = new ApiClient();

// Three different types of scroll behavior available.
// Documented here: https://github.com/rackt/scroll-behavior
const scrollableHistory = useScroll(createHistory);

const mountNode = document.getElementById('content');
const store = createStore(reduxReactRouter, makeRouteHooksSafe(getRoutes), scrollableHistory, client, window.__data);

const component = (
  <ReduxRouter routes={getRoutes(store)} />
);

ReactDOM.render(
  <Provider store={store} key='provider'>
    {component}
  </Provider>,
  mountNode
);

if (process.env.NODE_ENV !== 'production') {
  window.React = React; // enable debugger

  if (!mountNode || !mountNode.firstChild || !mountNode.firstChild.attributes || !mountNode.firstChild.attributes['data-react-checksum']) {
    console.error('Server-side React render was discarded. Make sure that your initial render does not contain any client-side code.');
  }
}

if (__DEVTOOLS__ && !window.devToolsExtension) {
  const DevTools = require('./containers/DevTools');
  ReactDOM.render(
    <Provider store={store} key='provider'>
      <View size='fill-height'>
        {component}
        <DevTools />
      </View>
    </Provider>,
    mountNode
  );
}
