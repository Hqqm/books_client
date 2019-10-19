import { createStore, createEffect } from "effector";
import { $token } from "@features/shared/token";

type Book = {
  id: number;
  author: string;
  name: string;
  price: string;
};

export const fetchBooks = createEffect<string, Book[], Error>();

export const $allBooks = createStore<Book[]>([]);

$allBooks.on(fetchBooks.done, (_, { result }) => result);

fetchBooks.use(async url => {
  const req = await fetch(url, {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  return req.json();
});

const unsubscribe = fetchBooks.watch(payload => {
  unsubscribe();
});
