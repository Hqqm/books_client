import { createStore, createEvent, createEffect, sample } from "effector";
import { history } from "@lib/history";
import { RegisterUser, registerUserHandler } from "@api/account";

const initialState: RegisterUser = {
  email: "",
  first_name: "",
  last_name: "",
  password: "",
  password_confirmation: ""
};

export const setFielded = createEvent();
export const formMounted = createEvent();
export const formUnmounted = createEvent();
export const formSubmitted = createEvent<React.FormEvent<HTMLFormElement>>();

export const registerUser = createEffect<RegisterUser, RegisterUser, Error>();

export const $registerForm = createStore<RegisterUser>(initialState);

$registerForm
  .on(setFielded, (s, { key, value }: any) => ({
    ...s,
    [key]: value
  }))
  .reset(formMounted, formUnmounted);

sample({
  source: $registerForm,
  clock: formSubmitted,
  target: registerUser
});

registerUser.use(registerUserHandler);
registerUser.done.watch(({ result }) => {
  console.log(result);
  history.push("/auth");
});
