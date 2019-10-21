import * as React from "react";
import { AuthTemplate } from "@features/join/login/templates/auth-template";
import { LoginForm } from "@features/join/login/login-form";

export const LoginPage = () => <AuthTemplate form={<LoginForm />} />;
