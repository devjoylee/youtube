import { Container, VideoIframe, VideoMetaData, CommentList, SideVideoList } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoById } from 'redux/actions/video.action';

export const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.watchVideo);

  console.log(video);

  return (
    <Container className='watch_page'>
      <div className='watch_contents'>
        <VideoIframe id={id} video={video} />
        {!loading ? <VideoMetaData id={id} video={video} /> : <h3>Loading...</h3>}
        <CommentList />
      </div>
      <SideVideoList />
    </Container>
  );
};
