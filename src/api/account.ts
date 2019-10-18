import { $token } from "@features/common/token";

export interface UserData {
  email: string;
  first_name: string;
  last_name: string;
  created_at: string;
}

export const getCurrentAccount = async () => {
  const response = await fetch("/api/getCurrentAccount", {
    method: "GET",
    headers: {
      "x-csrf-token": $token.getState() || ""
    }
  });
  const user = await response.json();
  return user;
};
