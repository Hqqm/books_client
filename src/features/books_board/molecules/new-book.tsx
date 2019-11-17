import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { Button } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/organisms/form";
import {
  newBookFormSubmited,
  $authorId,
  $authorIdError,
  authorIdChanged,
  $isBookFormDisabled,
  $bookName,
  $bookNameError,
  nameChanged,
  $bookPrice,
  $bookPriceError,
  priceChanged,
  $isBookFormSubmitEnabled,
  $genreId,
  $genreIdError,
  genreIdChanged
} from "../model";

export const NewBookForm = () => {
  const enabled = useStore($isBookFormSubmitEnabled);

  return (
    <Form onSubmit={newBookFormSubmited} title="Создание книги">
      <AuthorIdField />
      <GenreIdField />
      <BookNameField />
      <BookPriceField />
      <ButtonCointaer>
        <Button type="submit" disabled={!enabled}>
          Добавить новую книгу
        </Button>
      </ButtonCointaer>
    </Form>
  );
};

const AuthorIdField = () => {
  const authorId = useStore($authorId);
  const authorIdError = useStore($authorIdError);
  const isAuthorIdCorrect = useStore($isBookFormDisabled);

  return (
    <Input
      value={authorId}
      onChange={authorIdChanged}
      error={authorId && authorIdError}
      label=" Id автора"
      name="author_id"
      autoComplete="true"
      disabled={isAuthorIdCorrect}
    />
  );
};

const GenreIdField = () => {
  const genreId = useStore($genreId);
  const genreIdError = useStore($genreIdError);
  const isGenreIdCorrect = useStore($isBookFormDisabled);

  return (
    <Input
      value={genreId}
      onChange={genreIdChanged}
      error={genreId && genreIdError}
      label=" Id жанра"
      name="genre_id"
      autoComplete="true"
      disabled={isGenreIdCorrect}
    />
  );
};

const BookNameField = () => {
  const nameOfBook = useStore($bookName);
  const nameOfBookError = useStore($bookNameError);
  const nameOfBookDisabled = useStore($isBookFormDisabled);

  return (
    <Input
      value={nameOfBook}
      onChange={nameChanged}
      error={nameOfBook && nameOfBookError}
      label="Название книги"
      name="name"
      autoComplete="true"
      disabled={nameOfBookDisabled}
    />
  );
};

const BookPriceField = () => {
  const priceOfBook = useStore($bookPrice);
  const priceOfBookError = useStore($bookPriceError);
  const priceOfBookDisabled = useStore($isBookFormDisabled);

  return (
    <Input
      value={priceOfBook}
      onChange={priceChanged}
      error={priceOfBook && priceOfBookError}
      label="Цена книги"
      name="price"
      autoComplete="true"
      disabled={priceOfBookDisabled}
    />
  );
};

const ButtonCointaer = styled.div`
  width: 100%;
  margin-top: 20px;
`;
