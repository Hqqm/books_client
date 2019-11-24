import * as React from "react";
import styled from "styled-components";

import { useList } from "effector-react";
import { $users, User } from "./model";
import { DeleteButton, Th } from "@ui/atoms";
import { confirmModalOpened } from "@features/shared/modal/model";
import { Table } from "@ui/organisms/table";

export const UsersTable = () => {
  const users = useList($users, user => (
    <tr>
      <UserInfo {...user} />
      <th>
        <DeleteButton onClick={() => confirmModalOpened(user.id)}>
          Удалить
        </DeleteButton>
      </th>
    </tr>
  ));

  return (
    <UsersPageWrapper>
      <Table headItems={tableHeaderItems} bodyItems={users} />
    </UsersPageWrapper>
  );
};

const tableHeaderItems = [
  "id пользователя",
  "Имя",
  "Фамилия",
  "Почта",
  "Роль",
  "Дата создания аккаунта"
];

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

const UsersPageWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`;
