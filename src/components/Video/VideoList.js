import React from 'react';
import { Video } from './Video';
import './_video.scss';
import InfiniteScroll from 'react-infinite-scroll-component';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from 'redux/actions/video.action';

export const VideoList = ({ videos, activeCategory }) => {
  const dispatch = useDispatch();

  const fetchData = () => {
    if (activeCategory === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(activeCategory));
    }
  };

  return (
    <div className='video-container'>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={<div className='spinner-border'></div>}
        className='video-list'
      >
        {videos.map((video, i) => (
          <Video key={i} video={video} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
