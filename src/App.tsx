import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { hot } from "react-hot-loader";
import { Normalize } from "styled-normalize";

import { GlobalStyle } from "./lib/global_style";
import { Login } from "./pages/login";
import { BooksPage } from "./pages/booksPage";

export const App = hot(module)(() => {
  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Link to="/auth">gogo</Link>} />
          <Route path="/auth" component={Login} />
          <Route exact path="/books" component={BooksPage} />
          <Route path="/" render={() => <h2>ой 404</h2>} />
        </Switch>
      </Router>
    </>
  );
});
