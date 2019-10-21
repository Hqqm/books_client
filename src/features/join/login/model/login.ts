import * as React from "react";
import { createEffect, createStore, createEvent, sample } from "effector";
import { FormData, createSessionHandler } from "@api/session";
import { history } from "@lib/history";
import { tokenChanged } from "@features/shared/token";
import { $isAuthenticated, loadSession } from "@features/shared/session";

const initialState: FormData = {
  email: "",
  password: ""
};

export const formMounted = createEvent();
export const formUnmounted = createEvent();
export const submitted = createEvent<React.FormEvent<HTMLFormElement>>();
export const setFielded = createEvent();

export const createSession = createEffect<FormData, string | null, Error>();

export const $form = createStore<FormData>(initialState);

$form
  .on(setFielded, (s, { key, value }: any) => ({
    ...s,
    [key]: value
  }))
  .reset(formMounted, formUnmounted);

sample({
  source: $form,
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
