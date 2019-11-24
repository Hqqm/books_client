import * as React from "react";
import styled, { keyframes } from "styled-components";

export const Spiner = () => {
  return (
    <Container>
      <StyledSpiner />
    </Container>
  );
};

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const StyledSpiner = styled.div`
  display: inline-block;
  width: 64px;
  height: 64px;

  &::after {
    content: " ";
    display: block;
    width: 46px;
    height: 46px;
    margin: 1px;
    border-radius: 50%;
    border: 5px solid #fff;
    border-color: black transparent black transparent;
    animation: ${rotate} 1.2s linear infinite;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 187px;
  width: 821px;
`;
