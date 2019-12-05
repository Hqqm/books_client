import { HomePage } from "./home";
import { AuthorsPage } from "./authors/authors-page";
import { GenresPage } from "./genres/genres-page";
import { UsersPage } from "./users/users-page";
import { BooksPage } from "./books/books-page";
import { BookPage } from "./book/book";
import { MyBooksPage } from "./my-books/my-books-page";
import { LoginPage } from "./login";
import { RegisterPage } from "./register";

export const routes = () => [
  { path: "/", exact: true, component: HomePage },
  { path: "/authors", exact: true, component: AuthorsPage },
  { path: "/genres", exact: true, component: GenresPage },
  { path: "/users", exact: true, component: UsersPage },
  { path: "/books", exact: true, component: BooksPage },
  { path: "/books/:id", exact: true, component: BookPage },
  { path: "/myBooks", exact: true, component: MyBooksPage },
  { path: "/login", exact: true, component: LoginPage },
  { path: "/register", exact: true, component: RegisterPage }
];
