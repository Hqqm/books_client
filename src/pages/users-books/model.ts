import { createEvent, createEffect, createStore } from "effector";
import { Book } from "@api/books";
import { $token } from "@features/shared/token";

export const userBooksPageMounted = createEvent("user-books page mounted");

export const deleteUserBook = createEffect<number, void, Error>(
  "deleting user book by id"
);
export const loadAllUsersBooks = createEffect<void, Book[], Error>(
  "load all books for user"
);

export const $userAllBooks = createStore<Book[]>([]);

deleteUserBook.use(async id => {
  await fetch(`/api/userBooks/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
});

loadAllUsersBooks.use(async () => {
  const response = await fetch("/api/userBooks", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  return response.json();
});

$userAllBooks
  .on(loadAllUsersBooks.done, (_, { result }) => result)
  .on(deleteUserBook.done, (state, { params }) =>
    state.filter(book => book.id !== params)
  );

userBooksPageMounted.watch(() => {
  loadAllUsersBooks();
});
