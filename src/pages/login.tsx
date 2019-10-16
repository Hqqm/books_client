import * as React from "react";
import { RouteComponentProps } from "react-router";

import { AuthTemplate } from "@features/join/templates/auth-template";
import { LoginForm } from "@features/join/login";

interface Props extends RouteComponentProps {}

export const Login: React.FC<Props> = props => (
  <AuthTemplate form={<LoginForm {...props} />} />
);
