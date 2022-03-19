import React, { useEffect } from 'react';
import './_videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { subscriptionStatus, getChannelInfo } from 'redux/actions';

export const VideoMetaData = ({ id, video: { snippet, statistics } }) => {
  const dispatch = useDispatch();
  // video Info
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;
  const _viewCount = numeral(viewCount).format('0.a');
  const _publishedAt = moment(publishedAt).fromNow();
  const likes = numeral(likeCount).format('0.a');
  const dislikes = numeral(dislikeCount).format('0.a');

  // channel Info
  const { snippet: channelSnippet, statistics: channelStatistics } = useSelector((state) => state.channelInfo.channel);
  const channelIcon = channelSnippet?.thumbnails?.default?.url;
  const subscribeCount = numeral(channelStatistics?.subscriberCount).format('0.a');

  // subscription Status
  const isSubscribed = useSelector((state) => state.channelInfo.isSubscribed);

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
            {_viewCount} Views • {_publishedAt}
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
            <p> {subscribeCount} Subscribers</p>
          </div>
        </div>
        <button className={`subscribe_btn ${isSubscribed && 'subscribed'}`}>{isSubscribed ? 'Subscribed' : 'Subscribe'}</button>
      </div>
      <div className='metadata__description'>
        {description}
        <p className='show_more'>Show More</p>
      </div>
    </div>
  );
};
