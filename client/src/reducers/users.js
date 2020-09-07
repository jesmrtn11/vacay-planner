import { SET_USERS } from "../types";

const initialState = [];

export default (state = initialState, action)  => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default: 
      return state
  }
}
