import { createEvent, createEffect, createStore, forward } from "effector";
import { UserData, getCurrentAccount } from "@api/account";
import { tokenDropped } from "./token";

export const dropSession = createEvent();
export const loadSession = createEffect<void, UserData>();

export const $session = createStore<UserData | null>(null);
export const $isAuthenticated = $session.map(session => session !== null);

loadSession.use(() => getCurrentAccount());

$session
  .reset(dropSession)
  .on(loadSession.done, (_, { result }) => result)
  .on(loadSession.fail, () => null);

forward({ from: dropSession, to: tokenDropped });
