import * as React from "react";
import { MainTemplate } from "@ui/templates";
import { Header } from "@features/shared/header";
import { UserModal } from "./user-modal";
import { UsersTable } from "./users-table";
import { usersPageMounted } from "./model";

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
