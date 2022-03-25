import React, { useEffect } from 'react';
import './_videoMetaData.scss';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { subscriptionStatus, getChannelInfo } from 'redux/actions';
import { getVideoInfo } from 'utils/getVideoInfo';
import { SubscribeButton } from 'components';

export const VideoMetaData = ({ video }) => {
  const dispatch = useDispatch();
  // video Info
  const { title, channelTitle, description, publishedDay, channelId, views, likes, dislikes } =
    getVideoInfo(video);

  // channel Info
  const { snippet, statistics } = useSelector((state) => state.channelInfo.channel);
  const channelIcon = snippet?.thumbnails?.default?.url;
  const subscribeCount = numeral(statistics?.subscriberCount).format('0.a').toLocaleUpperCase();

  useEffect(() => {
    dispatch(getChannelInfo(channelId));
    dispatch(subscriptionStatus(channelId));
  }, [dispatch, channelId]);

  return (
    <div className='metadata'>
      <div className='metadata__top'>
        <h3>{title}</h3>
        <div className='info_bar'>
          <span>
            {views} views • {publishedDay}
          </span>
          <ul className='like_btns'>
            <li className='like'>
              <MdThumbUp size={26} /> {likes}
            </li>
            <li className='dislike'>
              <MdThumbDown size={26} /> {dislikes}
            </li>
          </ul>
        </div>
      </div>

      <div className='metadata__channel'>
        <div className='channel_info'>
          <img src={channelIcon} alt='' />
          <div className='channel_name'>
            <p>{channelTitle}</p>
            <p> {subscribeCount} subscribers</p>
          </div>
        </div>
        <SubscribeButton />
      </div>

      <div className='metadata__description'>
        {description}
        <p className='show_more'>Show More</p>
      </div>
    </div>
  );
};
