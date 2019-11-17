import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";
import { DeleteButton, Th } from "@ui/atoms";
import { $allAuthors, authorConfirmModalOpened } from "./model/author";

export const TableOfAuthors = () => {
  const headItems = ["id", "ФИО", "Дата рождения", "Страна"];

  const authors = useList($allAuthors, author => (
    <tr>
      <AuthorItem {...author} />
      <th>
        <ButtonWrapper>
          <DeleteButton onClick={() => authorConfirmModalOpened(author.id)}>
            Удалить
          </DeleteButton>
        </ButtonWrapper>
      </th>
    </tr>
  ));

  return <Table headItems={headItems} bodyItems={authors} />;
};

export type Author = {
  id: number;
  fio: string;
  date_of_birth: string;
  country: string;
};

const AuthorItem = (author: Author) => (
  <>
    <Th>{author.id}</Th>
    <Th>{author.fio}</Th>
    <Th>{author.date_of_birth}</Th>
    <Th>{author.country}</Th>
  </>
);

type Props = {
  headItems: string[];
  bodyItems: React.ReactNode;
};

export const Table = ({ headItems, bodyItems }: Props) => (
  <TableView>
    <thead>
      <tr>
        {headItems.map((item: string, index) => (
          <Th key={index}>{item}</Th>
        ))}
      </tr>
    </thead>
    <tbody>{bodyItems}</tbody>
  </TableView>
);

const TableView = styled.table`
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
`;

const ButtonWrapper = styled.div`
  margin: 5px 0;
`;
