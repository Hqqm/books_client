import * as React from "react";

interface ListProps<T> {
  list: T[];
  renderExists: (list: T[]) => React.ReactNode;
  renderEmpty: () => React.ReactNode;
}

export const ConditionalList = <T extends unknown>({
  list,
  renderExists,
  renderEmpty
}: ListProps<T>) => {
  return (
    <>
      {list && list.filter(Boolean).length > 0
        ? renderExists(list)
        : renderEmpty()}
    </>
  );
};
