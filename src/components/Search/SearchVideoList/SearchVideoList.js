import React from 'react';
import { ItemTemplate } from 'components';
import './_searchVideo.scss';

export const SearchVideoList = ({ videos }) => {
  return (
    <ul className='searched_video_list'>
      {videos?.map((video, i) => (
        <ItemTemplate key={i} item={video} type='search' />
      ))}
    </ul>
  );
};
