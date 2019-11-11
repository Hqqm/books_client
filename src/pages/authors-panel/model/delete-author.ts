import { createEffect } from "effector";
import { $token } from "@features/shared/token";

export const deleteAuthor = createEffect<number, void, Error>("author deleting");

deleteAuthor.use(async (id: number) => {
  await fetch(`/api/authors/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
});
