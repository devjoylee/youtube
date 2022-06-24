import React, { useEffect } from 'react';
import { Video } from './Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from 'redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import { SkeletonVideo } from 'components';
import './_video.scss';

export const VideoList = ({ loadVideos }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector((state) => state.mainVideo);

  const fetchData = async () => {
    await loadVideos(activeCategory);
  };

  return (
    <div className='video-container'>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        className='video-list'
      >
        {loading || !videos.length
          ? [...Array(20)].map((_, i) => <SkeletonVideo key={i} />)
          : videos.map((video, i) => <Video key={i} video={video} />)}
      </InfiniteScroll>
    </div>
  );
};
