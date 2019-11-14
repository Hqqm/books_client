import * as React from "react";
import styled from "styled-components";

interface TemplateProps {
  header: React.ReactNode;
  main: React.ReactNode;
}

export const MainTemplate: React.FC<TemplateProps> = ({ header, main }) => {
  return (
    <Container>
      {header && <Header>{header}</Header>}
      {main && <Main>{main}</Main>}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-rows: 50px auto;
  grid-template-columns: 200px auto;
  grid-template-areas:
    "header header header header"
    "main main main main";
`;

const Header = styled.div`
  grid-area: header;
  background: #01258e;
`;

const Main = styled.div`
  grid-area: main;
`;
