import * as React from "react";
import { useStoreMap } from "effector-react";
import { $form, setFielded } from "../model/login";
import { Input } from "@ui/atoms";

type FieldProps = {
  name: string;
  type: string;
  label: string;
  autoComplete: string;
  disabled?: boolean;
};

export const Field: React.FC<FieldProps> = ({
  name,
  type,
  label,
  autoComplete,
  disabled
}) => {
  const value = useStoreMap({
    store: $form,
    keys: [name],
    fn: (values: any) => values[name] || ""
  });

  const handleChange = setFielded.prepend((e: React.FormEvent<HTMLInputElement>) => ({
    key: e.currentTarget.name,
    value: e.currentTarget.value
  }));

  return (
    <Input
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      label={label}
      autoComplete={autoComplete}
      disabled={disabled}
    />
  );
};
