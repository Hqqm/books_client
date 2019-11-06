import * as React from "react";
import styled from "styled-components";
import { Field } from "./field";
import { newBookFormSubmited } from "../model/add-book";

export const NewBook = () => {
  return (
    <Container>
      <Form onSubmit={newBookFormSubmited}>
        <Field
          placeholder="author_id"
          name="author_id"
          type="text"
          autoComplete="true"
          disabled={false}
        />
        <Field
          placeholder="name"
          name="name"
          type="text"
          autoComplete="true"
          disabled={false}
        />
        <Field
          placeholder="price"
          name="price"
          type="text"
          autoComplete="true"
          disabled={false}
        />
        <button type="submit">Добавить новую книгу</button>
      </Form>
    </Container>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

const Container = styled.li`
  width: 180px;
  height: 250px;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
