import React from 'react';
import { RelatedVideo } from './RelatedVideo';
import './_relatedVideo.scss';

export const RelatedVideoList = () => {
  return (
    <ul className='related_video_list'>
      {[...Array(10)].map((_, i) => (
        <RelatedVideo key={i} />
      ))}
    </ul>
  );
};
