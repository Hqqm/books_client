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
  display: flex;
  height: 100%;
  flex-direction: column;
`;

const Header = styled.div`
  height: 50px;
  background: #01258e;
`;

const Main = styled.div`
  height: calc(100% - 50px);
`;
