import * as React from "react";
import { useList } from "effector-react";
import { DeleteButton, Th, UpdateButton } from "@ui/atoms";
import { Table } from "@ui/organisms";
import { confirmModalOpened } from "@features/shared/modal/model";
import { $allAuthors, Author, authorUpdated } from "./model/author";

export const TableOfAuthors = () => {
  const authors = useList($allAuthors, author => (
    <tr>
      <AuthorItem {...author} />
      <th>
        <DeleteButton onClick={() => confirmModalOpened(author.id)}>
          Удалить
        </DeleteButton>
        <UpdateButton onClick={() => authorUpdated(author.id)}>
          Обновить
        </UpdateButton>
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
