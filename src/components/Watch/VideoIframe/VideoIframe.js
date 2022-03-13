import React from 'react';
import './_videoIframe.scss';

export const VideoIframe = () => {
  return (
    <div className='iframe_container'>
      <iframe src='https://www.youtube.com/embed/MoGmTOn356k' frameBorder='0' allowFullScreen title='MY VIDEO' width='100%' height='100%'></iframe>
    </div>
  );
};
