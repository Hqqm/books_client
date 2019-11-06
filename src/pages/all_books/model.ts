import { createEvent, createEffect, createStore } from "effector";
import { Book } from "@api/books";
import { $token } from "@features/shared/token";

export const userBooksPageMounted = createEvent("user-books page mounted");
export const loadAllUsersBooks = createEffect<void, Book[], Error>(
  "load all books for user"
);
export const $userAllBooks = createStore<Book[]>([]);

loadAllUsersBooks.use(async () => {
  const response = await fetch("/api/allBooks", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  return response.json();
});

$userAllBooks.on(loadAllUsersBooks.done, (_, { result }) => result);

userBooksPageMounted.watch(() => {
  loadAllUsersBooks();
});
