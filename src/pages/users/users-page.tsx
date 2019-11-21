import * as React from "react";

import { usersPageMounted } from "./model";
import { UserModal } from "./user-modal";
import { UsersTable } from "./users-table";
import { MainTemplate } from "@ui/templates/main-template";
import { Header } from "@features/shared/header";

export const UsersPage = () => {
  React.useEffect(() => {
    usersPageMounted();
  }, []);

  return (
    <React.Fragment>
      <MainTemplate header={<Header />} main={<UsersTable />} />
      <UserModal />
    </React.Fragment>
  );
};
