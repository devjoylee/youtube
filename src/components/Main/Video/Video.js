import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillEye } from 'react-icons/ai';
import { useReqChannel, useReqVideo } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';

export const Video = ({ video }) => {
  const { title, channelTitle, thumbnail, publishedDay, channelId } = getVideoInfo(video);
  const { videoId, videoDuration, videoViews } = useReqVideo(video);
  const { channelIcon } = useReqChannel(channelId);

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
        <span>{publishedDay}</span>
      </div>
      <div className='video__channel'>
        <img src={channelIcon} alt={channelTitle} />
        <p>{channelTitle}</p>
      </div>
    </div>
  );
};
