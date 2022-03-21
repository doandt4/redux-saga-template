import { DECREMENT_COUNT, INCREMENT_COUNT } from "./actionTypes";

export const incrementCount = () => ({
  type: INCREMENT_COUNT,
});

export const decrementCount = () => ({
  type: DECREMENT_COUNT,
});
