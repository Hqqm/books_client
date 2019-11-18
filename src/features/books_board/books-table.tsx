import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";

import { PrimaryButton, DeleteButton, InfoButton } from "@ui/atoms";
import { NewBookForm } from "./molecules/new-book";
import { loadMore } from "pages/book/model";
import { $session } from "@features/shared/session";
import { isAdmin } from "@lib/isAdmin";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";

import { BookItem } from "@features/books_board/molecules/book";
import { $allBooks, removeBook, takeBook } from "./model";
import { Table } from "@ui/organisms/table";

const tableHeaderItems = [
  "id книги",
  "id автора",
  "id жанра",
  "Название книги",
  "Цена"
];

export const TableOfBooks = () => {
  const currentUser = useStore($session);

  const books = useList($allBooks, book => (
    <tr>
      <BookItem {...book} />
      <ButtonContainer>
        <InfoButton onClick={() => loadMore(book.id.toString())}>
          Подробнее
        </InfoButton>
        <PrimaryButton
          onClick={() => takeBook({ book_id: book.id, amount: 1 })}
        >
          Взять
        </PrimaryButton>
        {isAdmin(currentUser) && (
          <DeleteButton onClick={() => removeBook(book.id)}>
            Удалить
          </DeleteButton>
        )}
      </ButtonContainer>
    </tr>
  ));

  return (
    <FormWithTableTemplate
      form={<NewBookForm />}
      table={<Table headItems={tableHeaderItems} bodyItems={books} />}
    />
  );
};

const ButtonContainer = styled.th`
  display: flex;
`;
