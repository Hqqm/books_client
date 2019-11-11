import { createEffect, createEvent, createStore } from "effector";
import { Author } from "../authors-table";
import { $token } from "@features/shared/token";
import { deleteAuthor } from "./delete-author";
import { createAuthor } from "./create-author";

export const authorsPageMounted = createEvent("author page mounted");
export const fetchAllAuthors = createEffect<void, Author[], Error>(
  "fetching all authors"
);

export const $allAuthors = createStore<Author[]>([]);

fetchAllAuthors.use(async () => {
  const response = await fetch("/api/authors", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
});

$allAuthors
  .on(fetchAllAuthors.done, (_, { result }) => result)
  .on(createAuthor.done, (state, { result }) => [...state, result])
  .on(deleteAuthor.done, (state, { params }) =>
    state.filter(author => author.id !== params)
  );

authorsPageMounted.watch(() => fetchAllAuthors());
