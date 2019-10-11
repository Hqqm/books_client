import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { fetchBooks, $allBooks } from "./model/fetchBooks";
import { Book } from "@features/books_board/molecules/book";
import { Spiner } from "@ui/atoms/spiner";
import { ConditionalList } from "@ui/molecules/conditional_list";

export const ListOfBooks = () => {
  React.useEffect(() => {
    fetchBooks("/books");
  }, []);

  const books = useStore($allBooks);

  return (
    <ConditionalList
      list={books}
      renderExists={books => (
        <Ul>
          {books.map(({ id, author, name }) => (
            <Book key={id} author={author} name={name} />
          ))}
        </Ul>
      )}
      renderEmpty={() => <Spiner />}
    />
  );
};

export const Ul = styled.ul`
  display: grid;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  margin-top: 20px;
`;
