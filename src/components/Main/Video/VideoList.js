import React, { useEffect } from 'react';
import { Video } from './Video';
import { useDispatch, useSelector } from 'react-redux';
import { getPopularVideos } from 'redux/actions';
import InfiniteScroll from 'react-infinite-scroll-component';
import './_video.scss';

export const VideoList = ({ loadVideos }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory } = useSelector((state) => state.mainVideo);

  const fetchData = async () => {
    await loadVideos(activeCategory);
  };

  return (
    <div className='video-container'>
      <InfiniteScroll
        dataLength={videos.length}
        next={fetchData}
        hasMore={true}
        loader={
          <img
            src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif'
            alt='loading'
            className='loading'
          />
        }
        className='video-list'
      >
        {videos.map((video, i) => (
          <Video key={i} video={video} />
        ))}
      </InfiniteScroll>
    </div>
  );
};
