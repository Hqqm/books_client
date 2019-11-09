import * as React from "react";
import { useStore } from "effector-react";
import {
  $authorFio,
  $authorFioError,
  fioChanged,
  $authorDateOfBirth,
  $authorDateOfBirthError,
  dateOfBirthChanged,
  $isAuthorFormDisabled,
  $authorCountry,
  $authorCountryError,
  countryChanged,
  authorFormSubmitted,
  $isAuthorFormSubmitEnabled
} from "./model";
import { Input, Button } from "@ui/atoms";
import { Form } from "@ui/molecules/form";
import styled from "styled-components";
import { AuthTemplate } from "@ui/templates/auth-template";

export const CreateAuthorPage = () => {
  return <AuthTemplate form={<CreateAuthorForm />} />;
};

const CreateAuthorForm = () => {
  const submitEnabled = useStore($isAuthorFormSubmitEnabled);
  return (
    <Form onSubmit={authorFormSubmitted} title="Создание автора">
      <AuthorFioField />
      <AuthorDateOfBirthField />
      <AuthorCountryField />
      <Container>
        <Button type="submit" disabled={!submitEnabled}>
          создать автора
        </Button>
      </Container>
    </Form>
  );
};

const AuthorFioField = () => {
  const fio = useStore($authorFio);
  const fioError = useStore($authorFioError);
  const isFioCorrect = useStore($isAuthorFormDisabled);

  return (
    <Input
      value={fio}
      onChange={fioChanged}
      error={fio && fioError}
      label="ФИО автора"
      name="fio"
      autoComplete="true"
      disabled={isFioCorrect}
    />
  );
};

const AuthorDateOfBirthField = () => {
  const dateOfBirth = useStore($authorDateOfBirth);
  const dateOfBirthError = useStore($authorDateOfBirthError);
  const isDateOfBirthCorrect = useStore($isAuthorFormDisabled);

  return (
    <Input
      value={dateOfBirth}
      onChange={dateOfBirthChanged}
      error={dateOfBirth && dateOfBirthError}
      label="Дата рождения автора"
      name="date_of_birth"
      autoComplete="true"
      disabled={isDateOfBirthCorrect}
    />
  );
};

const AuthorCountryField = () => {
  const country = useStore($authorCountry);
  const countryError = useStore($authorCountryError);
  const isCountryCorrect = useStore($isAuthorFormDisabled);

  return (
    <Input
      value={country}
      onChange={countryChanged}
      error={country && countryError}
      label="Страна автора"
      name="country"
      autoComplete="true"
      disabled={isCountryCorrect}
    />
  );
};

const Container = styled.div`
  width: 100%;
  margin-top: 10px;
`;
