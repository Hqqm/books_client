import * as React from "react";
import { ViewModal } from "@ui/molecules/modal";
import { useStore } from "effector-react";
import { $confirmModal } from "./model";

export const Modal: React.FC = ({ children }) => {
  const isModalOpen = useStore($confirmModal);

  return (
    <React.Fragment>
      {isModalOpen && <ViewModal>{children}</ViewModal>}
    </React.Fragment>
  );
};
