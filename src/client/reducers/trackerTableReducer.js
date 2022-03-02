import * as types from '../constants/action_types.js';

const initialState = {
algoList: [],

}

const trackerTableReducer = (state = initialState, action) => {
  const newState = {...state}
  switch(action.type) {
    case types.GET_ALL_ALGOS: {
      newState.algoList.push(...action.payload);
      console.log('newState',newState.algoList)
      return {
        ...newState,
      };
    }
      default: {
        return state;
    
    }
  }
}

export default trackerTableReducer;