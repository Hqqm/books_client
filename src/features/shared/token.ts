import Cookies from "browser-cookies";
import { createEvent, createStore } from "effector";

const token: string = "x-csrf-token";

export const tokenChanged = createEvent<string | null>();
export const tokenDropped = createEvent<void>();

export const $token = createStore<string | null>(Cookies.get(token) || null);

$token.on(tokenChanged, (_, token) => token);
$token.on(tokenDropped, () => null);

$token.watch(token => {
  if (token) {
    Cookies.set("x-csrf-token", token);
  }
});

tokenDropped.watch(() => Cookies.erase(token));
