import * as React from "react";
import styled from "styled-components";

import { Button } from "@ui/atoms/button";

export type BookProps = {
  author: string;
  name: string;
  price: string;
};

export const Book: React.FC<BookProps> = ({ author, name, price }) => {
  return (
    <Container>
      <div>{author}</div>
      <div>{name}</div>
      <div>цена:{price}</div>
      <Button>Оформить</Button>
    </Container>
  );
};

const Container = styled.li`
  width: 180px;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25);
`;
