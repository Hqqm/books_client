import {
  createEffect,
  createEvent,
  createStore,
  sample,
  createStoreObject,
  combine
} from "effector";
import {
  Book,
  BookProps,
  TakeBooksProps,
  efCreateBook,
  efRemoveBook,
  efFetchBooks,
  efTakeBook
} from "@api/books";
import { numberOnlyValidator, textValidator } from "@lib/validators";

export const pageTableOfBooksReady = createEvent();
export const newBookFormSubmited = createEvent<
  React.FormEvent<HTMLFormElement>
>();
export const authorIdChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("author id changed");
export const genreIdChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("genre id changed");
export const nameChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "bookd name changed"
);
export const priceChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "bookd prices changed"
);

export const loadBooks = createEffect<void, Book[], Error>();
export const removeBook = createEffect<number, void, Error>("book deleting");
export const addBook = createEffect<BookProps, Book, Error>();
export const takeBook = createEffect<TakeBooksProps, void, Error>(
  "taking book"
);

export const $authorId = createStore<string>("").reset(addBook.done);
export const $authorIdError = $authorId.map<string | null>(numberOnlyValidator);
export const $isAuthorIdCorrect = $authorIdError.map<boolean>(
  value => value === null
);

export const $genreId = createStore<string>("").reset(addBook.done);
export const $genreIdError = $genreId.map<string | null>(numberOnlyValidator);
export const $isGenreIdCorrect = $genreIdError.map<boolean>(
  value => value === null
);

export const $bookName = createStore<string>("").reset(addBook.done);
export const $bookNameError = $bookName.map<string | null>(textValidator);
export const $isBookNameCorrect = $bookNameError.map<boolean>(
  value => value === null
);

export const $bookPrice = createStore<string>("").reset(addBook.done);
export const $bookPriceError = $bookPrice.map<string | null>(
  numberOnlyValidator
);
export const $isBookPriceCorrect = $bookPriceError.map<boolean>(
  value => value === null
);

export const $allBooks = createStore<Book[]>([]);

$authorId.on(
  authorIdChanged.map(e => e.currentTarget.value),
  (_, authorId) => authorId
);
$genreId.on(
  genreIdChanged.map(e => e.currentTarget.value),
  (_, genreId) => genreId
);
$bookName.on(
  nameChanged.map(e => e.currentTarget.value),
  (_, name) => name
);
$bookPrice.on(
  priceChanged.map(e => e.currentTarget.value),
  (_, price) => price
);

loadBooks.use(efFetchBooks);
addBook.use(efCreateBook);
removeBook.use(efRemoveBook);
takeBook.use(efTakeBook);

$allBooks
  .on(loadBooks.done, (_, { result }) => {
    console.log(result);
    return result;
  })
  .on(addBook.done, (state, { result }) => [...state, result])
  .on(removeBook.done, (state, { params }) =>
    state.filter(book => book.id !== params)
  );

export const $BookForm = createStoreObject({
  author_id: $authorId,
  genre_id: $genreId,
  name: $bookName,
  price: $bookPrice
});

sample({
  source: $BookForm,
  clock: newBookFormSubmited,
  target: addBook
});

export const $isBookFormDisabled = addBook.pending;

const $isBookFormValid = combine(
  $isAuthorIdCorrect,
  $isGenreIdCorrect,
  $isBookNameCorrect,
  $isBookPriceCorrect,
  (
    isAuthorIdCorrect,
    isGenreIdCorrect,
    isBookNameCorrect,
    isBookPriceCorrect
  ) =>
    isAuthorIdCorrect &&
    isGenreIdCorrect &&
    isBookNameCorrect &&
    isBookPriceCorrect
);

export const $isBookFormSubmitEnabled = combine(
  $isBookFormValid,
  addBook.pending,
  (isBookFormValid, isBookTaking) => isBookFormValid && !isBookTaking
);

pageTableOfBooksReady.watch(() => {
  loadBooks();
});

newBookFormSubmited.watch(e => {
  e.preventDefault();
});
