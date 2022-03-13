import { Container } from 'components';
import React from 'react';

export const WatchPage = () => {
  return (
    <Container className='watch_page'>
      <div className='watch_contents'>
        <div className='iframe_container'>
          <iframe
            src='https://www.youtube.com/embed/MoGmTOn356k'
            frameBorder='0'
            allowFullScreen
            title='MY VIDEO'
            width='100%'
            height='100%'
          ></iframe>
        </div>
        <p>metadata</p>
        <p>comments</p>
      </div>
      <ul className='side_videos'>
        {[...Array(10)].map((_, i) => (
          <li key={i}>related video</li>
        ))}
      </ul>
    </Container>
  );
};
