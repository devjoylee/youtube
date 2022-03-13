import React from 'react';
import moment from 'moment';
import numeral from 'numeral';

export const SideVideo = () => {
  return (
    <li className='side_video'>
      <div className='side_video__thumbnail'>
        <img src='https://dailyblogger.com/wp-content/uploads/2019/02/Best_YouTube_Thumbnail_Tool.png' alt='' />
        <span className='duration'>03:10</span>
      </div>
      <div className='side_video__info'>
        <p className='title'>Be ad full stack developer in a month</p>
        <p className='channel'>Joy Lee</p>
        <p className='details'>
          {numeral(1000000).format('0.a')} Views • {moment('2022-01-01').fromNow()}
        </p>
      </div>
    </li>
  );
};
