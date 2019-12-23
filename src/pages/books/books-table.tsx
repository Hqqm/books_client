import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";
import {
  PrimaryButton,
  DeleteButton,
  InfoButton,
  UpdateButton
} from "@ui/atoms";
import { BookItem } from "@ui/molecules";
import { Table } from "@ui/organisms";
import { FormWithTableTemplate } from "@ui/templates";
import { $session, $isAuthenticated } from "@features/shared/session";
import { NewBookForm } from "./new-book";
import { loadMore } from "pages/book/model";
import { isAdmin } from "@lib/isAdmin";
import {
  $allBooks,
  removeBook,
  takeBook,
  bookUpdated,
  $isBookFormDisabled
} from "./model";

export const TableOfBooks = () => {
  const currentUser = useStore($session);
  const isAuthenticated = useStore($isAuthenticated);
  const isUpdateButtonDisabled = useStore($isBookFormDisabled);
  const isbooksTableEmpty = $allBooks.getState().length > 0;

  const books = useList($allBooks, book => (
    <tr>
      <BookItem {...book} />
      <ButtonContainer>
        <InfoButton onClick={() => loadMore(book.id.toString())}>
          Подробнее
        </InfoButton>

        {isAuthenticated && (
          <PrimaryButton
            onClick={() => takeBook({ book_id: book.id, amount: 1 })}
          >
            Взять
          </PrimaryButton>
        )}

        {isAdmin(currentUser) && (
          <>
            <UpdateButton onClick={() => bookUpdated(book.id)}>
              Обновить
            </UpdateButton>
            <DeleteButton
              disabled={isUpdateButtonDisabled}
              onClick={() => removeBook(book.id)}
            >
              Удалить
            </DeleteButton>
          </>
        )}
      </ButtonContainer>
    </tr>
  ));

  return (
    <FormWithTableTemplate
      form={<NewBookForm />}
      table={
        isbooksTableEmpty ? (
          <Table headItems={tableHeaderItems} bodyItems={books} />
        ) : (
          "В данный момент книг нет"
        )
      }
    />
  );
};

const tableHeaderItems = [
  "id книги",
  "id автора",
  "id жанра",
  "Название книги",
  "Цена"
];

const ButtonContainer = styled.th`
  display: flex;
`;
