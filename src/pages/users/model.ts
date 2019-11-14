import { createEffect, createStore, createEvent, sample } from "effector";
import { $token } from "@features/shared/token";

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  created_at: string;
};

export const usersPageMounted = createEvent("user page mounted");

export const fetchUsers = createEffect<void, User[], Error>(
  "fetching all users"
);
export const deleteUser = createEffect<number, void, Error>(
  "deleting user by id"
);

export const $users = createStore<User[]>([]);

fetchUsers.use(async () => {
  const data = await fetch(`/api/users`, {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  const users = await data.json();
  return users;
});

deleteUser.use(async id => {
  await fetch(`/api/users/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
});

$users
  .on(fetchUsers.done, (_, { result }) => result)
  .on(deleteUser.done, (state, { params }) =>
    state.filter(user => user.id !== params)
  );

usersPageMounted.watch(() => {
  fetchUsers();
});
