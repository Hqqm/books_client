import { createStore, createEffect, createEvent } from "effector";
import { $token } from "@features/shared/token";

type Book = {
  id: number;
  author: string;
  name: string;
  price: string;
};

export const pageReady = createEvent();
export const fetchBooks = createEffect<void, Book[], Error>();

export const $allBooks = createStore<Book[]>([]);

$allBooks.on(fetchBooks.done, (_, { result }) => result);

fetchBooks.use(async () => {
  const req = await fetch("/api/books", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  return req.json();
});

pageReady.watch(() => {
  fetchBooks();
});
