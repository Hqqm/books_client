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
  $isSubmitEnabled
} from "./model/login";
import { Button, AuthLink, Input } from "@ui/atoms";
import { Form } from "@ui/molecules/form";

export const LoginForm = () => {
  const submitDisabled = useStore($isSubmitEnabled);

  return (
    <Form onSubmit={submitLoginForm} title="Вход">
      <Email />
      <Password />
      <Container>
        <Button type="submit" disabled={!submitDisabled}>
          Войти
        </Button>
      </Container>
      <AuthLink to="/register">Перейти к регистрации</AuthLink>
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
      autoComplete="password"
      disabled={isPasswordDisabled}
    />
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
