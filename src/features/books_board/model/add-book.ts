import { createEffect, createEvent, createStore, sample } from "effector";
import { Book, BookProps, createBook } from "@api/books";

const initialState: BookProps = {
  author: "",
  name: "",
  price: ""
};

export const newBookFormSubmited = createEvent<React.FormEvent<HTMLFormElement>>();
export const setFielded = createEvent();

export const addBook = createEffect<BookProps, Book, Error>();

export const $newBookForm = createStore<BookProps>(initialState);

$newBookForm
  .on(setFielded, (s, { key, value }: any) => ({
    ...s,
    [key]: value
  }))
  .reset(addBook.done);

addBook.use(createBook);

sample({
  source: $newBookForm,
  clock: newBookFormSubmited,
  target: addBook
});

newBookFormSubmited.watch((e: any) => e.preventDefault());
