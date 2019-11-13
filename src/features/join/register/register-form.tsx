import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";

import { Button, Link, Input } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import {
  formSubmitted,
  $email,
  emailChanged,
  $password,
  passwordChanged,
  $firstName,
  firstNameChanged,
  $lastName,
  lastNameChanged,
  $passwordConfirmation,
  passwordConfirmationChanged,
  $emailError,
  $isFormDisabled,
  $passwordError,
  $firstNameError,
  $lastNameError,
  $passwordConfirmationError,
  $isRegisterSubmitedEnabled
} from "./model/register";

export const RegisterForm = () => {
  const isSubmitEnabled = useStore($isRegisterSubmitedEnabled);

  return (
    <Form onSubmit={formSubmitted} title="Регистрация">
      <Email />
      <Password />
      <FirstName />
      <LastName />
      <PasswordConfirmation />
      <Container>
        <Button disabled={!isSubmitEnabled} type="submit">
          Зарегистрироваться
        </Button>
      </Container>
      <Link to="/auth">Перейти к входу &#8658;</Link>
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
      autoComplete="new-password"
      disabled={isPasswordDisabled}
    />
  );
};

const FirstName = () => {
  const firstName = useStore($firstName);
  const firstNameError = useStore($firstNameError);
  const isFirstNameDisabled = useStore($isFormDisabled);

  return (
    <Input
      value={firstName}
      onChange={firstNameChanged}
      error={firstName && firstNameError}
      label="Имя"
      name="first_name"
      type="text"
      autoComplete="true"
      disabled={isFirstNameDisabled}
    />
  );
};

const LastName = () => {
  const lastName = useStore($lastName);
  const lastNameError = useStore($lastNameError);
  const isFirstNameDisabled = useStore($isFormDisabled);

  return (
    <Input
      value={lastName}
      onChange={lastNameChanged}
      error={lastName && lastNameError}
      label="Фамилия"
      name="last_name"
      type="text"
      autoComplete="true"
      disabled={isFirstNameDisabled}
    />
  );
};

const PasswordConfirmation = () => {
  const passwordConfirmation = useStore($passwordConfirmation);
  const passwordConfirmationError = useStore($passwordConfirmationError);
  const isPasswordConfirmationDisabled = useStore($isFormDisabled);

  return (
    <Input
      value={passwordConfirmation}
      onChange={passwordConfirmationChanged}
      error={passwordConfirmation && passwordConfirmationError}
      label="Потвердите пароль"
      name="password_confirmation"
      type="password"
      autoComplete="new-password"
      disabled={isPasswordConfirmationDisabled}
    />
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
