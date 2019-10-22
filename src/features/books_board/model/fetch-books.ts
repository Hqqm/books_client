import { createEffect, createEvent } from "effector";
import { Book, fetchBooks } from "@api/books";

export const pageListOfBooksReady = createEvent();

export const loadBooks = createEffect<void, Book[], Error>();

loadBooks.use(fetchBooks);

pageListOfBooksReady.watch(() => {
  loadBooks();
});
