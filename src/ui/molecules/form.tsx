import * as React from "react";
import styled from "styled-components";
import { Text } from "@ui/atoms";

interface FormProps {
  title?: string;
  children: React.ReactNode;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export const Form: React.FC<FormProps> = ({ onSubmit, title, children }) => {
  return (
    <form onSubmit={onSubmit}>
      <FormContainer>
        <Text color="#a75aff" size="30px">
          {title}
        </Text>
        {children}
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
