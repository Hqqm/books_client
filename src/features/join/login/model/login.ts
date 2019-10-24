import * as React from "react";
import {
  createEffect,
  createStore,
  createEvent,
  sample,
  createStoreObject,
  combine
} from "effector";

import { FormData, createSessionHandler } from "@api/session";
import { history } from "@lib/history";
import { tokenChanged } from "@features/shared/token";
import { $isAuthenticated, loadSession } from "@features/shared/session";
import { emailValidator, passwordValidator } from "@lib/validators";

export const emailChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const passwordChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const submitted = createEvent<React.FormEvent<HTMLFormElement>>();
export const formMounted = createEvent();
export const formUnmounted = createEvent();

export const createSession = createEffect<FormData, string | null, Error>();

export const $email = createStore<string>("");
export const $emailError = $email.map<string | null>(emailValidator);
export const $isEmailCorrect = $emailError.map<boolean>(value => value === null);

export const $password = createStore<string>("");
export const $passwordError = $password.map<string | null>(passwordValidator);
export const $isPasswordCorrect = $passwordError.map<boolean>(value => value === null);

export const submitLoginForm = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  submitted(e);
};

export const $isFormDisabled = createSession.pending;
const $isFormValid = combine(
  $isPasswordCorrect,
  $isEmailCorrect,
  (isPasswordCorrect, isEmailCorrect) => isPasswordCorrect && isEmailCorrect
);

export const $isSubmitEnabled = combine(
  $isFormValid,
  createSession.pending,
  (isFormValid, isSessionLoading) => isFormValid && !isSessionLoading
);

export const $loginForm = createStoreObject({
  email: $email,
  password: $password
});

$email.on(emailChanged.map(e => e.currentTarget.value), (_, email) => email);
$password.on(passwordChanged.map(e => e.currentTarget.value), (_, password) => password);

$email.reset(formMounted, formUnmounted);
$password.reset(formMounted, formUnmounted);

sample({
  source: $loginForm,
  clock: submitted,
  target: createSession
});

createSession.use(createSessionHandler);

createSession.done.watch(({ result }) => {
  const token = result ? result : null;
  tokenChanged(token);
  loadSession();
  history.replace("/books");
});

formMounted.watch(() => {
  if ($isAuthenticated.getState()) {
    history.replace("/");
  }
});
