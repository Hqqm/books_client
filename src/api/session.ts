export type FormData = {
  email: string;
  password: string;
};

export const createSessionHandler = async (data: FormData) => {
  try {
    const response = await fetch("/api/auth", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const token = response.headers.get("x-csrf-token");
    if (token === null) {
      throw new Error("invalid token");
    }
    return { token, error: null };
  } catch (err) {
    return { token: null, error: err.message };
  }
};
