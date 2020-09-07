import store from "../store";

import {
  RESET_MODAL,
  CLOSE_MODAL,
  SET_MODAL
} from "../types";

export const setModal = (modal) => {
  store.dispatch({
    type: SET_MODAL,
    modal: modal
  });
}

export const resetModal = () => {
  store.dispatch({
    type: RESET_MODAL
  });
}

export const closeModal = () => {
  store.dispatch({
    type: CLOSE_MODAL
  });
}
