import { $token } from "@features/shared/token";

export type Book = {
  id: number;
  author_id: number;
  genre_id: number;
  name: string;
  price: number;
};

export type BookProps = {
  author_id: string;
  genre_id: string;
  name: string;
  price: string;
};

export type UpdateBook = {
  formData: BookProps;
  id: number;
};

export type TakeBooksProps = {
  book_id: number;
  amount: number;
};

export const efCreateBook = async ({
  author_id,
  name,
  price,
  genre_id
}: BookProps) => {
  const response = await fetch("/api/books", {
    method: "POST",
    body: JSON.stringify({
      author_id: parseInt(author_id),
      genre_id: parseInt(genre_id),
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

export const efRemoveBook = async (id: number) => {
  await fetch(`/api/books/${id}`, {
    method: "DELETE",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
};

export const efFetchBooks = async () => {
  const response = await fetch("/api/books", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });

  return response.json();
};

export const efTakeBook = async ({ book_id, amount }: TakeBooksProps) => {
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
};

export const efUpdateBook = async (book: UpdateBook) => {
  await fetch(`/api/books/${book.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      author_id: parseInt(book.formData.author_id),
      genre_id: parseInt(book.formData.genre_id),
      name: book.formData.name,
      price: parseInt(book.formData.price)
    }),
    headers: {
      "Content-Type": "application/json",
      "x-csrf-token": $token.getState() || ""
    }
  });
};
