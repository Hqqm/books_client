import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
}

export const Button = styled.button<Props>`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background: #a75aff;
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

export const TableButton = styled(Button)`
  padding: 5px;
`;

export const DeleteButton = styled(Button)`
  background: #da3535;
`;
