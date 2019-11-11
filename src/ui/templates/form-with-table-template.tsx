import * as React from "react";
import styled from "styled-components";

type FormWithList = {
  form: React.ReactNode;
  table: React.ReactNode;
};

export const FormWithTableTemplate = ({ form, table }: FormWithList) => (
  <WrapperFormWithTable>
    {form && (
      <FormWrapper>
        <FormContainer>{form}</FormContainer>
      </FormWrapper>
    )}
    {table && <TableWrapper>{table}</TableWrapper>}
  </WrapperFormWithTable>
);

const WrapperFormWithTable = styled.div`
  display: flex;
  justify-content: space-around;
`;

const FormWrapper = styled.div`
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

const TableWrapper = styled.div`
  margin: 80px 20px 0 20px;
`;
