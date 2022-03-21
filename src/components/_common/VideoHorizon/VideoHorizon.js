import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReqVideo } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';
import './_videohorizon.scss';

export const VideoHorizon = ({ video, type }) => {
  const { title, channelTitle, thumbnail, publishedDay } = getVideoInfo(video);
  const { videoId, videoDuration, videoViews } = useReqVideo(video);

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <li className='video_h' onClick={handleVideoClick}>
      <div className='video_h__thumbnail'>
        <img src={thumbnail} alt='thumbnail' />
        <span className='duration'>{videoDuration}</span>
      </div>
      <div className='video_h__info'>
        <p className='title'>{title}</p>
        <p className='channel'>{channelTitle}</p>
        <p className='details'>
          {videoViews} Views • {publishedDay}
        </p>
      </div>
    </li>
  );
};
