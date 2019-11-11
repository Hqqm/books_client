import { createEffect } from "effector";
import { $token } from "@features/shared/token";

type TakeBooksProps = {
  book_id: number;
  amount: number;
};

export const takeBook = createEffect<TakeBooksProps, void, Error>("taking book");

takeBook.use(async ({ book_id, amount }) => {
  await fetch("/api/takeBook", {
    method: "POST",
    body: JSON.stringify({
      book_id,
      amount
    }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });
});
