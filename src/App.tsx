import * as React from "react";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { GlobalStyle } from "./lib/global_style";

import { MainTemplate } from "@ui/templates/main_template";
import { ListOfBooks } from "@features/books_board/ListOfBooks";
import { Header } from "@features/books_board/Header";

export const App: React.FC<{}> = hot(module)(() => {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <MainTemplate
        header={<Header />}
        main={<ListOfBooks />}
        sidebar={"sidebar"}
      />
    </>
  );
});
