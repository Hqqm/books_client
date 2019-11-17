import { HomePage } from "./home";
import { PanelBooksPage } from "./books";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";
import { BookPage } from "./book/book";
import { UserBooksPage } from "./users-books/user-books";
import { AuthorsPage } from "./authors-panel/authors-page";
import { UsersPage } from "./users/users";
import { GenrePage } from "./genre/genre-page";

export const routes = () => [
  { path: "/authorsPanel", exact: true, component: AuthorsPage },
  { path: "/books/:id", exact: true, component: BookPage },
  { path: "/genres", exact: true, component: GenrePage },
  { path: "/users", exact: true, component: UsersPage },
  { path: "/myBooks", exact: true, component: UserBooksPage },
  { path: "/books", exact: true, component: PanelBooksPage },
  { path: "/", exact: true, component: HomePage },
  { path: "/auth", exact: true, component: LoginPage },
  { path: "/register", exact: true, component: RegisterPage }
];
