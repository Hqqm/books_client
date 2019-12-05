import * as React from "react";
import { AuthTemplate } from "@ui/templates";
import { RegisterForm } from "@features/join/register/register-form";
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

  return <AuthTemplate form={<RegisterForm />} />;
};
