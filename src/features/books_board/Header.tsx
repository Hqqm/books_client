import * as React from "react";
import styled from "styled-components";

export const Header: React.FC<{}> = () => {
  return (
    <Nav>
      <Ul>
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
