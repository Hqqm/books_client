import * as React from "react";
import { ListOfAuthors } from "./authors-list";
import { CreateAuthorForm } from "./author-form";
import { authorsPageMounted } from "./model/author-list";
import styled from "styled-components";

export const AuthorsPage = () => {
  React.useEffect(() => {
    authorsPageMounted();
  }, []);

  return (
    <WrapperAuthorsPage>
      <CreateAuthorForm />
      <ListOfAuthors />
    </WrapperAuthorsPage>
  );
};

const WrapperAuthorsPage = styled.div`
  display: flex;
  justify-content: space-around;
`;
