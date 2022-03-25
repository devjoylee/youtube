import React from 'react';
import { Video } from 'components';
import { useSelector } from 'react-redux';

export const ChannelPlayList = () => {
  const { videos } = useSelector((state) => state.channelVideo);

  return (
    <ul className='video-list'>
      {videos?.map((video, i) => (
        <Video key={i} video={video} />
      ))}
    </ul>
  );
};
