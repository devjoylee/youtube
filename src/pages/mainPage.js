import React from 'react';
import { Category, Container, VideoList } from 'components';
import { getPopularVideos, getVideosByCategory } from 'redux/actions';
import { useDispatch } from 'react-redux';

export const MainPage = () => {
  const dispatch = useDispatch();
  const handleLoadVideos = (category) => {
    if (category === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(category));
    }
  };

  return (
    <Container className='main_page'>
      <Category loadVideos={handleLoadVideos} />
      <VideoList loadVideos={handleLoadVideos} />
    </Container>
  );
};
