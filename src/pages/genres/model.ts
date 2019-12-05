import {
  createEvent,
  createEffect,
  createStore,
  combine,
  createStoreObject
} from "effector";
import { textValidator } from "@lib/validators";
import { $token } from "@features/shared/token";

import {
  confirmModalClosed,
  confirmModalOpened
} from "@features/shared/modal/model";

export type Genre = {
  id: number;
  name: string;
};

type NewGenre = {
  name: string;
};

type UpdateGenre = {
  id: number;
  formData: NewGenre;
};

export const genreNameChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>("genre name  changed");

export const genreFormSubmitted = createEvent<React.FormEvent<HTMLFormElement>>(
  "genre form submitted"
);
export const genreUpdated = createEvent<number>();
export const genresPageMounted = createEvent("genres page mounted");

export const getGenres = createEffect<void, Genre[], Error>("fetching genres");
export const deleteGenre = createEffect<number, void, Error>("deleting genre");
export const createGenre = createEffect<NewGenre, Genre, Error>(
  "creating genre"
);
export const updateGenre = createEffect<UpdateGenre, void, Error>(
  "updating author"
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

export const $genreIdConfirmModal = createStore<number | null>(null);

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

updateGenre.use(async (genre: UpdateGenre) => {
  await fetch(`/api/genres/${genre.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: genre.formData.name
    }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });
});

$allGenres
  .on(getGenres.done, (_, { result }) => result)
  .on(deleteGenre.done, (state, { params }) =>
    state.filter(genre => genre.id !== params)
  )
  .on(createGenre.done, (state, { result }) => [...state, result])
  .on(updateGenre.done, (state, { params }) =>
    state.map(genre =>
      genre.id !== params.id
        ? genre
        : {
            id: params.id,
            name: params.formData.name
          }
    )
  );

$genreName
  .on(
    genreNameChanged.map(e => e.currentTarget.value),
    (_, genreName) => genreName
  )
  .reset(createGenre.done);

$genreIdConfirmModal.on(confirmModalOpened, (_, payload) => payload);

genresPageMounted.watch(() => {
  getGenres();
});

deleteGenre.done.watch(() => {
  confirmModalClosed();
});

genreUpdated.watch((id: number) => {
  const formData = $GenreForm.getState();
  updateGenre({ id, formData });
});

export const $isGenreFormSubmitEnabled = combine(
  $isGenreNameCorrect,
  createGenre.pending,
  (isGenreNameCorrect, isGenreCreating) =>
    isGenreNameCorrect && !isGenreCreating
);
