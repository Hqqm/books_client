import { createEffect, createEvent, createStore, sample } from "effector";
import { BookProps } from "../molecules/book";
import { $token } from "@features/shared/token";
import { Book } from "./fetch-books";

const initialState: BookProps = {
  author: "",
  name: "",
  price: ""
};

export const newBookFormSubmited = createEvent<
  React.FormEvent<HTMLFormElement>
>();
export const setFielded = createEvent();

export const addBook = createEffect<BookProps, Book, Error>();

export const $newBookForm = createStore<BookProps>(initialState);

$newBookForm.on(setFielded, (s, { key, value }: any) => ({
  ...s,
  [key]: value
}));

addBook.use(async ({ author, name, price }: BookProps) => {
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({ author, name, price: parseInt(price) }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  const book = await response.json();
  return book;
});

sample({
  source: $newBookForm,
  clock: newBookFormSubmited,
  target: addBook
});

newBookFormSubmited.watch((e: any) => e.preventDefault());
