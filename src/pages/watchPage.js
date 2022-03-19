import { Container, VideoIframe, VideoMetaData, CommentList, RelatedVideoList } from 'components';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideoById } from 'redux/actions';

export const WatchPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoById(id));
  }, [dispatch, id]);

  const { video, loading } = useSelector((state) => state.watchVideo);

  return (
    <Container className='watch_page'>
      <div className='watch_contents'>
        <VideoIframe id={id} video={video} />
        {video !== null && !loading ? (
          <VideoMetaData id={id} video={video} />
        ) : (
          <h3>Loading...</h3>
        )}
        <CommentList videoId={id} video={video} />
      </div>
      <RelatedVideoList />
    </Container>
  );
};
