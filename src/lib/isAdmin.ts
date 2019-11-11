import { UserData } from "@api/account";

export const isAdmin = (user: UserData | null) => {
  if (user !== null) {
    return user.role === "admin";
  }
};
