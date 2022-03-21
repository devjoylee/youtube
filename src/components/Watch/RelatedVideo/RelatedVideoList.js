import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideo } from 'redux/actions';
import { VideoHorizon } from 'components';
import './_relatedVideo.scss';

export const RelatedVideoList = ({ id }) => {
  const dispatch = useDispatch();
  const { videos } = useSelector((state) => state.relatedVideo);

  useEffect(() => {
    dispatch(getRelatedVideo(id));
  }, [dispatch, id]);

  return (
    <ul className='related_video_list'>
      {videos?.map(
        (video, i) => video.snippet && <VideoHorizon key={i} video={video} type='related' />
      )}
    </ul>
  );
};
