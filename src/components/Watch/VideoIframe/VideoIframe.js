import React from 'react';
import { useParams } from 'react-router-dom';
import './_videoIframe.scss';

export const VideoIframe = () => {
  const { id } = useParams();

  return (
    <div className='iframe_container'>
      <iframe src={`https://www.youtube.com/embed/${id}`} frameBorder='0' allowFullScreen title='MY VIDEO' width='100%' height='100%'></iframe>
    </div>
  );
};
