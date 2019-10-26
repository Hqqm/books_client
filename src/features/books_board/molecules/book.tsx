import * as React from "react";

import { Button } from "@ui/atoms/button";

type Props = {
  author: string;
  name: string;
  price: string;
  children: React.ReactNode;
};

export const Book: React.FC<Props> = ({ author, name, price, children }) => {
  return (
    <>
      <div>{author}</div>
      <div>{name}</div>
      <div>цена:{price}</div>
      <div>{children}</div>
      <Button>Оформить</Button>
    </>
  );
};
