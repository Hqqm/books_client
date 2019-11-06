import { $token } from "@features/shared/token";

export type Book = {
  id: number;
  author_id: number;
  name: string;
  price: number;
};

export type BookProps = {
  author_id: string;
  name: string;
  price: string;
};

export const createBook = async ({ author_id, name, price }: BookProps) => {
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({
      author_id: parseInt(author_id),
      name,
      price: parseInt(price)
    }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  const book = await response.json();
  console.log(book);
  return book;
};

export const removeBookHandler = async (id: number) => {
  await fetch(`/api/books/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
};

export const fetchBooks = async () => {
  const response = await fetch("/api/books", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
};
