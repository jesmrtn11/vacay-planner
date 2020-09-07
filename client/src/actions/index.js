export * from "./activities";
export * from "./modal";
export * from "./users";

import { fetchUsers } from "./users";
import { fetchActivities } from "./activities";

export const init = () => {
  fetchUsers();
  fetchActivities();
}


