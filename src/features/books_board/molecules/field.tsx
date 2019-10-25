import * as React from "react";
import { useStoreMap } from "effector-react";
import { $newBookForm, setFielded } from "../model/add-book";
import { Input } from "@ui/atoms";

type FieldProps = {
  name: string;
  type: string;
  label?: string;
  autoComplete: string;
  disabled: boolean;
  placeholder: string;
};

export const Field: React.FC<FieldProps> = ({
  name,
  type,
  label,
  autoComplete,
  disabled,
  placeholder
}) => {
  const value = useStoreMap({
    store: $newBookForm,
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
      error={null}
      onChange={handleChange}
      label={label}
      autoComplete={autoComplete}
      disabled={disabled}
      placeholder={placeholder}
    />
  );
};
