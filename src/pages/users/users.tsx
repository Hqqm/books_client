import * as React from "react";
import styled from "styled-components";
import { useList, useStore } from "effector-react";
import { $users, User, usersPageMounted, deleteUser } from "./model";
import { DeleteButton } from "@ui/atoms";
import { Table } from "pages/authors-panel/authors-table";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";

export const UsersPage = () => {
  React.useEffect(() => {
    usersPageMounted();
  }, []);

  return <MainTemplate header={<Header />} main={<UsersTable />} />;
};

const UsersTable = () => {
  const tableHeaderItems = [
    "id пользователя",
    "Имя",
    "Фамилия",
    "Почта",
    "Роль",
    "Дата создания аккаунта"
  ];

  const users = useList($users, user => (
    <tr>
      <UserInfo {...user} />
      <th>
        <DeleteButton onClick={() => deleteUser(user.id)}>Удалить</DeleteButton>
      </th>
    </tr>
  ));

  return (
    <UsersPageWrapper>
      <Table headItems={tableHeaderItems} bodyItems={users} />
    </UsersPageWrapper>
  );
};

const UserInfo = (user: User) => {
  return (
    <>
      <Th>{user.id}</Th>
      <Th>{user.first_name}</Th>
      <Th>{user.last_name}</Th>
      <Th>{user.email}</Th>
      <Th>{user.role}</Th>
      <Th>{user.created_at}</Th>
    </>
  );
};

const Th = styled.th`
  background: #fff;
  color: black;
  padding: 10px 20px;
  font-weight: 500;
`;

const UsersPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
