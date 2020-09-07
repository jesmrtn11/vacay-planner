import store from "../store";

import {
  SET_DATES
} from "../types";

export const setDates = (dates) => {
  store.dispatch({
    type: SET_DATES,
    dates: dates
  });
}

export const fetchDates = () => {
  return fetch("/api/dates", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.dates) {
      setDates(res.dates);
    }
  });
}
