import * as React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <div>
    <Link to="/auth">go to auth</Link>
    <br />
    <Link to="register">go to register</Link>
    <br />
    <Link to="/books">go to books</Link>
    <br />
    <Link to="/user_books">go to user books</Link>
  </div>
);
