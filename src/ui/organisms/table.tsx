import * as React from "react";
import styled from "styled-components";
import { Th } from "@ui/atoms";

type Props = {
  headItems: string[];
  bodyItems: React.ReactNode;
};

export const Table = ({ headItems, bodyItems }: Props) => (
  <TableView>
    <thead>
      <tr>
        {headItems.map((item: string, index) => (
          <Th key={index}>{item}</Th>
        ))}
      </tr>
    </thead>
    <tbody>{bodyItems}</tbody>
  </TableView>
);

const TableView = styled.table`
  border-radius: 10px;
  border-spacing: 0;
  text-align: center;
`;
