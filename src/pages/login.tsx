import * as React from "react";
import { AuthTemplate } from "@features/join/templates/auth-template";
import { LoginForm } from "@features/join/login";

export const LoginPage = () => <AuthTemplate form={<LoginForm />} />;
