import * as React from "react";
import styled from "styled-components";
import { Book as BookType } from "@api/books";

type Props = {
  author: string;
  name: string;
  price: number;
};

export const Book: React.FC<Props> = ({ author, name, price }) => {
  return (
    <>
      <div> {author}</div>
      <div>название: {name}</div>
      <div>цена: {price}</div>
    </>
  );
};

export const BookItem = (book: BookType) => {
  return (
    <>
      <Th>{book.id}</Th>
      <Th>{book.author_id}</Th>
      <Th>{book.name}</Th>
      <Th>{book.price}</Th>
    </>
  );
};

const Th = styled.th`
  background: #fff;
  color: black;
  padding: 10px 20px;
  font-weight: 500;
`;
