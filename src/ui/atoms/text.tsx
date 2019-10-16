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
