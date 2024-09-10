import { useAppDispatch, useAppSelector } from 'hook/rtkHook';
import React, { FC } from 'react';
import { logout } from '../redux/slices/authSlice';

const Authorized: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);
  const logoutHandler = () => {
    dispatch(logout());
  };
  return (
    <>
      <div>Поздравляю вы авторизовались как {user}</div>
      <button className="btn ml-4" onClick={() => logoutHandler()}>
        Выйти
      </button>
    </>
  );
};

export default Authorized;
