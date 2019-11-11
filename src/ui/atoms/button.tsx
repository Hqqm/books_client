import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
}

export const Button = styled.button<Props>`
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  background: #4d7689;
  border: none;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
  font-weight: 600;
  font-size: 1.1rem;
  & {
    :hover {
      background: linear-gradient(to right, #92fe9d 0%, #00c9ff 100%);
    }
  }

  &:disabled,
  &:disabled:hover,
  &:disabled:focus,
  &:disabled:active {
    background-color: #d2d2d2;
    border-color: #d2d2d2;
    color: white;
  }

  &:disabled {
    cursor: default;
  }
`;

type TableProps = {
  backColor: string;
};

export const TableButton = styled(Button)<TableProps>`
  margin: 5px;
  padding: 10px;
  border: 1px solid;
  color: #fff;
  background: ${({ backColor }) => backColor};
  & {
    :hover {
      background: rgba(0, 0, 0, 0.5);
    }
  }
`;
