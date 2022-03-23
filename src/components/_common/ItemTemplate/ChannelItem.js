import React from 'react';
import { useReqChannel } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';
import './_item.scss';

export const ChannelItem = ({ item }) => {
  const { channelTitle, thumbnail, description, channelId } = getVideoInfo(item);
  const { subscribers, videoCount } = useReqChannel(channelId);

  return (
    <>
      <div className='item__thumbnail rounded'>
        <img src={thumbnail} alt='thumbnail' />
      </div>
      <div className='item__info align_center'>
        <p className='title'>{channelTitle}</p>
        <p className='details'>
          {subscribers} subscribers • {videoCount} videos
        </p>
        <p className='description'>{description}</p>
      </div>
    </>
  );
};
