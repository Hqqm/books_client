import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { PrimaryButton, DeleteButton, H2 } from "@ui/atoms";
import {
  $authorIdConfirmModal,
  deleteAuthor
} from "pages/authors/model/author";
import { Modal } from "@features/shared/modal/modal";
import { confirmModalClosed } from "@features/shared/modal/model";

export const AuthorModal = () => {
  const authorId = useStore($authorIdConfirmModal);

  return (
    <Modal>
      <H2>
        Вы действительно хотите удалить автора и все связанные с ним книги?
      </H2>
      <ButtonContainer>
        <PrimaryButton onClick={() => confirmModalClosed()}>нет</PrimaryButton>
        <DeleteButton onClick={() => deleteAuthor(authorId!)}>да</DeleteButton>
      </ButtonContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
