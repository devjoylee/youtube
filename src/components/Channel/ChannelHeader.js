import React from 'react';
import { useSelector } from 'react-redux';
import { getChannelInfo } from 'utils/getChannelInfo';
import './_channel.scss';

export const ChannelHeader = () => {
  const { channel } = useSelector((state) => state.channelInfo);
  const { title, thumbnail, subscribers } = getChannelInfo(channel);

  return (
    <div className='channel_header'>
      <img src={thumbnail} alt='channel profile' />
      <div className='channel_details'>
        <h3>{title}</h3>
        <span>{subscribers} subscribers</span>
      </div>
    </div>
  );
};
