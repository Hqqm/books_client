import * as React from "react";
import styled from "styled-components";
import { Button, Text } from "@ui/atoms";

interface FormProps {
  title?: string;
  link?: React.ReactNode;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit, title, children, link }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormContainer>
        <Text color="#c9e2aa" size="3rem">
          {title}
        </Text>
        {children}
        {link}
      </FormContainer>
    </form>
  );
};

const FormContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px;
`;
