import * as React from "react";

import styled from "styled-components";
import { $currentUser } from "@features/join/model/login";
import { useStore } from "effector-react";

export const Header: React.FC<{}> = () => {
  const currentUser = useStore($currentUser);

  return (
    <Nav>
      <Ul>
        <Item>hiii {currentUser.first_name + " " + currentUser.last_name}</Item>
        <Item>Управление</Item>
        <Item>Выход</Item>
      </Ul>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  height: 100%;
`;

const Item = styled.li`
  list-style: none;
  margin-right: 25px;
`;

const Ul = styled.ul`
  display: flex;
  align-items: center;
`;
