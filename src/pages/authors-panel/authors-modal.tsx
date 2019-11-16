import * as React from "react";
import { Modal } from "@ui/molecules/modal";
import { PrimaryButton, DeleteButton } from "@ui/atoms";
import { useStore } from "effector-react";
import {
  $authorConfirmModal,
  authorConfirmModalClosed,
  $authorIdConfirmModal,
  deleteAuthor
} from "pages/authors-panel/model/author";
import styled from "styled-components";

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

const H2 = styled.div`
  color: #fff;
  margin: 10px;
  font-size: 14px;
  font-weight: 600;
`;
