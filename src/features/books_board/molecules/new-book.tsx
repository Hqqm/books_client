import * as React from "react";
import { useStore } from "effector-react";
import { Button, Input } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import {
  newBookFormSubmited,
  $authorId,
  $authorIdError,
  idChanged,
  $isBookFormDisabled,
  $bookName,
  $bookNameError,
  nameChanged,
  $bookPrice,
  $bookPriceError,
  priceChanged
} from "../model/add-book";

export const NewBookForm = () => {
  return (
    <Form onSubmit={newBookFormSubmited} title="Создание книги">
      <AuthorIdField />
      <BookNameField />
      <BookPriceField />
      <Button type="submit">Добавить новую книгу</Button>
    </Form>
  );
};

const AuthorIdField = () => {
  const author_id = useStore($authorId);
  const fioError = useStore($authorIdError);
  const isFioCorrect = useStore($isBookFormDisabled);

  return (
    <Input
      value={author_id}
      onChange={idChanged}
      error={author_id && fioError}
      label=" Id автора"
      name="author_id"
      autoComplete="true"
      disabled={isFioCorrect}
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
