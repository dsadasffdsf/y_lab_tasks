import React, { FC, useCallback, useEffect, useState } from 'react';
import AuthInput from './AuthInput';
import { useAppDispatch, useAppSelector } from 'hook/rtkHook';
import { authValidationError } from 'func/authValidationError';
import { addProduct, authFetch, resetError } from '../../redux/slices/authSlice';
import { AuthData } from 'models/AuthI';

const AuthForm: FC = () => {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [usernameError, setUserError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  let { error } = useAppSelector((state) => state.auth);

  useEffect(() => {
    if (error) {
      setUserError(error);
      setPasswordError(error);
    }
  }, [usernameError, passwordError, error]);

  const authHandler = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(resetError());
    const { validateForm } = authValidationError({
      username,
      password,
      setUserError,
      setPasswordError,
    });
    console.log(`validateForm`, validateForm);
    if (validateForm.valUsername && validateForm.valPassword) {
      const userData: AuthData = {
        username,
        password,
      };

      dispatch(authFetch(userData));
    }
  };

  const userHandler = useCallback((usernameValue: string) => {
    setUsername(usernameValue);
  }, []);
  const passwordHandler = useCallback((passwordValue: string) => {
    setPassword(passwordValue);
  }, []);
  return (
    <>
      <div className="w-[400px] shadow-md bg-white py-24 px-12 m-auto rounded-2xl ">
        <h1 className="text-center mb-16 text-2xl">Авторизация</h1>
        <form action="#" className="w-full" onSubmit={authHandler}>
          <div className="space-y-4 h-[250px]">
            <AuthInput
              title="Логин"
              placeholder="Введите логин"
              error={usernameError}
              onChange={userHandler}
            />
            <AuthInput
              title="Пароль"
              placeholder="Введите пароль"
              error={passwordError}
              onChange={passwordHandler}
            />
          </div>
          <div className="text-center mt-20">
            <button type="submit" className="btn bg-slate-200">
              Войти
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default AuthForm;
