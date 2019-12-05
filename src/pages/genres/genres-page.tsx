import * as React from "react";
import { MainTemplate, FormWithTableTemplate } from "@ui/templates";
import { Header } from "@features/shared/header";
import { GenreForm } from "./genres-form";
import { TableOfGenres } from "./genres-table";
import { GenreModal } from "./genres-modal";
import { genresPageMounted } from "./model";

export const GenresPage = () => {
  React.useEffect(() => {
    genresPageMounted();
  }, []);

  return (
    <React.Fragment>
      <MainTemplate
        header={<Header />}
        main={
          <FormWithTableTemplate
            form={<GenreForm />}
            table={<TableOfGenres />}
          />
        }
      />
      <GenreModal />
    </React.Fragment>
  );
};
