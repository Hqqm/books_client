import {
  createEffect,
  createEvent,
  createStore,
  sample,
  createStoreObject,
  combine
} from "effector";
import { Book, BookProps, createBook } from "@api/books";
import { numberOnlyValidator, textValidator } from "@lib/validators";

export const newBookFormSubmited = createEvent<React.FormEvent<HTMLFormElement>>();
export const setFielded = createEvent();
export const idChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "bookd id changed"
);
export const nameChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "bookd name changed"
);
export const priceChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "bookd prices changed"
);

export const addBook = createEffect<BookProps, Book, Error>();

export const $authorId = createStore<string>("").reset(addBook.done);
export const $authorIdError = $authorId.map<string | null>(numberOnlyValidator);
export const $isAuthorIdCorrect = $authorIdError.map<boolean>(value => value === null);

export const $bookName = createStore<string>("").reset(addBook.done);
export const $bookNameError = $bookName.map<string | null>(textValidator);
export const $isBookNameCorrect = $bookNameError.map<boolean>(value => value === null);

export const $bookPrice = createStore<string>("").reset(addBook.done);
export const $bookPriceError = $bookPrice.map<string | null>(numberOnlyValidator);
export const $isBookPriceCorrect = $bookPriceError.map<boolean>(value => value === null);

$authorId.on(idChanged.map(e => e.currentTarget.value), (_, id) => id);
$bookName.on(nameChanged.map(e => e.currentTarget.value), (_, name) => name);
$bookPrice.on(priceChanged.map(e => e.currentTarget.value), (_, price) => price);

export const $BookForm = createStoreObject({
  author_id: $authorId,
  name: $bookName,
  price: $bookPrice
});

addBook.use(createBook);

sample({
  source: $BookForm,
  clock: newBookFormSubmited,
  target: addBook
});

export const $isBookFormDisabled = addBook.pending;

const $isBookFormValid = combine(
  $isAuthorIdCorrect,
  $isBookNameCorrect,
  $isBookPriceCorrect,
  (isAuthorIdCorrect, isBookNameCorrect, isBookPriceCorrect) =>
    isAuthorIdCorrect && isBookNameCorrect && isBookPriceCorrect
);

export const $isBookFormSubmitEnabled = combine(
  $isBookFormValid,
  addBook.pending,
  (isBookFormValid, isBookTaking) => isBookFormValid && !isBookTaking
);

newBookFormSubmited.watch(e => e.preventDefault());
