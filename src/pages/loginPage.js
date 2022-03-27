import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from 'redux/actions';

export const LoginPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const accessToken = useSelector((state) => state.auth.accessToken);

  // login 클릭 시,  login action 실행
  const handleLogin = () => {
    dispatch(login());
  };

  // login 성공 시, home 화면으로 이동
  useEffect(() => {
    if (accessToken) {
      navigate('/');
    }
  }, [accessToken, navigate]);

  return (
    <div className='login_page'>
      <div className='login'>
        <h2>Youtube Clone</h2>
        <img src='https://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='' />
        <button onClick={handleLogin}>Login With google</button>
        <p>This Project is made using YOUTUBE API</p>
      </div>
    </div>
  );
};
