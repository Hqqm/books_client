import { createStore, createEffect } from "effector";

interface Book {
  id: number;
  author: string;
  name: string;
  price: string;
}

export const fetchBooks = createEffect<string, Book[], Error>();

export const $allBooks = createStore<Book[]>([]);

$allBooks.on(fetchBooks.done, (_, { result }) => result);

fetchBooks.use(async url => {
  const req = await fetch(url);
  return req.json();
});

const unsubscribe = fetchBooks.watch(payload => {
  console.log("called with", payload);
  unsubscribe();
});

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
