import * as React from "react";
import { useStore } from "effector-react";
import { Modal } from "@features/shared/modal/modal";
import { H2, PrimaryButton, DeleteButton } from "@ui/atoms";
import { deleteGenre, $genreIdConfirmModal } from "./model";
import styled from "styled-components";
import { confirmModalClosed } from "@features/shared/modal/model";

export const GenreModal = () => {
  const genreId = useStore($genreIdConfirmModal);

  return (
    <Modal>
      <H2>Вы действительно хотите удалить жанр и все связанные с ним книги?</H2>
      <ButtonContainer>
        <PrimaryButton onClick={() => confirmModalClosed()}>нет</PrimaryButton>
        <DeleteButton onClick={() => deleteGenre(genreId!)}>да</DeleteButton>
      </ButtonContainer>
    </Modal>
  );
};

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
`;
