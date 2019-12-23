import * as React from "react";
import { AuthTemplate, MainTemplate } from "@ui/templates";
import { RegisterForm } from "@features/join/register/register-form";
import { Header } from "@features/shared/header";
import {
  formMounted,
  formUnmounted
} from "@features/join/register/model/register";

export const RegisterPage = () => {
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
          form={<RegisterForm />}
          image={<img src={registerImage} alt="woman reading a book" />}
        />
      }
    />
  );
};

const registerImage = require("../public/auth.png");
