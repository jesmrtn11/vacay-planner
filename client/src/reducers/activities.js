import { SET_ACTIVITIES } from "../types";

const initialState = [];

export default (state = initialState, action)  => {
  switch (action.type) {
    case SET_ACTIVITIES:
      return action.activities;
    default: 
      return state
  }
}
