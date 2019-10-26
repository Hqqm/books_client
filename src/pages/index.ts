import { HomePage } from "./home";
import { BooksPage } from "./books";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { BookPage } from "./book/book";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/register", exact: true, component: RegisterPage },
  { path: "/books", exact: true, component: BooksPage },
  { path: "/books/:id", exact: true, component: BookPage },
  { path: "/auth", exact: true, component: LoginPage }
];
