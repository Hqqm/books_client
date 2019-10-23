import Cookies from "browser-cookies";
import { createEvent, createStore } from "effector";

const tokenName: string = "x-csrf-token";

export const tokenChanged = createEvent<string | null>();
export const tokenDropped = createEvent<void>();

export const $token = createStore<string | null>(Cookies.get(tokenName) || null);

$token.on(tokenChanged, (_, token) => token).on(tokenDropped, () => null);

$token.watch(token => {
  if (token) {
    Cookies.set("x-csrf-token", token);
  }
});

tokenDropped.watch(() => Cookies.erase(tokenName));
