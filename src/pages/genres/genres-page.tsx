import * as React from "react";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";
import { GenreForm } from "./genres-form";
import { FormWithTableTemplate } from "@ui/templates/form-with-table-template";
import { TableOfGenres } from "./genres-table";
import { genresPageMounted } from "./model";

export const GenresPage = () => {
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
