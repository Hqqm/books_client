import styled from "styled-components";
import { Link } from "react-router-dom";

export const AuthLink = styled(Link)`
  color: #000;
  align-self: flex-end;
  margin-top: 10px;
  text-decoration: none;
`;

export const NavBarLink = styled(Link)`
  color: #fff;
  padding: 17px 10px;
  font-size: 14px;
  text-decoration: none;
  font-weight: bold;
  font-size: 14px;
  & {
    :hover {
      background: #305c71;
    }
  }
`;
