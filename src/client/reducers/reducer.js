/**
 * 
 * Reducers are pure functions that take the current state and an action as arguments, and return a new state result. In other words, (state, action) => newState.
 * They should only calculate the new state value based on the state and action arguments
 * They are not allowed to modify the existing state. Instead, they must make immutable updates, by copying the existing state and making changes to the copied values.
 * They must not do any asynchronous logic or other "side effects"
 * 
 */

import * as types from '..constants/action_types';

const initialState = {

}

// need to rename this once reducers are decided
const someReducer = (state = initialState, action) => {
  switch (action.type) {
    case types. :

    case types. :

    default: {
      return state;
    }
  }
}

export default someReducer;