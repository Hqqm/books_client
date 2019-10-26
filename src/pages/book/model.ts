import { Book } from "@api/books";
import { createEffect, createStore, createEvent } from "effector";
import { $token } from "@features/shared/token";
import { history } from "@lib/history";

const initialState: Book = {
  id: 0,
  author: "",
  name: "",
  price: ""
};

export const loadMore = createEvent<string>();
export const fetchBookById = createEffect<string, Book, Error>();
export const currentBook = createStore<Book>(initialState);

currentBook.on(fetchBookById.done, (_, { result }) => result);

fetchBookById.use(async (id: string) => {
  const data = await fetch(`/api/books/${id}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });
  const book = await data.json();
  console.log(book);
  return book;
});

loadMore.watch((id: string) => {
  history.push(`/books/${id}`);
});
