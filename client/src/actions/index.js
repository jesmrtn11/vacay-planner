import store from "../store";

import {
  SET_USER
} from "../types";

export const fetchUser = () => {
  return fetch("/api/users", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.user) {
      setUser(res.user);
    }
  });
}


