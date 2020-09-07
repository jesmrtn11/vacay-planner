import { RESET_MODAL, SET_MODAL, CLOSE_MODAL } from "../types";
import { resetModal } from "../actions";

const initialState = {
  show:      false,
  startDate: "",
  endDate:   "",
  type:      "",
  userId:    null
};

export default (state = initialState, action)  => {
  switch (action.type) {
    case RESET_MODAL:
      return initialState;

    case SET_MODAL:
      let reset = initialState;
      return {
        ...reset,
        ...action.modal
      };

    case CLOSE_MODAL:
      return {
        ...state,
        show: false
      };

    default: 
      return state
  }
}
