import { createStore, createEffect } from "effector";

interface Book {
  id: number;
  author: string;
  name: string;
}

export const fetchBooks = createEffect<string, Book[], Error>({
  async handler(url) {
    const req = await fetch(url);
    return req.json();
  }
});

export const $allBooks = createStore<Book[]>([]).on(
  fetchBooks.done,
  (state, { result }) => result
);

fetchBooks.pending.watch(pending => {
  console.log(pending); // false
});

fetchBooks.done.watch(({ params, result }) => {
  console.log(params);
  console.log(result); // resolved value
});

fetchBooks.fail.watch(({ params, error }) => {
  console.error(params);
  console.error(error);
});
