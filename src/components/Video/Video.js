import moment from 'moment';
import numeral from 'numeral';
import React, { useEffect, useState } from 'react';
import { AiFillEye } from 'react-icons/ai';
import { getData } from 'utils/getData';

export const Video = ({ video }) => {
  console.log(video);
  const {
    contentDetails: { duration },
    snippet: {
      channelId,
      channelTitle,
      title,
      publishedAt,
      thumbnails: { medium },
    },
    statistics: { viewCount },
  } = video;

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');
  const views = numeral(viewCount).format('0.a');
  const publishedTime = moment(publishedAt).fromNow();

  const [channelIcon, setChannelIcon] = useState(null);

  useEffect(() => {
    const get_channel_icon = async () => {
      const {
        data: { items },
      } = await getData('/channels', {
        params: {
          part: 'snippet',
          id: channelId,
        },
      });
      setChannelIcon(items[0].snippet.thumbnails.default);
    };
    get_channel_icon();
  }, [channelId]);

  return (
    <div className='video'>
      <div className='video__top'>
        <img src={medium.url} alt='thumbnail' />
        <span>{_duration}</span>
      </div>
      <div className='video__title'>{title}</div>
      <div className='video__details'>
        <span>
          <AiFillEye /> {views} Views •
        </span>
        <span>{publishedTime}</span>
      </div>
      <div className='video__channel'>
        <img src={channelIcon?.url} alt={channelTitle} />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};
