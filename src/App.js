import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import 'styles/app.scss';
import { Layout } from 'components';
import { MainPage, LoginPage, WatchPage, SearchPage } from 'pages';
import { useSelector } from 'react-redux';

export const App = () => {
  const { accessToken, loading } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // user 정보 없으면 login 화면 띄우기
  useEffect(() => {
    if (!loading && !accessToken) {
      navigate('/auth');
    }
  }, [accessToken, loading, navigate]);

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path='watch/:id' element={<WatchPage />} />
        <Route path='search/:query' element={<SearchPage />} />
      </Route>
      <Route path='/auth' element={<LoginPage />} />
    </Routes>
  );
};
