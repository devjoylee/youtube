import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCommentsById } from 'redux/actions/comment.action';
import { Comment } from './Comment';
import './_comment.scss';

export const CommentList = ({ videoId }) => {
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList.comments);

  useEffect(() => {
    dispatch(getCommentsById(videoId));
  }, [videoId, dispatch]);

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
      <ul className='comments__list'>{commentList !== undefined && commentList.map((item, i) => <Comment key={i} item={item} />)}</ul>
    </div>
  );
};
