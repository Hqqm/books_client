import * as React from "react";
import styled from "styled-components";

import { useStore } from "effector-react";
import { $session, $isAuthenticated } from "@features/shared/session";
import { UserData } from "@api/account";
import { Button } from "@ui/atoms";
import { logout } from "./model/fetch-books";

export const Header = () => {
  const currentUser = useStore($session);
  const isAuthentication = useStore($isAuthenticated);
  console.log(currentUser);

  return (
    <Nav>
      <Ul>
        <Item>isAuthentication : {isAuthentication ? "true" : "false"} </Item>
        <Item>current user : {showUser(currentUser)}</Item>
        <Item>Управление</Item>
        <Item>
          <Button onClick={logout}>Выход</Button>{" "}
        </Item>
      </Ul>
    </Nav>
  );
};

const showUser = (user: UserData | null) =>
  user !== null ? user.last_name + " " + user.first_name : "guest";

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
