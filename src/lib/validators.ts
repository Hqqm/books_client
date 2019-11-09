const emailRegexp = /.{2,}@.{2,}/;
export const emailValidator = (value: string) => {
  if (value.length === 0) return "Пожалуйста, заполните поле почта";
  if (!emailRegexp.test(value)) return "Пожалуйста, введите корректную почту";
  return null;
};

export const passwordValidator = (value: string) => {
  if (value && value.length > 2) return null;
  return "пароль должен быть больше 3 символов";
};

const textRegexp = /^[а-я a-z,.'-]+$/i;
export const textValidator = (value: string) => {
  if (!textRegexp.test(value)) return "Поле должно содержать только буквы";
  return null;
};

export const passwordConfirmation = (confirmPassword: string, password: string) => {
  if (confirmPassword === password) {
    return null;
  }
  return "Пароли не совпадают";
};

const dateOfBirthRegexp = /^[1-9]+$/i;
export const dateOfBirthValidator = (value: string) => {
  if (!dateOfBirthRegexp.test(value)) return "Поле должно содержать только цифры";
  return null;
};
