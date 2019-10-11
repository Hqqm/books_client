import * as React from "react";
import styled from "styled-components";

import { Button } from "@ui/atoms/button";

interface Props {
  author: string;
  name: string;
}

export const Book: React.FC<Props> = ({ author, name }) => {
  return (
    <Container>
      <div>{author}</div>
      <div>{name}</div>
      <Button>Оформить</Button>
    </Container>
  );
};

const Container = styled.div`
  width: 150px;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
