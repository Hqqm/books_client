import * as React from "react";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/shared/header";
import { TableOfBooks } from "./books-table";
import { pageTableOfBooksReady } from "./model";

export const BooksPage = () => {
  React.useEffect(() => {
    pageTableOfBooksReady();
  }, []);

  return <MainTemplate header={<Header />} main={<TableOfBooks />} />;
};
