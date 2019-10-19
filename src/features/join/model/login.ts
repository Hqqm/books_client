import * as React from "react";
import { createEffect, createStore, createEvent, sample } from "effector";
import { tokenChanged } from "@features/shared/token";

type FormData = {
  email: string;
  password: string;
};

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

createSession.use(async data => {
  const response = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const token = response.headers.get("x-csrf-token");
  return token;
});

createSession.done.watch(({ result }) => {
  const token = result ? result : null;
  tokenChanged(token);
});

submitted.watch(event => {
  event.preventDefault();
});
