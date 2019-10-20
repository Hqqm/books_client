import * as React from "react";
import { Link } from "react-router-dom";

export const HomePage = () => (
  <div>
    <Link to="/auth">go to auth</Link>
    <br />
    <Link to="/books">go to books</Link>
  </div>
);
