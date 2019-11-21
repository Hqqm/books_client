import * as React from "react";
import styled from "styled-components";
import { Book } from "@features/books_board/molecules/book";
import { useStore } from "effector-react";
import { currentBook, fetchBookById } from "./model";
import { useParams } from "react-router";
import { Link } from "@ui/atoms";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";

export const BookPage = () => {
  let { id } = useParams();
  React.useEffect(() => {
    if (id !== undefined) {
      fetchBookById(id);
    }
  }, []);

  return <MainTemplate header={<Header />} main={<CurrentBook />} />;
};

const CurrentBook = () => {
  const {
    book: { name, price },
    author_name
  } = useStore(currentBook);

  return (
    <Container>
      <Book author={author_name} name={name} price={price} />
      <LinkContainer>
        <Link to="/books">Вернутся к книгам</Link>
      </LinkContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 20px;
  padding: 25px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  width: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;

const LinkContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
`;
