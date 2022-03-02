import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './App.jsx';
import store from './client/store';
import './styles.css';
// require('babel-polyfill');np

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
