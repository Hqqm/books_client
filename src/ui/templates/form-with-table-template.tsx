import * as React from "react";
import styled from "styled-components";

type FormWithList = {
  form: React.ReactNode;
  table: React.ReactNode;
};

export const FormWithTableTemplate = ({ form, table }: FormWithList) => (
  <WrapperFormWithTable>
    {form && (
      <FixedWrapper>
        <FormWrapper>
          <FormContainer>{form}</FormContainer>
        </FormWrapper>
      </FixedWrapper>
    )}
    {table && <TableWrapper>{table}</TableWrapper>}
  </WrapperFormWithTable>
);

const WrapperFormWithTable = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-start;
`;

const FixedWrapper = styled.div`
  width: 500px;
`;

const FormWrapper = styled.div`
  position: fixed;
  left: 30px;
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: center;
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
  margin: auto;
`;
