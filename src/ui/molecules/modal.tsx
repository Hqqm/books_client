import * as React from "react";
import * as ReactDOM from "react-dom";
import styled from "styled-components";

type ModalProps = {
  children: React.ReactNode;
};

export const Modal = ({ children }: ModalProps) =>
  ReactDOM.createPortal(
    <ModalWrapper>
      <ModalContainer>{children}</ModalContainer>
    </ModalWrapper>,
    document.getElementById("modal") as HTMLDivElement
  );

const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
`;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 200px;
  background: #01258e;
  padding: 20px;
  justify-content: center;
  height: 100px;
  border-radius: 15px;
`;
