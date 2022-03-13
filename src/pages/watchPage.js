import { Container, VideoIframe, VideoMetaData, CommentList, SideVideoList } from 'components';
import React from 'react';

export const WatchPage = () => {
  return (
    <Container className='watch_page'>
      <div className='watch_contents'>
        <VideoIframe />
        <VideoMetaData />
        <CommentList />
      </div>
      <SideVideoList />
    </Container>
  );
};
