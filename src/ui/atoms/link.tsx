import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Link = styled(RouterLink)`
  color: #000;
  align-self: flex-end;
  margin-top: 10px;
  text-decoration: none;
  font-size: 14px;
  & {
    :hover {
      color: #40768e;
    }
  }
`;

export const NavBarLink = styled(RouterLink)`
  color: #fff;
  padding: 0 10px;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  & {
    :hover {
      text-decoration: underline;
    }
  }
`;
