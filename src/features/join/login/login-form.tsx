import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import {
  $email,
  emailChanged,
  $password,
  passwordChanged,
  $emailError,
  $passwordError,
  submitLoginForm,
  $isFormDisabled,
  $isSubmitEnabled,
  $formError
} from "./model/login";
import { Button, Link } from "@ui/atoms";
import { Input } from "@ui/molecules";
import { Form } from "@ui/organisms/form";

export const LoginForm = () => {
  const submitDisabled = useStore($isSubmitEnabled);
  const formError = useStore($formError);

  return (
    <Form onSubmit={submitLoginForm} title="Вход">
      {mapResponseError(formError)}
      <Email />
      <Password />
      <Container>
        <Button type="submit" disabled={!submitDisabled}>
          Войти
        </Button>
      </Container>
      <Link to="/register">Перейти к регистрации &#8658;</Link>
    </Form>
  );
};

const Email = () => {
  const email = useStore($email);
  const emailError = useStore($emailError);
  const isEmailDisabled = useStore($isFormDisabled);

  return (
    <Input
      value={email}
      onChange={emailChanged}
      error={email && emailError}
      label="Почта"
      name="email"
      type="email"
      autoComplete="email"
      disabled={isEmailDisabled}
    />
  );
};

const Password = () => {
  const password = useStore($password);
  const passwordError = useStore($passwordError);
  const isPasswordDisabled = useStore($isFormDisabled);

  return (
    <Input
      value={password}
      onChange={passwordChanged}
      error={password && passwordError}
      label="Пароль"
      name="password"
      type="password"
      autoComplete="current-password"
      disabled={isPasswordDisabled}
    />
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;

const mapResponseError = (err: string | null) => {
  switch (err) {
    case "Not Found":
      return "User not found";
    case "Internal Server Error":
      return "Wrong email or password";
    case null:
      return null;
    default:
      return "Got an unexpected error. Try again later";
  }
};
