import { AuthData } from 'models/AuthI';
import { useState } from 'react';

export interface ValidationError {
  username: string;
  password: string;
  setUserError: React.Dispatch<React.SetStateAction<string>>;
  setPasswordError: React.Dispatch<React.SetStateAction<string>>;
}

export const authValidationError = ({
  username,
  password,
  setUserError,
  setPasswordError,
}: ValidationError) => {
  let validateForm = { valUsername: true, valPassword: true };
  console.log(`username`, username);
  console.log(`password`, password);
  const userRegex = /^[^'"]*$/;
  const passwordRegex = /^[^'"]*$/;

  // const rep = usersList.some((product) => product.title === title);

  if (!username) {
    validateForm.valUsername = false;
    setUserError('Поле логина не может быть пустым!');
  } else if (!userRegex.test(username)) {
    validateForm.valUsername = false;
    setUserError('Логин не может содержать кавычки!');
  } else {
    validateForm.valUsername = true;
    setUserError('');
  }

  if (!password) {
    validateForm.valPassword = false;
    setPasswordError('Поле пароля не может быть пустым!');
  } else if (!passwordRegex.test(password)) {
    validateForm.valPassword = false;
    setPasswordError('Пароль не может содержать кавычки!');
  } else {
    validateForm.valPassword = true;
    setPasswordError('');
  }

  return { validateForm };
};
