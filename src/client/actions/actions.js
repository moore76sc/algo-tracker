/**
 * 
 * @module actions.js
 * @description Action creators
 * 
 * Actions are plain JavaScript objects that have a type field. As mentioned earlier, you can think of an action as an event that describes something that happened in the application.
 * 
 * 
 */

import * as types from '../constants/action_types';

export const retrieveAllAlgosActionCreator = dispatch => {
  fetch('http://localhost:3000/algo/all')
  .then(res => res.json())
  .then(res => {
    dispatch({
      type:types.GET_ALL_ALGOS,
      payload: res.entries
    })
    return;
  })
  .catch(error => {
    console.log(error);
  })
};