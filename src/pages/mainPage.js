import React, { useEffect } from 'react';
import { Category, Container, Video } from 'components';
import { useDispatch } from 'react-redux';
import { getPopularVideos } from 'redux/actions/video.action';

export const MainPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <Category />
      <div className='video__container'>
        {[...new Array(20)].map((_, i) => (
          <Video key={i} />
        ))}
      </div>
    </Container>
  );
};
