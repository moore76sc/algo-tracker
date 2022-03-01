/**
 * @module store.js
 * @description Redux store
 */

import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers/index';

const store = createStore(reducers);

export default store;