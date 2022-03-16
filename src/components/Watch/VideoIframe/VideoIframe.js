import React from 'react';
import './_videoIframe.scss';

export const VideoIframe = ({ id, video }) => {
  return (
    <div className='iframe_container'>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        frameBorder='0'
        allowFullScreen
        title={video?.snippet?.title}
        width='100%'
        height='100%'
      ></iframe>
    </div>
  );
};
