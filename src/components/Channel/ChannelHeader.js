import React from 'react';
import { useSelector } from 'react-redux';
import { getChannelInfo } from 'utils/getChannelInfo';
import { SubscribeButton } from 'components';
import './_channel.scss';

export const ChannelHeader = () => {
  const { channel } = useSelector((state) => state.channelInfo);
  const { title, thumbnail, subscribers } = getChannelInfo(channel);

  return (
    <div className='channel_header'>
      <img className='channel_thumbnail' src={thumbnail} alt='channel profile' />
      <div className='channel_details'>
        <ul>
          <li className='title'>{title}</li>
          <li className='subscribers'>{subscribers} subscribers</li>
        </ul>
        <SubscribeButton />
      </div>
    </div>
  );
};
