import * as React from "react";
import { Link } from "react-router-dom";
import { RouteComponentProps, useHistory } from "react-router";
import styled from "styled-components";

import { submitted, createSession } from "./model/login";
import { Button } from "@ui/atoms";
import { Field } from "@features/join/molecules/Field";
import { Form } from "@ui/molecules/form";

export const LoginForm: React.FC<RouteComponentProps> = () => {
  const history = useHistory();

  createSession.done.watch(() => {
    history.push("/books");
  });

  return (
    <>
      <Form
        handleSubmit={submitted}
        title="Login"
        link={<Link to="/books">go to books</Link>}
      >
        <Field name="email" type="text" label="email" autoComplete="email" />
        <Field
          name="password"
          type="password"
          label="password"
          autoComplete="current password"
        />
        <Container>
          <Button type="submit">login</Button>
        </Container>
      </Form>
    </>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
