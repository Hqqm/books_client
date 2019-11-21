import * as React from "react";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";
import { TableOfBooks } from "@features/books_board/books-table";
import { pageTableOfBooksReady, loadBooks } from "@features/books_board/model";
import { Spiner } from "@ui/atoms";

export const BooksPage = () => {
  React.useEffect(() => {
    pageTableOfBooksReady();
  }, []);

  return <MainTemplate header={<Header />} main={<TableOfBooks />} />;
};
