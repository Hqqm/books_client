import * as React from "react";
import { Link } from "react-router-dom";
import { useStore } from "effector-react";
import { RouteComponentProps, useHistory } from "react-router";

import { $form, submitted, sendForm } from "./model/login";
import { Button } from "@ui/atoms";
import { Field } from "@features/join/molecules/Field";
import { Form } from "@ui/molecules/form";

export const LoginForm: React.FC<RouteComponentProps> = () => {
  const formData = useStore($form);
  const history = useHistory();

  sendForm.done.watch(() => {
    history.push("/books");
  });

  return (
    <>
      <p>
        Hi email:{formData.email} password:{formData.password}
      </p>

      <Form
        handleSubmit={submitted}
        title="Login"
        link={<Link to="/books">go to books</Link>}
      >
        <Field name="email" type="text" label="email" autoComplete="email" />
        <Field
          name="password"
          type="password"
          label="password"
          autoComplete="current password"
        />
        <Button type="submit">login</Button>
      </Form>
    </>
  );
};
