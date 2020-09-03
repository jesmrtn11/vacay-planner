import store from "../store";

import {
  SET_USERS
} from "../types";

export const setUsers = (users) => {
  store.dispatch({
    type: SET_USERS,
    users: users
  });
}

export const fetchUsers = () => {
  return fetch("/api/users", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.users) {
      setUsers(res.users);
    }
  });
}
