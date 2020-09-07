export * from "./users";
export * from "./activities";

import { fetchUsers } from "./users";
import { fetchActivities } from "./activities";

export const init = () => {
  fetchUsers();
  fetchActivities();
}


