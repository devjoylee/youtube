import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRelatedVideo } from 'redux/actions';
import { ItemTemplate } from 'components';
import { SkeletonRelated } from 'components';
import './_relatedVideo.scss';

export const RelatedVideoList = ({ id }) => {
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.relatedVideo);

  useEffect(() => {
    dispatch(getRelatedVideo(id));
  }, [dispatch, id]);

  return (
    <ul className='related_video_list'>
      {loading || !videos.length
        ? [...Array(8)].map((_, i) => <SkeletonRelated key={i} />)
        : videos?.map(
            (video, i) => video.snippet && <ItemTemplate key={i} item={video} type='related' />
          )}
    </ul>
  );
};
