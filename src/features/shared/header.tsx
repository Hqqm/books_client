import * as React from "react";
import styled from "styled-components";
import { createEvent } from "effector";
import { useStore } from "effector-react";
import { history } from "@lib/history";
import { isAdmin } from "@lib/isAdmin";
import { UserData } from "@api/account";
import { NavBarLink } from "@ui/atoms";
import {
  $session,
  dropSession,
  $isAuthenticated
} from "@features/shared/session";

export const Header = () => {
  const currentUser = useStore($session);
  const isAuthenticated = useStore($isAuthenticated);

  return (
    <HeaderContainer>
      <UserName>
        <NavBarLink to="/">{showUser(currentUser)}</NavBarLink>
      </UserName>
      <Navigation>
        <NavBarLink to="/books">Все книги</NavBarLink>
        {isAdmin(currentUser) && (
          <>
            <NavBarLink to="/authors">Панель авторов</NavBarLink>
            <NavBarLink to="/genres">Панель жанров</NavBarLink>
            <NavBarLink to="/users">Управление пользователями</NavBarLink>
          </>
        )}
        {isAuthenticated ? (
          <React.Fragment>
            <NavBarLink to="/myBooks">Мои книги</NavBarLink>
            <NavButton onClick={logout}>Выход</NavButton>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <NavBarLink to="/login">Войти</NavBarLink>
            <NavBarLink to="/register">Зарегистрироваться</NavBarLink>
          </React.Fragment>
        )}
      </Navigation>
    </HeaderContainer>
  );
};

const logout = createEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>();

logout.watch(() => {
  dropSession();
  history.replace("/");
});

const showUser = (user: UserData | null) =>
  user !== null ? user.last_name + " " + user.first_name : "guest";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 25px;
`;

const UserName = styled.div`
  display: flex;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  padding: 17px 10px;
  margin-left: 25px;
`;

const NavButton = styled.button`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  background: transparent;
  border: none;
  padding: 17px 10px;
  cursor: pointer;
  & {
    :hover {
      text-decoration: underline;
    }
  }
`;
