import React from 'react';
import moment from 'moment';

export const Comment = ({ item }) => {
  const comment = item?.snippet.topLevelComment.snippet;
  const { authorDisplayName, authorProfileImageUrl, publishedAt, textDisplay } = comment;

  return (
    <li className='comment'>
      <img src={authorProfileImageUrl} alt='' />
      <div className='comment__body'>
        <p className='user'>
          {authorDisplayName} • {moment(publishedAt).fromNow()}
        </p>
        <p className='text'>{textDisplay}</p>
      </div>
    </li>
  );
};
