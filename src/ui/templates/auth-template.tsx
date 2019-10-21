import * as React from "react";
import styled from "styled-components";

type Props = {
  form: React.ReactNode;
};

export const AuthTemplate: React.FC<Props> = ({ form }) => (
  <Wrapper>{form && <FormContainer>{form}</FormContainer>}</Wrapper>
);

//{image && <ImageContainer>{image}</ImageContainer>}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
  justify-content: space-around;
`;

const FormContainer = styled.div`
  width: 450px;
  background: #ffffff;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  border-radius: 15px;
  @media (max-width: 500px) {
    box-shadow: none;
  }
`;
