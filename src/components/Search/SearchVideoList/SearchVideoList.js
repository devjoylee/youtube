import React from 'react';
import { VideoHorizon } from 'components';
import './_searchVideo.scss';

export const SearchVideoList = ({ videos }) => {
  return (
    <ul className='searched_video_list'>
      {videos?.map((video, i) => (
        <VideoHorizon key={i} video={video} type='search' />
      ))}
    </ul>
  );
};
