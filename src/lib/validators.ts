const emailRegexp = /.{2,}@.{2,}/;
export const emailValidator = (value: string) => {
  if (value.length === 0) return "Пожалуйста, заполните поле почта";
  if (!emailRegexp.test(value)) return "Пожалуйста, введите корректную почту";
  return null;
};

export const passwordValidator = (value: string) => {
  if (value && value.length > 2) return null;
  return "Пароль должен быть больше 2 символов";
};

const textRegexp = /^[а-я a-z,.'-]+$/i;
export const textValidator = (value: string) => {
  if (!textRegexp.test(value)) return "Поле должно содержать только буквы";
  return null;
};

export const passwordConfirmation = (
  confirmPassword: string,
  password: string
) => {
  if (confirmPassword && confirmPassword.length < 3)
    return "Пароль должен быть больше 2 символов";
  if (confirmPassword !== password) return "Пароли не совпадают";

  return null;
};

const numberOnly = /^[0-9]+$/i;
export const numberOnlyValidator = (value: string) => {
  if (!numberOnly.test(value)) return "Поле должно содержать только цифры";

  return null;
};
