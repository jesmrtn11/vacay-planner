import { SET_DATES } from "../types";

const initialState = [];

export default (state = initialState, action)  => {
  switch (action.type) {
    case SET_DATES:
      return action.dates;
    default: 
      return state
  }
}
