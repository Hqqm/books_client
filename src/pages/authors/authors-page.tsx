import * as React from "react";

import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";

import { AuthorForm } from "./authors-form";
import { AuthorModal } from "./authors-modal";
import { TableOfAuthors } from "./authors-table";
import { authorsPageMounted } from "./model/author";

export const AuthorsPage = () => {
  React.useEffect(() => {
    authorsPageMounted();
  }, []);

  return (
    <React.Fragment>
      <MainTemplate
        header={<Header />}
        main={
          <FormWithTableTemplate
            form={<AuthorForm />}
            table={<TableOfAuthors />}
          />
        }
      />
      <AuthorModal />
    </React.Fragment>
  );
};
