import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReqVideo } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';

export const RelatedVideo = ({ video }) => {
  const { title, channelTitle, thumbnail, publishedDay } = getVideoInfo(video);
  const { videoId, videoDuration, videoViews } = useReqVideo(video);

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
          {videoViews} Views • {publishedDay}
        </p>
      </div>
    </li>
  );
};
