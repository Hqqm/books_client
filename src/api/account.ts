import { $token } from "@features/shared/token";

export type UserData = {
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  created_at: string;
};

export type RegisterUser = {
  email: string;
  first_name: string;
  last_name: string;
  password: string;
  password_confirmation: string;
};

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

export const registerUserHandler = async (data: RegisterUser) => {
  console.log(JSON.stringify(data));
  const response = await fetch("/api/register", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const json = response.json();
  return json;
};
