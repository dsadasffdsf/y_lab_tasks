import AuthForm from 'components/Auth/AuthForm';
import Layout from 'components/Layout';
import Auth from 'pages/Auth';
import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';

const App: FC = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Auth />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
