import {
  createStore,
  createEvent,
  createEffect,
  sample,
  createStoreObject
} from "effector";
import { history } from "@lib/history";
import { RegisterUser, registerUserHandler } from "@api/account";
import {
  emailValidator,
  passwordValidator,
  textValidator,
  passwordConfirmation
} from "@lib/validators";

export const formMounted = createEvent();
export const formUnmounted = createEvent();
export const formSubmitted = createEvent<React.FormEvent<HTMLFormElement>>();
export const emailChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const passwordChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const firstNameChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const lastNameChanged = createEvent<React.SyntheticEvent<HTMLInputElement>>();
export const passwordConfirmationChanged = createEvent<
  React.SyntheticEvent<HTMLInputElement>
>();

export const registerUser = createEffect<RegisterUser, RegisterUser, Error>();

export const $email = createStore<string>("");
export const $emailError = $email.map<string | null>(emailValidator);
export const $isEmailCorrect = $emailError.map<boolean>(value => value === null);

export const $password = createStore<string>("");
export const $passwordError = $password.map<string | null>(passwordValidator);
export const $isPasswordCorrect = $passwordError.map<boolean>(value => value === null);

export const $firstName = createStore<string>("");
export const $firstNameError = $firstName.map<string | null>(textValidator);
export const $isFirstNameCorrect = $firstNameError.map<boolean>(value => value === null);

export const $lastName = createStore<string>("");
export const $lastNameError = $lastName.map<string | null>(textValidator);
export const $isLastNameCorrect = $lastNameError.map<boolean>(value => value === null);

export const $passwordConfirmation = createStore<string>("");
export const $passwordConfirmationError = $passwordConfirmation.map<string | null>(
  currentPassword => passwordConfirmation(currentPassword, $password.getState())
);
export const $isPasswordConfirmationCorrect = $passwordConfirmationError.map<boolean>(
  value => value === null
);

$email.on(emailChanged.map(e => e.currentTarget.value), (_, email) => email);
$password.on(passwordChanged.map(e => e.currentTarget.value), (_, password) => password);
$firstName.on(
  firstNameChanged.map(e => e.currentTarget.value),
  (_, firstName) => firstName
);
$lastName.on(lastNameChanged.map(e => e.currentTarget.value), (_, lastName) => lastName);
$passwordConfirmation.on(
  passwordConfirmationChanged.map(e => e.currentTarget.value),
  (_, passwordConfirmation) => passwordConfirmation
);

$email.reset(formMounted, formUnmounted);
$password.reset(formMounted, formUnmounted);
$firstName.reset(formMounted, formUnmounted);
$lastName.reset(formMounted, formUnmounted);
$passwordConfirmation.reset(formMounted, formUnmounted);

export const $isFormDisabled = registerUser.pending;

const $form = createStoreObject({
  email: $email,
  first_name: $firstName,
  last_name: $lastName,
  password: $password,
  password_confirmation: $passwordConfirmation
});

sample({
  source: $form,
  clock: formSubmitted,
  target: registerUser
});

registerUser.use(registerUserHandler);
registerUser.done.watch(({ result }) => {
  console.log(result);
  history.push("/auth");
});
