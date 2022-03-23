import React from 'react';
import { useReqChannel } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';
import './_item.scss';

export const ChannelItem = ({ item, type }) => {
  const { title, thumbnail, description, channelId } = getVideoInfo(item);

  const id = type === 'subscription' ? item.snippet.resourceId.channelId : channelId;
  const { subscribers, videoCount } = useReqChannel(id);

  return (
    <>
      <div className='item__thumbnail rounded'>
        <img src={thumbnail} alt='thumbnail' />
      </div>
      <div className='item__info align_center'>
        <p className='title'>{title}</p>
        <p className='details'>
          {subscribers} subscribers • {videoCount} videos
        </p>
        <p className='description'>{description}</p>
      </div>
    </>
  );
};
