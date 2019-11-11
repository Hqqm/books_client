import * as React from "react";
import { TableOfAuthors } from "./authors-table";
import { AuthorForm } from "./author-form";
import { authorsPageMounted } from "./model/author-table";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";

export const AuthorsPage = () => {
  React.useEffect(() => {
    authorsPageMounted();
  }, []);

  return <FormWithTableTemplate form={<AuthorForm />} table={<TableOfAuthors />} />;
};
