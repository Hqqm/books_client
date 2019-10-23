import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Field } from "./Text";
import { Button } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import { formMounted, formUnmounted, formSubmitted } from "./model/register";

export const RegisterForm = () => {
  React.useEffect(() => {
    formMounted();
    return () => {
      formUnmounted();
    };
  });

  return (
    <Form
      onSubmit={formSubmitted}
      title="Sign in"
      link={<Link to="/auth">go to login form</Link>}
    >
      <Field name="email" type="text" label="email" autoComplete="email" />
      <Field name="first_name" type="text" label="first name" autoComplete="name" />
      <Field name="last_name" type="text" label="last name" autoComplete="name" />
      <Field
        name="password"
        type="password"
        label="password"
        autoComplete="current password"
      />
      <Field
        name="password_confirmation"
        type="password"
        label="confirm password"
        autoComplete="current password"
      />
      <Container>
        <Button type="submit">register</Button>
      </Container>
    </Form>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
