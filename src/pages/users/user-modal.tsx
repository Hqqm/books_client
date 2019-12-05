import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { H2, PrimaryButton, DeleteButton } from "@ui/atoms";
import { confirmModalClosed } from "@features/shared/modal/model";
import { Modal } from "@features/shared/modal/modal";
import { $userIdConfirmModal, deleteUser } from "./model";

export const UserModal = () => {
  const userId = useStore($userIdConfirmModal);

  return (
    <Modal>
      <H2>
        Вы действительно хотите удалить пользователя и все принадлежащие ему
        книги?
      </H2>
      <ButtonContainer>
        <PrimaryButton onClick={() => confirmModalClosed()}>нет</PrimaryButton>
        <DeleteButton onClick={() => deleteUser(userId!)}>да</DeleteButton>
      </ButtonContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
