import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";

import { $allBooks, pageListOfBooksReady } from "./model/fetchBooks";
import { Book } from "@features/books_board/molecules/book";

export const ListOfBooks = () => {
  React.useEffect(() => {
    pageListOfBooksReady();
  }, []);

  return <Books />;
};

const Books = () => {
  const books = useList($allBooks, ({ author, name, price }) => (
    <Book author={author} name={name} price={price} />
  ));
  return <Ul>{books}</Ul>;
};

const Ul = styled.ul`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin-top: 20px;
`;
