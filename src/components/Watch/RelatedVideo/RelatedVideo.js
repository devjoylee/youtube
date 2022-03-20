import React, { useEffect, useState } from 'react';
import moment from 'moment';
import numeral from 'numeral';
import { getData } from 'utils/getData';
import { useNavigate } from 'react-router-dom';

export const RelatedVideo = ({ video }) => {
  const {
    id,
    snippet: { channelTitle, title, publishedAt, thumbnails },
  } = video;

  const [views, setViews] = useState(null);
  const [duration, setDuration] = useState(null);

  const seconds = moment.duration(duration).asSeconds();
  const _duration = moment.utc(seconds * 1000).format('mm:ss');
  const _views = numeral(views).format('0.a');
  const publishedTime = moment(publishedAt).fromNow();
  const thumbnail = thumbnails.default.url;

  const videoId = id?.videoId || id;

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  useEffect(() => {
    const get_video_details = async () => {
      const {
        data: { items },
      } = await getData('/videos', {
        params: {
          part: 'contentDetails,statistics',
          id: videoId,
        },
      });
      setDuration(items[0].contentDetails.duration);
      setViews(items[0].statistics.viewCount);
    };
    get_video_details();
  }, [videoId]);

  return (
    <li className='related_video' onClick={handleVideoClick}>
      <div className='related_video__thumbnail'>
        <img src={thumbnail} alt='thumbnail' />
        <span className='duration'>{_duration}</span>
      </div>
      <div className='related_video__info'>
        <p className='title'>{title}</p>
        <p className='channel'>{channelTitle}</p>
        <p className='details'>
          {_views} Views • {publishedTime}
        </p>
      </div>
    </li>
  );
};
