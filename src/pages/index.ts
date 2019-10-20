import { HomePage } from "./home";
import { BooksPage } from "./books";
import { LoginPage } from "./login";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/books", exact: true, component: BooksPage },
  { path: "/auth", exact: true, component: LoginPage }
];
