import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getVideosBySearch } from 'redux/actions';
import { ItemTemplate } from 'components';
import { SkeletonSearch } from 'components';
import './_searchVideo.scss';

export const SearchVideoList = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const { videos, loading } = useSelector((state) => state.searchVideo);

  useEffect(() => {
    dispatch(getVideosBySearch(query));
  }, [dispatch, query]);

  return (
    <ul className='searched_video_list'>
      {loading || !videos.length
        ? [...Array(8)].map((_, i) => <SkeletonSearch key={i} />)
        : videos?.map((video, i) => <ItemTemplate key={i} item={video} type='search' />)}
    </ul>
  );
};
