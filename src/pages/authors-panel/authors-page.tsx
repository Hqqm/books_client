import * as React from "react";
import { TableOfAuthors } from "./authors-table";
import { AuthorForm } from "./author-form";
import { authorsPageMounted } from "./model/author";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";

export const AuthorsPage = () => {
  React.useEffect(() => {
    authorsPageMounted();
  }, []);

  return (
    <MainTemplate
      header={<Header />}
      main={
        <FormWithTableTemplate
          form={<AuthorForm />}
          table={<TableOfAuthors />}
        />
      }
    />
  );
};
