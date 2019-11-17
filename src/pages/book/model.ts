import { Book } from "@api/books";
import { createEffect, createStore, createEvent } from "effector";
import { $token } from "@features/shared/token";
import { history } from "@lib/history";

type BookWithAuthor = {
  book: Book;
  author_name: string;
};

const initialState: BookWithAuthor = {
  book: { id: 0, author_id: 0, genre_id: 0, name: "", price: 0 },
  author_name: ""
};

export const loadMore = createEvent<string>();
export const fetchBookById = createEffect<string, BookWithAuthor, Error>();
export const currentBook = createStore<BookWithAuthor>(initialState);

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
