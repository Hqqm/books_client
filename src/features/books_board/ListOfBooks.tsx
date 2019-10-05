import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { fetchBooks } from "./model/fetchBooks";
import { $allBooks } from "./model/fetchBooks";

import { Book } from "@ui/atoms/book";
import { ConditionalList } from "@ui/molecules/conditional_list";

export const ListOfBooks = () => {
  const books = useStore($allBooks);

  React.useEffect(() => {
    fetchBooks("/books");
  }, []);

  return (
    <ConditionalList
      list={books}
      renderExists={books => (
        <Ul>
          {books.map(book => (
            <Book key={book.id}>
              <div>{book.author}</div>
              <br />
              <div>{book.name}</div>
            </Book>
          ))}
        </Ul>
      )}
      renderEmpty={() => <div>nothing</div>}
    />
  );
};

export const Ul = styled.ul`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  width: 100%;
  padding: 0px;
`;
