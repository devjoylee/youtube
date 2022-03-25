import React from 'react';
import { useSelector } from 'react-redux';
import './_subscribeButton.scss';

export const SubscribeButton = () => {
  const isSubscribed = useSelector((state) => state.channelInfo.isSubscribed);

  return (
    <button className={`subscribe_btn ${isSubscribed && 'subscribed'}`}>
      {isSubscribed ? 'Subscribed' : 'Subscribe'}
    </button>
  );
};
