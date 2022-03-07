import React from 'react';
import 'styles/app.scss';
import { Layout } from 'components';
import { MainPage, LoginPage } from 'pages';

export const App = () => {
  return (
    <Layout>
      <MainPage />
      <LoginPage />
    </Layout>
  );
};
