import store from "../store";

import {
  SET_ACTIVITIES
} from "../types";

export const setActivities = (activities) => {
  store.dispatch({
    type: SET_ACTIVITIES,
    activities: activities
  });
}

export const fetchActivities = () => {
  return fetch("/api/activities", {
    method: "GET",
    credentials: "same-origin"
  })
  .then(res => res.json())
  .then(res => {
    if (res.activities) {
      setActivities(res.activities);
    }
  });
}
