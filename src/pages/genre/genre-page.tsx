import * as React from "react";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";
import { GenreForm } from "./genre-form";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { TableOfGenres } from "./genre-table";
import { genresPageMounted } from "./model";

export const GenrePage = () => {
  React.useEffect(() => {
    genresPageMounted();
  }, []);

  return (
    <MainTemplate
      header={<Header />}
      main={
        <FormWithTableTemplate form={<GenreForm />} table={<TableOfGenres />} />
      }
    />
  );
};
