import { createStore, createEffect, createEvent } from "effector";
import { history } from "@lib/history";
import { $token } from "@features/shared/token";
import { dropSession } from "@features/shared/session";

type Book = {
  id: number;
  author: string;
  name: string;
  price: string;
};

export const logout = createEvent<
  React.MouseEvent<HTMLButtonElement, MouseEvent>
>();
export const pageListOfBooksReady = createEvent();

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
  const json = req.json();
  return json;
});

pageListOfBooksReady.watch(() => {
  fetchBooks();
});

logout.watch(() => {
  dropSession();
  history.replace("/");
});
