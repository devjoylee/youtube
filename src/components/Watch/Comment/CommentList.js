import React from 'react';
import { Comment } from './Comment';
import './_comment.scss';

export const CommentList = () => {
  return (
    <div className='comments'>
      <p className='comments__total'>1234 Comments</p>
      <div className='comments__form'>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU' alt='' />
        <form>
          <input type='text' placeholder='Write a comment...' />
          <button>Comment</button>
        </form>
      </div>
      <ul className='comments__list'>
        {[...Array(5)].map((_, i) => (
          <Comment key={i} />
        ))}
      </ul>
    </div>
  );
};
