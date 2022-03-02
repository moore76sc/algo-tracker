import * as types from '../constants/action_types.js';

const initialState = {
  algoList: [],
}

const trackerTableReducer = (state = initialState, action) => {
  let algoList;
  console.log('table reducer fire')

  switch (action.type) {
    case types.GET_ALL_ALGOS:
      algoList = state.algoList.slice();
      algoList.push(...action.payload);
      return {
        ...state,
        algoList
      };

    default:
      return state;
  }
}

export default trackerTableReducer;