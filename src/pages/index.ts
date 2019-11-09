import { HomePage } from "./home";
import { AdminBooksPage } from "./books";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { BookPage } from "./book/book";
import { UserBooksPage } from "./all_books/user-books";
import { AuthorsPage } from "./authors-panel/authors-page";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/register", exact: true, component: RegisterPage },
  { path: "/userBooks", exact: true, component: UserBooksPage },
  { path: "/createAuthor", exact: true, component: AuthorsPage },
  { path: "/books", exact: true, component: AdminBooksPage },
  { path: "/books/:id", exact: true, component: BookPage },
  { path: "/auth", exact: true, component: LoginPage }
];
