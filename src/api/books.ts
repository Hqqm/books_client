import { $token } from "@features/shared/token";

export type Book = {
  id: number;
  author: string;
  name: string;
  price: string;
};

export type BookProps = {
  author: string;
  name: string;
  price: string;
};

export const createBook = async ({ author, name, price }: BookProps) => {
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({ author, name, price: parseInt(price) }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });

  const book = await response.json();
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
  const req = await fetch("/api/books", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  const json = req.json();
  return json;
};
