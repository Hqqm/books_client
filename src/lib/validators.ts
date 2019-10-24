const emailRegexp = /.{2,}@.{2,}/;
export const emailValidator = (value: string) => {
  if (value.length === 0) return "Please, enter email";
  if (!emailRegexp.test(value)) return "Please, enter correct email";
  return null;
};

export const passwordValidator = (value: string) => {
  if (value && value.length > 2) return null;
  return "string must be greater than two characters";
};
