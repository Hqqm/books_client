import * as React from "react";
import styled from "styled-components";
import { Header } from "@features/shared/header";
import { MainTemplate } from "@ui/templates";
import { H2 } from "@ui/atoms";

export const HomePage = () => (
  <MainTemplate
    header={<Header />}
    main={
      <Container>
        <div>
          <img src={background} alt="peoples in library" />
        </div>
        <TextContainer>
          <H2 color={"#01258e"}>Добро пожаловать в библиотеку</H2>
        </TextContainer>
      </Container>
    }
  />
);

const background = require("../public/home.png");

const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
