import { HomePage } from "./home";
import { BooksPage } from "./books";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/register", exact: true, component: RegisterPage },
  { path: "/books", exact: true, component: BooksPage },
  { path: "/auth", exact: true, component: LoginPage }
];
