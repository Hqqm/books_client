import * as React from "react";
import styled from "styled-components";
import { useList, createComponent } from "effector-react";

import { fetchBooks, $allBooks } from "./model/fetchBooks";
import { Spiner } from "@ui/atoms/spiner";
import { Book } from "@features/books_board/molecules/book";

export const ListOfBooks = () => {
  React.useEffect(() => {
    fetchBooks("/api/books");
  }, []);

  return (
    <>
      <Loading />
      <Books />
    </>
  );
};

const Loading = createComponent(
  fetchBooks.pending,
  (_, pending) => pending && <Spiner />
);

const Books = () => {
  const books = useList($allBooks, ({ author, name, price }) => (
    <Book author={author} name={name} price={price} />
  ));
  return <Ul>{books}</Ul>;
};

export const Ul = styled.ul`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  margin-top: 20px;
`;
