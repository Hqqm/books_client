import {
  createEvent,
  createStore,
  createStoreObject,
  combine,
  createEffect
} from "effector";
import { textValidator, numberOnlyValidator } from "@lib/validators";
import { $token } from "@features/shared/token";
import { Author } from "../authors-table";

type AuthorProps = {
  fio: string;
  date_of_birth: string;
  country: string;
};

export const fioChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "author fio changed"
);

export const dateOfBirthChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("author date of birth changed");

export const countryChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("author country changed");

export const authorFormSubmitted = createEvent<
  React.FormEvent<HTMLFormElement>
>("author form submitted");

export const authorsPageMounted = createEvent("author page mounted");

export const deleteAuthor = createEffect<number, void, Error>(
  "author deleting"
);

export const createAuthor = createEffect<AuthorProps, Author, Error>(
  "create author"
);

export const fetchAllAuthors = createEffect<void, Author[], Error>(
  "fetching all authors"
);

export const $authorFio = createStore<string>("");
export const $authorFioError = $authorFio.map<string | null>(textValidator);
export const $isAuthorFioCorrect = $authorFioError.map<boolean>(
  value => value === null
);

export const $authorDateOfBirth = createStore<string>("");
export const $authorDateOfBirthError = $authorDateOfBirth.map<string | null>(
  numberOnlyValidator
);
export const $isAuthorDateOfBirthCorrect = $authorDateOfBirthError.map<boolean>(
  value => value === null
);

export const $authorCountry = createStore<string>("");
export const $authorCountryError = $authorCountry.map<string | null>(
  textValidator
);
export const $isAuthorCountryCorrect = $authorCountryError.map<boolean>(
  value => value === null
);
export const $allAuthors = createStore<Author[]>([]);

$authorFio.on(
  fioChanged.map(e => e.currentTarget.value),
  (_, fio) => fio
);
$authorDateOfBirth.on(
  dateOfBirthChanged.map(e => e.currentTarget.value),
  (_, dateOfBirth) => dateOfBirth
);

$authorCountry.on(
  countryChanged.map(e => e.currentTarget.value),
  (_, country) => country
);

export const $AuthorForm = createStoreObject({
  fio: $authorFio,
  date_of_birth: $authorDateOfBirth,
  country: $authorCountry
});

$allAuthors
  .on(fetchAllAuthors.done, (_, { result }) => result)
  .on(createAuthor.done, (state, { result }) => [...state, result])
  .on(deleteAuthor.done, (state, { params }) =>
    state.filter(author => author.id !== params)
  );

createAuthor.use(async data => {
  const response = await fetch("/api/authors", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
});

deleteAuthor.use(async (id: number) => {
  await fetch(`/api/authors/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
});

fetchAllAuthors.use(async () => {
  const response = await fetch("/api/authors", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
});

export const $isAuthorFormDisabled = createAuthor.pending;

const $isAuthorFormValid = combine(
  $isAuthorFioCorrect,
  $isAuthorDateOfBirthCorrect,
  $isAuthorCountryCorrect,
  (isAuthorFioCorrect, isAuthorDateOfBirthCorrect, isAuthorCountryCorrect) =>
    isAuthorFioCorrect && isAuthorDateOfBirthCorrect && isAuthorCountryCorrect
);

export const $isAuthorFormSubmitEnabled = combine(
  $isAuthorFormValid,
  createAuthor.pending,
  (isAuthorFormValid, isAuthorCreating) =>
    isAuthorFormValid && !isAuthorCreating
);

authorFormSubmitted.watch(() => {
  const data = $AuthorForm.getState();
  createAuthor(data);
});

authorFormSubmitted.watch(e => e.preventDefault());
authorsPageMounted.watch(() => {
  fetchAllAuthors();
});

export const authorConfirmModalOpened = createEvent<number>(
  "author confirm modal opened"
);

export const authorConfirmModalClosed = createEvent(
  "author confirm modal closed"
);

export const $authorIdConfirmModal = createStore<number | null>(null);

export const $authorConfirmModal = createStore<boolean>(false);

$authorIdConfirmModal.on(authorConfirmModalOpened, (_, payload) => payload);

$authorConfirmModal
  .on(authorConfirmModalOpened, (_, __) => true)
  .on(authorConfirmModalClosed, (_, __) => false);

deleteAuthor.done.watch(() => {
  authorConfirmModalClosed();
});

authorConfirmModalOpened.watch(() => {
  let root = document.getElementById("root");
  if (root) {
    root.style.opacity = "0.3";
  }
});

authorConfirmModalClosed.watch(() => {
  let root = document.getElementById("root");
  if (root) {
    root.style.opacity = "1";
  }
});
