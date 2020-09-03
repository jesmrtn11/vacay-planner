export * from "./users";
import { fetchUsers } from "./users";

export const init = () => {
  fetchUsers();
}


