import * as React from "react";
import styled, { css } from "styled-components";

interface InputProps {
  label?: React.ReactNode;
  value: any;
  error: string | null;
  name: string;
  placeholder?: string;
  type?: string;
  autoComplete: string;
  disabled: boolean;

  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  error,
  value,
  name,
  type,
  placeholder,
  onChange,
  disabled
}: InputProps) => (
  <Container>
    {label && <InputLabel>{label}</InputLabel>}
    <StyledInput
      error={error}
      value={value}
      onChange={onChange}
      name={name}
      type={type}
      placeholder={placeholder}
      disabled={disabled}
    />
    {error && <ErrorLabel>{error}</ErrorLabel>}
  </Container>
);

interface Props {
  error: string | null;
}

const StyledInput = styled.input<Props>`
  width: 100%;
  height: 40px;
  padding-left: 10px;
  border-radius: 5px;
  border: 1px solid #a75aff;
  color: #a75aff;
  font-size: 1.3rem;
  &:disabled {
    background-color: #d2d2d2;
  }
  ${({ error }) =>
    error &&
    css`
      border-color: #ff0000b8;
    `}
`;
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const InputLabel = styled.label`
  color: #a75aff;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const ErrorLabel = styled.label`
  display: block;
  font-size: 0.9em;
  color: red;
  margin-top: 0.2rem;
  text-align: left;
`;
