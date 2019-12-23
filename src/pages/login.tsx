import * as React from "react";
import { AuthTemplate, MainTemplate } from "@ui/templates";
import { LoginForm } from "@features/join/login/login-form";
import { formMounted, formUnmounted } from "@features/join/login/model/login";
import { Header } from "@features/shared/header";

export const LoginPage = () => {
  React.useEffect(() => {
    formMounted();
    return () => {
      formUnmounted();
    };
  }, []);

  return (
    <MainTemplate
      header={<Header />}
      main={
        <AuthTemplate
          form={<LoginForm />}
          image={<img src={loginImage} alt="woman reading a book" />}
        />
      }
    />
  );
};

const loginImage = require("../public/auth.png");
