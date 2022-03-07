import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'styles/app.scss';
import { Layout } from 'components';
import { MainPage, LoginPage } from 'pages';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
        <Route path='/auth' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
};
