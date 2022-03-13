import React from 'react';
import moment from 'moment';

export const Comment = () => {
  return (
    <li className='comment'>
      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU' alt='' />
      <div className='comment__body'>
        <p className='user'>Joy Lee • {moment('2022-03-10').fromNow()}</p>
        <p className='text'>Nice Video!</p>
      </div>
    </li>
  );
};
