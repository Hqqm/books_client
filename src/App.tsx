import * as React from "react";
import { Router } from "react-router-dom";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { GlobalStyle } from "./lib/global_style";
import { AccountLoader } from "@features/shared/account-loader";
import { history } from "@lib/history";
import { Routes } from "@lib/routes";

export const App = hot(module)(() => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <AccountLoader>
        <Router history={history}>
          <Routes />
        </Router>
      </AccountLoader>
    </>
  );
});
