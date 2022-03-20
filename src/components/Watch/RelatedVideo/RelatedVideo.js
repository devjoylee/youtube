import React from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import { useReqVideo } from 'hooks';

export const RelatedVideo = ({ video }) => {
  const { channelTitle, title, publishedAt, thumbnails } = video.snippet;
  const { videoId, videoDuration, videoViews } = useReqVideo(video);

  const publishedTime = moment(publishedAt).fromNow();
  const thumbnail = thumbnails.default.url;

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <li className='related_video' onClick={handleVideoClick}>
      <div className='related_video__thumbnail'>
        <img src={thumbnail} alt='thumbnail' />
        <span className='duration'>{videoDuration}</span>
      </div>
      <div className='related_video__info'>
        <p className='title'>{title}</p>
        <p className='channel'>{channelTitle}</p>
        <p className='details'>
          {videoViews} Views • {publishedTime}
        </p>
      </div>
    </li>
  );
};
