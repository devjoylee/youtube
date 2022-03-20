import moment from 'moment';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { useReqChannel, useReqVideo } from 'hooks';

export const Video = ({ video }) => {
  const { channelId, channelTitle, title, publishedAt, thumbnails } = video.snippet;
  const { videoId, videoDuration, videoViews } = useReqVideo(video);
  const { channelIcon } = useReqChannel(channelId);

  const publishedTime = moment(publishedAt).fromNow();
  const thumbnail = thumbnails.medium.url;

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <div className='video' onClick={handleVideoClick}>
      <div className='video__top'>
        <img src={thumbnail} alt='thumbnail' />
        <span>{videoDuration}</span>
      </div>
      <div className='video__title'>{title}</div>
      <div className='video__details'>
        <span>
          <AiFillEye /> {videoViews} Views •
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
