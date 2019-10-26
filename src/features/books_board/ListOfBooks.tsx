import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";

import { $allBooks } from "./model/books";
import { pageListOfBooksReady } from "./model/fetch-books";
import { Book } from "@features/books_board/molecules/book";
import { NewBook } from "./molecules/new-book";
import { removeBook } from "./model/delete-book";
import { Button } from "@ui/atoms";
import { loadMore } from "pages/book/model";

export const ListOfBooks = () => {
  React.useEffect(() => {
    pageListOfBooksReady();
  }, []);

  const books = useList($allBooks, ({ author, name, price, id }) => (
    <Container>
      <Book author={author} name={name} price={price}>
        <Button onClick={() => loadMore(id.toString())}>Подробнее</Button>
        <Button onClick={() => removeBook(id)}>remove book</Button>
      </Book>
    </Container>
  ));

  return (
    <Ul>
      {books} <NewBook />
    </Ul>
  );
};

const Ul = styled.ul`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin-top: 20px;
`;

const Container = styled.li`
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
