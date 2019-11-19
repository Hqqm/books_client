import * as React from "react";
import { useList } from "effector-react";
import { DeleteButton, Th } from "@ui/atoms";
import { Table } from "@ui/organisms/table";
import { $allAuthors, Author } from "./model/author";
import { confirmModalOpened } from "@features/shared/modal/model";

export const TableOfAuthors = () => {
  const authors = useList($allAuthors, author => (
    <tr>
      <AuthorItem {...author} />
      <th>
        <DeleteButton onClick={() => confirmModalOpened(author.id)}>
          Удалить
        </DeleteButton>
      </th>
    </tr>
  ));

  return <Table headItems={headItems} bodyItems={authors} />;
};

const headItems = ["id", "ФИО", "Дата рождения", "Страна"];

const AuthorItem = (author: Author) => (
  <>
    <Th>{author.id}</Th>
    <Th>{author.fio}</Th>
    <Th>{author.date_of_birth}</Th>
    <Th>{author.country}</Th>
  </>
);
