import * as React from "react";
import { createEffect, createStore, createEvent, sample } from "effector";
import { FormData, createSessionHandler } from "@api/session";
import { history } from "@lib/history";
import { tokenChanged } from "@features/shared/token";
import { $isAuthenticated } from "@features/shared/session";

const initialState: FormData = {
  email: "",
  password: ""
};

export const submitted = createEvent<React.FormEvent<HTMLFormElement>>();
export const pageReady = createEvent();
export const setField = createEvent();

export const createSession = createEffect<FormData, string | null, Error>();

export const $form = createStore<FormData>(initialState);

$form
  .on(setField, (s, { key, value }: any) => ({
    ...s,
    [key]: value
  }))
  .reset(createSession.done);

sample({
  source: $form,
  clock: submitted,
  target: createSession
});

createSession.use(createSessionHandler);
createSession.done.watch(({ result }) => {
  const token = result ? result : null;
  tokenChanged(token);
  history.push("/books");
});

pageReady.watch(() => {
  if ($isAuthenticated.getState()) {
    history.push("/");
  }
});

submitted.watch(event => {
  event.preventDefault();
});
