import React from 'react';
import { Video } from './Video';
import './_video.scss';

export const VideoList = ({ videos }) => {
  return (
    <div className='video-container'>
      {videos.map((video, i) => (
        <Video key={i} video={video} />
      ))}
    </div>
  );
};
