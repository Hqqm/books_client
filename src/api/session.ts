export type FormData = {
  email: string;
  password: string;
};

export const createSessionHandler = async (data: FormData) => {
  const response = await fetch("/api/auth", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json"
    }
  });
  const token = response.headers.get("x-csrf-token");
  return token;
};
