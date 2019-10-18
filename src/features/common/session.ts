import { createEvent, createEffect, createStore } from "effector";
import { UserData, getCurrentAccount } from "../../api/account";

export const dropSession = createEvent();
export const loadSession = createEffect<void, UserData, Error>();

export const $session = createStore<UserData | null>(null);
export const $isAuthenticated = $session.map(session => session !== null);

loadSession.use(() => getCurrentAccount());

$session
  .on(loadSession.done, (_, { result }) => result)
  .on(loadSession.fail, () => null)
  .reset(dropSession);
