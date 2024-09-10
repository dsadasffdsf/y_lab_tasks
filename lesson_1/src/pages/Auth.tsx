import AuthForm from 'components/Auth/AuthForm';
import Authorized from 'components/Authorized';
import { useAppSelector } from 'hook/rtkHook';
import React, { useRef } from 'react';

const Auth = () => {

  console.log('rerender');
  const { isAuth } = useAppSelector((state) => state.auth);



  return (
    <>
      <section>
        <ul>
          <li>login: user1 </li> <li>password: password1</li>
        </ul>
      </section>
      <section className="h-screen flex justify-center items-center">
        {!isAuth ? <AuthForm /> : <Authorized />}
      </section>
    </>
  );
};

export default Auth;
