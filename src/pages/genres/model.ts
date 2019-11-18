import {
  createEvent,
  createEffect,
  createStore,
  combine,
  createStoreObject
} from "effector";
import { textValidator } from "@lib/validators";
import { $token } from "@features/shared/token";

export type Genre = {
  id: number;
  name: string;
};

type NewGenre = {
  name: string;
};

export const genreNameChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("genre name  changed");

export const genreFormSubmitted = createEvent<React.FormEvent<HTMLFormElement>>(
  "genre form submitted"
);

export const genresPageMounted = createEvent("genres page mounted");

export const getGenres = createEffect<void, Genre[], Error>("fetching genres");
export const deleteGenre = createEffect<number, void, Error>("deleting genre");
export const createGenre = createEffect<NewGenre, Genre, Error>(
  "creating genre"
);

export const $genreName = createStore<string>("");
export const $genreNameError = $genreName.map<string | null>(textValidator);
export const $isGenreNameCorrect = $genreNameError.map<boolean>(
  value => value === null
);

export const $GenreForm = createStoreObject({
  name: $genreName
});

export const $isGenreFormDisabled = createGenre.pending;

export const $allGenres = createStore<Genre[]>([]);

genreFormSubmitted.watch(e => {
  e.preventDefault();
  const newGenreData = $GenreForm.getState();
  createGenre(newGenreData);
});

getGenres.use(async () => {
  const response = await fetch("/api/genres", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
});

deleteGenre.use(async id => {
  await fetch(`/api/genres/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });
});

createGenre.use(async newGenreData => {
  const response = await fetch("/api/genres", {
    method: "POST",
    body: JSON.stringify(newGenreData),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
});

$allGenres
  .on(getGenres.done, (_, { result }) => result)
  .on(deleteGenre.done, (state, { params }) =>
    state.filter(genre => genre.id !== params)
  )
  .on(createGenre.done, (state, { result }) => [...state, result]);

$genreName
  .on(
    genreNameChanged.map(e => e.currentTarget.value),
    (_, genreName) => genreName
  )
  .reset(createGenre.done);

genresPageMounted.watch(() => {
  getGenres();
});

export const $isGenreFormSubmitEnabled = combine(
  $isGenreNameCorrect,
  createGenre.pending,
  (isGenreNameCorrect, isGenreCreating) =>
    isGenreNameCorrect && !isGenreCreating
);
