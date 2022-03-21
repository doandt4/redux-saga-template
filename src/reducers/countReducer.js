import { DECREMENT_COUNT } from "actions/Count/actionTypes";
import { INCREMENT_COUNT } from "actions/Count/actionTypes";

const initialState = 0;

const incrementCount = (state, action) => {
  return state + 1;
};

const decrementCount = (state, action) => {
  return state - 1;
};

const countReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_COUNT:
      return incrementCount(state, action);
    case DECREMENT_COUNT:
      return decrementCount(state, action);
    default:
      return state;
  }
};

export default countReducer;
