import * as React from "react";
import { useStore } from "effector-react";
import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/organisms/form";
import {
  $genreName,
  $genreNameError,
  genreNameChanged,
  $isGenreFormDisabled,
  genreFormSubmitted,
  $isGenreFormSubmitEnabled
} from "./model";

export const GenreForm = () => {
  const submitEnabled = useStore($isGenreFormSubmitEnabled);
  return (
    <Form onSubmit={genreFormSubmitted} title="Создание жанра">
      <GenreNameField />
      <Button type="submit" disabled={!submitEnabled}>
        создать автора
      </Button>
    </Form>
  );
};

const GenreNameField = () => {
  const genreName = useStore($genreName);
  const genreNameError = useStore($genreNameError);
  const isGenreNameCorrect = useStore($isGenreFormDisabled);

  return (
    <Input
      value={genreName}
      onChange={genreNameChanged}
      error={genreName && genreNameError}
      label="Название жанра"
      name="genre"
      autoComplete="true"
      disabled={isGenreNameCorrect}
    />
  );
};
