import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useReqChannel, useReqVideo } from 'hooks';
import { getVideoInfo } from 'utils/getVideoInfo';
import './_videohorizon.scss';

export const VideoHorizon = ({ video, type }) => {
  const { title, channelTitle, thumbnail, publishedDay, description, channelId } =
    getVideoInfo(video);
  const { videoId, videoDuration, videoViews } = useReqVideo(video);
  const { channelIcon, subscribers, videoCount } = useReqChannel(channelId);
  const isVideo = video.id.kind === 'youtube#video';

  const navigate = useNavigate();

  const handleVideoClick = () => {
    navigate(`/watch/${videoId}`);
  };

  return (
    <li className='video_h' onClick={handleVideoClick}>
      <div className={`video_h__thumbnail ${!isVideo ? 'rounded' : ''}`}>
        <img src={thumbnail} alt='thumbnail' />
        {isVideo && <span className='duration'>{videoDuration}</span>}
      </div>

      {type === 'search' ? (
        // search video info
        <div className={`video_h__info ${!isVideo ? 'align_center' : ''}`}>
          <p className='title'>{title}</p>
          {isVideo ? (
            <p className='details'>
              {videoViews} views • {publishedDay}
            </p>
          ) : (
            <p className='details'>
              {subscribers} subscribers • {videoCount} videos
            </p>
          )}

          {isVideo && (
            <p className='channel'>
              <img src={channelIcon} alt='channel-icon' />
              {channelTitle}
            </p>
          )}

          <p className='description'>{description}</p>
        </div>
      ) : (
        // related video info
        <div className='video_h__info'>
          <p className='title'>{title}</p>
          <p className='channel'>{channelTitle}</p>
          <p className='details'>
            {videoViews} Views • {publishedDay}
          </p>
        </div>
      )}
    </li>
  );
};
