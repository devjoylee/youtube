import React from 'react';
import { SideVideo } from './SideVideo';
import './_sideVideo.scss';

export const SideVideoList = () => {
  return (
    <ul className='side_video_list'>
      {[...Array(10)].map((_, i) => (
        <SideVideo key={i} />
      ))}
    </ul>
  );
};
