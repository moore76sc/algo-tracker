/**
 * @module index.js
 * @description Root reducer
 */

import { combineReducers } from 'redux';
import trackerTableReducer from './trackerTableReducer';

const reducers = combineReducers({
  algos: trackerTableReducer
});

export default reducers;