import { createStore, createEvent } from "effector";

export const confirmModalOpened = createEvent<number>("confirm modal opened");
export const confirmModalClosed = createEvent(" confirm modal closed");

export const $confirmModal = createStore<boolean>(false);

$confirmModal
  .on(confirmModalOpened, (_, __) => true)
  .on(confirmModalClosed, (_, __) => false);

confirmModalOpened.watch(() => {
  let root = document.getElementById("root");
  if (root) root.style.opacity = "0.3";
});

confirmModalClosed.watch(() => {
  let root = document.getElementById("root");
  if (root) root.style.opacity = "1";
});
