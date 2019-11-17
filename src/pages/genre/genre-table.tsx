import * as React from "react";
import { useList } from "effector-react";
import { DeleteButton, Th } from "@ui/atoms";
import { Table } from "pages/authors-panel/authors-table";
import { Genre, $allGenres } from "./model";

const headItems = ["id", "Название жанра"];

export const TableOfGenres = () => {
  const genres = useList($allGenres, genre => (
    <tr>
      <GenreItem {...genre} />
      <th>
        <DeleteButton onClick={() => console.log("paw")}>Удалить</DeleteButton>
      </th>
    </tr>
  ));

  return <Table headItems={headItems} bodyItems={genres} />;
};

const GenreItem = (genre: Genre) => (
  <>
    <Th>{genre.id}</Th>
    <Th>{genre.name}</Th>
  </>
);
