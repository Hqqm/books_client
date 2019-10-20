import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { submitted, pageReady } from "./model/login";
import { Button } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import { Field } from "@features/join/molecules/Field";

export const LoginForm = () => {
  React.useEffect(() => {
    pageReady();
  }, []);

  return (
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
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
