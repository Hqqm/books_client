import { HomePage } from "./home";
import { BooksPage } from "./books";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { BookPage } from "./book/book";
import { UserBooks } from "./all_books/user-books";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/register", exact: true, component: RegisterPage },
  { path: "/user_books", exact: true, component: UserBooks },
  { path: "/books", exact: true, component: BooksPage },
  { path: "/books/:id", exact: true, component: BookPage },
  { path: "/auth", exact: true, component: LoginPage }
];
