import * as React from "react";
import { AuthTemplate } from "@ui/templates/auth-template";
import { LoginForm } from "@features/join/login/login-form";
import { formMounted, formUnmounted } from "@features/join/login/model/login";

export const LoginPage = () => {
  React.useEffect(() => {
    formMounted();
    return () => {
      formUnmounted();
    };
  }, []);

  return <AuthTemplate form={<LoginForm />} />;
};
