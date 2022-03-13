import { Container, VideoIframe, VideoMetaData } from 'components';
import React from 'react';

export const WatchPage = () => {
  return (
    <Container className='watch_page'>
      <div className='watch_contents'>
        <VideoIframe />
        <VideoMetaData />
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
