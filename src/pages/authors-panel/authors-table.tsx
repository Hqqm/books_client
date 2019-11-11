import * as React from "react";
import styled from "styled-components";
import { useList } from "effector-react";
import { TableButton } from "@ui/atoms";
import { deleteAuthor } from "./model/delete-author";
import { $allAuthors } from "./model/author-table";

export type Author = {
  id: number;
  fio: string;
  date_of_birth: string;
  country: string;
};

type Props = {
  headItems: string[];
  bodyItems: React.ReactNode;
};

export const TableOfAuthors = () => {
  const headItems = ["id", "ФИО", "Дата рождения", "Страна"];

  const authors = useList($allAuthors, author => (
    <tr>
      <AuthorItem {...author} />
      <th>
        <ButtonWrapper>
          <TableButton onClick={() => deleteAuthor(author.id)} backColor="#da3535">
            Удалить
          </TableButton>
        </ButtonWrapper>
      </th>
    </tr>
  ));

  return <Table headItems={headItems} bodyItems={authors} />;
};

const AuthorItem = (author: Author) => (
  <>
    <Th>{author.id}</Th>
    <Th>{author.fio}</Th>
    <Th>{author.date_of_birth}</Th>
    <Th>{author.country}</Th>
  </>
);

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

const Th = styled.th`
  background: #fff;
  color: black;
  padding: 10px 20px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  margin: 5px 0;
`;
