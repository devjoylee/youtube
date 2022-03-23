import React from 'react';
import { useReqChannel, useReqVideo } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';
import './_item.scss';

export const VideoItem = ({ item, type }) => {
  const { title, channelTitle, thumbnail, publishedDay, description, channelId } =
    getVideoInfo(item);
  const { videoDuration, videoViews } = useReqVideo(item);
  const { channelIcon } = useReqChannel(channelId);

  return (
    <>
      <div className='item__thumbnail'>
        <img src={thumbnail} alt='thumbnail' />
        <span className='duration'>{videoDuration}</span>
      </div>
      <div className='item__info'>
        <p className='title'>{title}</p>
        {type === 'search' && (
          // search video info
          <>
            <p className='details'>
              {videoViews} views • {publishedDay}
            </p>
            <p className='channel'>
              <img src={channelIcon} alt='channel-icon' />
              {channelTitle}
            </p>
            <p className='description'>{description}</p>
          </>
        )}

        {type === 'related' && (
          // related video info
          <>
            <p className='channel'>{channelTitle}</p>
            <p className='details'>
              {videoViews} Views • {publishedDay}
            </p>
          </>
        )}
      </div>
    </>
  );
};
