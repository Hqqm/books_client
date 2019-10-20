import * as React from "react";
import { MainTemplate } from "@ui/templates/main_template";
import { Header } from "@features/books_board/Header";
import { ListOfBooks } from "@features/books_board/ListOfBooks";

export const BooksPage = () => (
  <MainTemplate header={<Header />} main={<ListOfBooks />} />
);
