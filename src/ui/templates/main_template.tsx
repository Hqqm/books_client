import * as React from "react";
import styled from "styled-components";

interface TemplateProps {
  header: React.ReactNode;
  main: React.ReactNode;
  sidebar: React.ReactNode;
}

export const MainTemplate: React.FC<TemplateProps> = ({
  header,
  main,
  sidebar
}) => {
  return (
    <Container>
      {header && <Header>{header}</Header>}
      {main && <Main>{main}</Main>}
      {sidebar && <Sidebar>{sidebar}</Sidebar>}
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
    "sidebar main main main";
`;

const Header = styled.div`
  grid-area: header;
  background: #f8cccb;
`;

const Main = styled.div`
  grid-area: main;
`;

const Sidebar = styled.div`
  grid-area: sidebar;
  background: #ccccff;
`;
