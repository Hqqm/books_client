import styled from "styled-components";

interface Props {
  type?: "button" | "submit" | "reset";
}

export const Button = styled.button<Props>`
  width: 100%;
  padding: 13px;
  border-radius: 10px;
  background: #01258e;
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

export const InfoButton = styled.button`
  width: 100%;
  margin: 5px;
  padding: 10px;
  border: 1px solid;
  border-radius: 10px;
  color: #01258e;
  background: #fff;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  & {
    :hover {
      background: #01258e;
      color: #fff;
    }
  }
`;

export const DeleteButton = styled(InfoButton)`
  color: #da3535;
  background: #fff;
  & {
    :hover {
      background: #da3535;
      color: #fff;
    }
  }
`;

export const PrimaryButton = styled(InfoButton)`
  color: #418037;
  background: #fff;
  & {
    :hover {
      background: #418037;
      color: #fff;
    }
  }
`;
