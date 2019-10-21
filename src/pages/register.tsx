import * as React from "react";
import { AuthTemplate } from "@ui/templates/auth-template";
import { RegisterForm } from "@features/join/register/register-form";

export const RegisterPage = () => <AuthTemplate form={<RegisterForm />} />;
