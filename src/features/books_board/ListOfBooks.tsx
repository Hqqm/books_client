import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";

import { $allBooks } from "./model/books";
import { BookItem } from "@features/books_board/molecules/book";
import { NewBookForm } from "./molecules/new-book";
import { removeBook } from "./model/delete-book";
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
        <TableButton onClick={() => loadMore(book.id.toString())} backColor="#4d7689">
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
      table={<Table headItems={tableHeadItems} bodyItems={books} />}
    />
  );
};

const ButtonContainer = styled.th`
  display: flex;
`;
