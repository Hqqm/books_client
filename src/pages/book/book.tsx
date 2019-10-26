import * as React from "react";
import styled from "styled-components";
import { Book } from "@features/books_board/molecules/book";
import { useStore } from "effector-react";
import { currentBook, fetchBookById } from "./model";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

export const BookPage = () => {
  let { id } = useParams();
  React.useEffect(() => {
    if (id !== undefined) {
      fetchBookById(id);
    }
  }, []);

  return <CurrentBook />;
};

const CurrentBook = () => {
  const { author, name, price } = useStore(currentBook);
  return (
    <Container>
      <Book author={author} name={name} price={price}>
        <Link to="/books">вернутся к книгам</Link>
      </Book>
    </Container>
  );
};

const Container = styled.div`
  margin: 30px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 500px;
  width: 400px;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
