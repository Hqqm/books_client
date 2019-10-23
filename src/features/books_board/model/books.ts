import { createStore } from "effector";
import { Book } from "@api/books";
import { addBook } from "./add-book";
import { loadBooks } from "./fetch-books";
import { removeBook } from "./delete-book";

export const $allBooks = createStore<Book[]>([]);

$allBooks
  .on(loadBooks.done, (_, { result }) => result)
  .on(addBook.done, (state, { result }) => [...state, result])
  .on(removeBook.done, (state, { params }) =>
    state.filter(book => book.id !== params)
  );
