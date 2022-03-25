import React from 'react';
import { useNavigate } from 'react-router-dom';
import { VideoItem } from './VideoItem';
import { ChannelItem } from './ChannelItem';
import './_item.scss';

export const ItemTemplate = ({ item, type }) => {
  let itemId = '';
  const itemType = item.id.kind === 'youtube#video' ? 'video' : 'channel';

  if (itemType === 'video') {
    itemId = item.id?.videoId || item.id;
  } else {
    itemId = item.id?.channelId || item.snippet?.resourceId.channelId;
  }

  const navigate = useNavigate();

  const handleItemClick = () => {
    if (itemType === 'video') {
      navigate(`/watch/${itemId}`);
    } else if (itemType === 'channel') {
      console.log(item);
      navigate(`/channel/${itemId}`);
    }
  };

  return (
    <li className={`item ${itemType}_item`} onClick={handleItemClick}>
      {itemType === 'video' ? (
        <VideoItem item={item} type={type} />
      ) : (
        <ChannelItem item={item} type={type} />
      )}
    </li>
  );
};
