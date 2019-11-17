import styled from "styled-components";

type Props = {
  size?: string;
  color: string;
};

export const Text = styled.div<Props>`
  color: ${({ color }) => color};
  font-size: ${({ size }) => size || "1.4rem"};
  margin-bottom: 15px;
`;

export const H2 = styled.div`
  color: #fff;
  margin: 10px;
  font-size: 18px;
  font-weight: 600;
`;
