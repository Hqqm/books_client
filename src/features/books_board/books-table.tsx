import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";

import { TableButton } from "@ui/atoms";
import { NewBookForm } from "./molecules/new-book";
import { loadMore } from "pages/book/model";
import { $session } from "@features/shared/session";
import { isAdmin } from "@lib/isAdmin";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { Table } from "pages/authors-panel/authors-table";
import { BookItem } from "@features/books_board/molecules/book";
import { $allBooks, removeBook, takeBook } from "./model";

export const TableOfBooks = () => {
  const currentUser = useStore($session);
  const tableHeaderItems = ["id книги", "id автора", "название книги", "цена"];

  const books = useList($allBooks, book => (
    <tr>
      <BookItem {...book} />
      <ButtonContainer>
        <TableButton
          onClick={() => loadMore(book.id.toString())}
          backColor="#4d7689"
        >
          Подробнее
        </TableButton>
        <TableButton
          onClick={() => takeBook({ book_id: book.id, amount: 1 })}
          backColor="#517b03"
        >
          Взять
        </TableButton>
        {isAdmin(currentUser) && (
          <TableButton onClick={() => removeBook(book.id)} backColor="#da3535">
            Удалить
          </TableButton>
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
