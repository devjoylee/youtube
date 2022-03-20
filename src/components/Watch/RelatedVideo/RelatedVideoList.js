import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getRelatedVideo } from 'redux/actions';
import { RelatedVideo } from './RelatedVideo';
import './_relatedVideo.scss';

export const RelatedVideoList = ({ id }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRelatedVideo(id));
  }, [dispatch, id]);

  return (
    <ul className='related_video_list'>
      {[...Array(10)].map((_, i) => (
        <RelatedVideo key={i} />
      ))}
    </ul>
  );
};
