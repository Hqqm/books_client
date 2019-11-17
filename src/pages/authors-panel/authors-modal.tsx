import * as React from "react";
import styled from "styled-components";
import { useStore } from "effector-react";
import { PrimaryButton, DeleteButton, H2 } from "@ui/atoms";
import { Modal } from "@ui/molecules/modal";
import {
  $authorConfirmModal,
  authorConfirmModalClosed,
  $authorIdConfirmModal,
  deleteAuthor
} from "pages/authors-panel/model/author";

export const AuthorModal = () => {
  const isModalOpen = useStore($authorConfirmModal);
  const authorId = useStore($authorIdConfirmModal);

  return (
    <React.Fragment>
      {isModalOpen && (
        <Modal>
          <H2>
            Вы действительно хотите удалить автора и все связанные с ним книги?
          </H2>
          <ButtonContainer>
            <PrimaryButton onClick={() => authorConfirmModalClosed()}>
              нет
            </PrimaryButton>
            <DeleteButton onClick={() => deleteAuthor(authorId!)}>
              да
            </DeleteButton>
          </ButtonContainer>
        </Modal>
      )}
    </React.Fragment>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
