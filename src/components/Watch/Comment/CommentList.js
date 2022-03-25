import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addComment, getCommentsById } from 'redux/actions';
import { Comment } from './Comment';
import './_comment.scss';

export const CommentList = ({ videoId, video }) => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.commentList.comments);
  const commentCount = video?.statistics?.commentCount;

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleComment = (e) => {
    e.preventDefault();
    if (text.length === 0) return;

    // POST comment
    dispatch(addComment(videoId, text));
    // GET comment
    setTimeout(() => dispatch(getCommentsById(videoId)), 2500);
    setText('');
  };
  useEffect(() => {
    dispatch(getCommentsById(videoId));
  }, [videoId, dispatch]);

  return (
    <div className='comments'>
      <p className='comments__total'>{commentCount} Comments</p>
      <div className='comments__form'>
        <img
          src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUW0u5Eiiy3oM6wcpeEE6sXCzlh8G-tX1_Iw&usqp=CAU'
          alt=''
        />
        <form onSubmit={handleComment}>
          <input
            type='text'
            value={text}
            onChange={handleChange}
            placeholder='Write a comment...'
          />
          <button>Comment</button>
        </form>
      </div>
      <ul className='comments__list'>
        {commentList !== undefined &&
          commentList.map((item, i) => <Comment key={i} item={item} />)}
      </ul>
    </div>
  );
};
