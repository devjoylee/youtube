import React from 'react';
import { Category, Container, Video } from 'components';

export const MainPage = () => {
  return (
    <Container>
      <Category />
      <div className='video__container'>
        {[...new Array(20)].map((_, i) => (
          <Video key={i} />
        ))}
      </div>
    </Container>
  );
};
