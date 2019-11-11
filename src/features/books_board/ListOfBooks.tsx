import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";

import { $allBooks } from "./model/books";
import { Book, BookItem } from "@features/books_board/molecules/book";
import { NewBook } from "./molecules/new-book";
import { removeBook } from "./model/delete-book";
import { Button } from "@ui/atoms";
import { loadMore } from "pages/book/model";
import { takeBook } from "./model/take-book";
import { $session } from "@features/shared/session";
import { isAdmin } from "@lib/isAdmin";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { Table } from "pages/authors-panel/authors-table";
import { TableButton } from "@ui/atoms/button";

export const ListOfBooks = () => {
  const currentUser = useStore($session);

  const tableHeadItems = ["id книги", "id автора", "название книги", "цена"];

  const books = useList($allBooks, book => (
    <tr>
      <BookItem {...book} />

      <ButtonContainer>
        <TableButton onClick={() => loadMore(book.id.toString())}>Подробнее</TableButton>
        <TableButton onClick={() => takeBook({ book_id: book.id, amount: 1 })}>
          Взять книгу
        </TableButton>
        {isAdmin(currentUser) && (
          <TableButton onClick={() => removeBook(book.id)}>удалить книгу</TableButton>
        )}
      </ButtonContainer>
    </tr>
  ));

  return (
    <FormWithTableTemplate
      form={<> {isAdmin(currentUser) && <NewBook />} </>}
      table={<Table headItems={tableHeadItems} bodyItems={books} />}
    />
  );
};

const ButtonContainer = styled.th`
  display: flex;
`;
