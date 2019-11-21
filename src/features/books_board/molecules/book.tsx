import * as React from "react";
import { Book as BookType } from "@api/books";
import { Text, Th } from "@ui/atoms";

type Props = {
  author: string;
  name: string;
  price: number;
};

export const Book: React.FC<Props> = ({ author, name, price }) => {
  return (
    <>
      <Text size="15px" color="#000">
        Название книги: {name}
      </Text>
      <Text size="14px" color="#000">
        Автор: {author}
      </Text>
      <Text size="14px" color="#000">
        Цена: {price} рублей
      </Text>
    </>
  );
};

export const BookItem = (book: BookType) => {
  return (
    <>
      <Th>{book.id}</Th>
      <Th>{book.author_id}</Th>
      <Th>{book.genre_id}</Th>
      <Th>{book.name}</Th>
      <Th>{book.price}</Th>
    </>
  );
};
