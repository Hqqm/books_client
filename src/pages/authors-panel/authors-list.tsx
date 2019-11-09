import * as React from "react";
import { useStore } from "effector-react";
import { $allAuthors } from "./model/author-list";
import styled from "styled-components";

export type Author = {
  id: number;
  fio: string;
  date_of_birth: string;
  country: string;
};

export const ListOfAuthors = () => {
  const authors = useStore($allAuthors);

  return (
    <ul>
      {authors.map((author: Author) => (
        <AuthorItem {...author} />
      ))}
    </ul>
  );
};

const AuthorItem = (author: Author) => (
  <li>
    <Container>
      <div>author id: {author.id}</div>
      <div>author fio: {author.fio}</div>
      <div>author date of birth: {author.date_of_birth}</div>
      <div>author country: {author.country}</div>
    </Container>
  </li>
);

const Container = styled.div`
  margin-bottom: 10px;
`;
