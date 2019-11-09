import * as React from "react";

type Props = {
  author: string;
  name: string;
  price: number;
  children: React.ReactNode;
};

export const Book: React.FC<Props> = ({ author, name, price, children }) => {
  return (
    <>
      <div> {author}</div>
      <div> {name}</div>
      <div>цена:{price}</div>
      <div>{children}</div>
    </>
  );
};
