import * as React from "react";
import { loadSession, $session } from "./session";
import { useStore } from "effector-react";
import { $token } from "./token";

type Props = {
  children: React.ReactElement;
};

export const AccountLoader: React.FC<Props> = ({ children }) => {
  const session = useStore($session);
  const token = useStore($token);

  React.useEffect(() => {
    loadSession();
  }, []);

  if (token && !session) return null;

  return children;
};
