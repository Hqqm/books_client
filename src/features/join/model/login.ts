import * as React from "react";
import { createEffect, createStore, createEvent, sample } from "effector";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
}

const initialUserState: UserData = {
  email: "",
  first_name: "",
  last_name: "",
  created_at: ""
};

interface FormData {
  email: string;
  password: string;
}

const initialState: FormData = {
  email: "",
  password: ""
};

export const sendForm = createEffect<FormData, UserData, Error>({
  handler: async data => {
    console.log(JSON.stringify(data));
    const response = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const json = await response.json();
    console.log(json);
    return json;
  }
});

export const submitted = createEvent<React.FormEvent<HTMLFormElement>>();
export const setField = createEvent();

export const $form = createStore<FormData>(initialState)
  .on(setField, (s, { key, value }: any) => ({
    ...s,
    [key]: value
  }))
  .reset(sendForm.done);

submitted.watch(event => {
  event.preventDefault();
});

sample({
  source: $form,
  clock: submitted,
  target: sendForm
});

export const $currentUser = createStore(initialUserState).on(
  sendForm.done,
  (s, { result }) => {
    console.log(result);
    return result;
  }
);
