import React from 'react';
import './_videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

export const VideoMetaData = ({ id, video: { snippet, statistics } }) => {
  const { channelId, channelTitle, description, title, publishedAt } = snippet;
  const { viewCount, likeCount, dislikeCount } = statistics;

  return (
    <div className='metadata'>
      <div className='metadata__top'>
        <h3>{title}</h3>
        <div className='info_bar'>
          <span>
            {numeral(viewCount).format('0.a')} Views • {moment(publishedAt).fromNow()}
          </span>
          <ul className='like_btns'>
            <li className='like'>
              <MdThumbUp size={26} /> {numeral(likeCount).format('0.a')}
            </li>
            <li className='dislike'>
              <MdThumbDown size={26} /> {numeral(dislikeCount).format('0.a')}
            </li>
          </ul>
        </div>
      </div>

      <div className='metadata__channel'>
        <div className='channel_info'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU' alt='' />
          <div className='channel_name'>
            <p>{channelTitle}</p>
            <p> {numeral(10000).format('0.a')} Subscribers</p>
          </div>
        </div>
        <button className='subscribe_btn'>Subscribe</button>
      </div>
      <div className='metadata__description'>
        {description}
        <p className='show_more'>Show More</p>
      </div>
    </div>
  );
};
