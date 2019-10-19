import * as React from "react";
import styled from "styled-components";

import { useStore } from "effector-react";
import { loadSession, $session } from "@features/shared/session";

export const Header: React.FC<{}> = () => {
  React.useEffect(() => {
    loadSession();
  }, []);

  const currentUser = useStore($session);
  return (
    <Nav>
      <Ul>
        <Item>current user:{JSON.stringify(currentUser)}</Item>
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
