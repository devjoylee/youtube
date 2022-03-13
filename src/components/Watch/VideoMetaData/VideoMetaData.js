import React from 'react';
import './_videoMetaData.scss';
import moment from 'moment';
import numeral from 'numeral';
import { MdThumbUp, MdThumbDown } from 'react-icons/md';

export const VideoMetaData = () => {
  return (
    <div className='metadata'>
      <div className='metadata__top'>
        <h3>Video Title</h3>
        <div className='info_bar'>
          <span>
            {numeral(10000).format('0.a')} Views • {moment('2022-03-10').fromNow()}
          </span>
          <ul className='like_btns'>
            <li className='like'>
              <MdThumbUp size={26} /> {numeral(10000).format('0.a')}
            </li>
            <li className='dislike'>
              <MdThumbDown size={26} /> {numeral(10000).format('0.a')}
            </li>
          </ul>
        </div>
      </div>

      <div className='metadata__channel'>
        <div className='channel_info'>
          <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU' alt='' />
          <div className='channel_name'>
            <p>Redux Coder</p>
            <p> {numeral(10000).format('0.a')} Subscribers</p>
          </div>
        </div>
        <button className='subscribe_btn'>Subscribe</button>
      </div>
      <div className='metadata__description'>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
        the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in
        <p className='show_more'>Show More</p>
      </div>
    </div>
  );
};
