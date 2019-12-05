import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";
import { BorderlessButton } from "@ui/atoms";
import { Book } from "@ui/molecules";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/shared/header";
import { loadMore } from "pages/book/model";
import { userBooksPageMounted, $userAllBooks, deleteUserBook } from "./model";

export const MyBooksPage = () => {
  React.useEffect(() => {
    userBooksPageMounted();
  }, []);

  return <MainTemplate header={<Header />} main={<ListOfBooks />} />;
};

export const ListOfBooks = () => {
  const books = useList($userAllBooks, ({ author_id, name, price, id }) => (
    <Container>
      <Book author={author_id.toString()} name={name} price={price} />
      <BorderlessButton onClick={() => loadMore(id.toString())}>
        Подробнее
      </BorderlessButton>
      <BorderlessButton onClick={() => deleteUserBook(id)}>
        Вернуть книгу
      </BorderlessButton>
    </Container>
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

const Container = styled.li`
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
