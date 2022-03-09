import React, { useEffect } from 'react';
import { Category, Container, VideoList } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from 'redux/actions/video.action';

export const MainPage = () => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.mainVideo);

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  return (
    <Container>
      <Category />
      <VideoList videos={videos} />
    </Container>
  );
};
