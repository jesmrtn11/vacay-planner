export * from "./users";
export * from "./dates";

import { fetchUsers } from "./users";
import { fetchDates } from "./dates";

export const init = () => {
  fetchUsers();
  fetchDates();
}


