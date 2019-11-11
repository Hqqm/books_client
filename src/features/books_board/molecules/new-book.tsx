import * as React from "react";
import { Field } from "./field";
import { newBookFormSubmited } from "../model/add-book";
import { Button } from "@ui/atoms";
import { Form } from "@ui/molecules/form";

export const NewBook = () => {
  return (
    <Form onSubmit={newBookFormSubmited} title="Создание книги">
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
      <Button type="submit">Добавить новую книгу</Button>
    </Form>
  );
};
