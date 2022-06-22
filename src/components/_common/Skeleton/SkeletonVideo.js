import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import './_skeleton.scss';

export const SkeletonVideo = () => {
  return (
    <div className='skeleton-box video'>
      <SkeletonTheme color='#343a40' highlightColor='#3c4147'>
        <Skeleton height={180} />
        <div>
          <SkeletonTheme width={40} height={40} />
          <SkeletonTheme width='75%' height={40} />
        </div>
      </SkeletonTheme>
    </div>
  );
};
