import * as React from "react";
import { MainTemplate } from "@ui/templates/main_template";
import { Header } from "@features/books_board/Header";
import { ListOfBooks } from "@features/books_board/ListOfBooks";
import { pageListOfBooksReady } from "@features/books_board/model/fetch-books";

export const AdminBooksPage = () => {
  React.useEffect(() => {
    pageListOfBooksReady();
  }, []);

  return <MainTemplate header={<Header />} main={<ListOfBooks />} />;
};
