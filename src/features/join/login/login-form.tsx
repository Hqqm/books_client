import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import {
  submitted,
  formMounted,
  formUnmounted,
  $isFormDisabled
} from "./model/login";
import { Button } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import { Field } from "@features/join/login/molecules/Field";
import { useStore } from "effector-react";

export const LoginForm = () => {
  React.useEffect(() => {
    formMounted();
    return () => {
      formUnmounted();
    };
  });

  const isDisabled = useStore($isFormDisabled);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitted(e);
  };

  return (
    <Form
      onSubmit={handleSubmit}
      title="Login"
      link={<Link to="/register">go to register form</Link>}
    >
      <Field
        name="email"
        type="text"
        label="email"
        autoComplete="email"
        disabled={isDisabled}
      />
      <Field
        name="password"
        type="password"
        label="password"
        autoComplete="current password"
        disabled={isDisabled}
      />
      <Container>
        <Button type="submit" disabled={isDisabled}>
          login
        </Button>
      </Container>
    </Form>
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
