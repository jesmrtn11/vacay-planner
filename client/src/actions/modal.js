import store from "../store";

import {
  SET_MODAL
} from "../types";

export const setModal = (modal) => {
  store.dispatch({
    type: SET_MODAL,
    ...modal
  });
}
