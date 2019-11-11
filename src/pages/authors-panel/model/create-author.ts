import {
  createEvent,
  createStore,
  createStoreObject,
  combine,
  createEffect
} from "effector";
import { textValidator, dateOfBirthValidator } from "@lib/validators";
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
export const dateOfBirthChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "author date of birth changed"
);
export const countryChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>(
  "author country changed"
);

export const createAuthor = createEffect<AuthorProps, Author, Error>("create author");
export const authorFormSubmitted = createEvent<React.FormEvent<HTMLFormElement>>();

export const $authorFio = createStore<string>("");
export const $authorFioError = $authorFio.map<string | null>(textValidator);
export const $isAuthorFioCorrect = $authorFioError.map<boolean>(value => value === null);

export const $authorDateOfBirth = createStore<string>("");
export const $authorDateOfBirthError = $authorDateOfBirth.map<string | null>(
  dateOfBirthValidator
);
export const $isAuthorDateOfBirthCorrect = $authorDateOfBirthError.map<boolean>(
  value => value === null
);

export const $authorCountry = createStore<string>("");
export const $authorCountryError = $authorCountry.map<string | null>(textValidator);
export const $isAuthorCountryCorrect = $authorCountryError.map<boolean>(
  value => value === null
);

$authorFio.on(fioChanged.map(e => e.currentTarget.value), (_, fio) => fio);
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
  (isAuthorFormValid, isAuthorCreating) => isAuthorFormValid && !isAuthorCreating
);

authorFormSubmitted.watch(() => {
  const data = $AuthorForm.getState();
  createAuthor(data);
});

authorFormSubmitted.watch(e => e.preventDefault());
