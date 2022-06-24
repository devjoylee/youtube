import React from 'react';
import { SkeletonElement } from './SkeletonElement';
import './_skeleton.scss';

export const SkeletonVideo = () => {
  return (
    <div className='skeleton-box video'>
      <div className='video__preview'>
        <SkeletonElement type='thumbnail' h='150' />
      </div>
      <div className='video__title'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' />
      </div>
      <div className='video__channel'>
        <SkeletonElement type='profile' />
        <SkeletonElement type='title' />
      </div>
    </div>
  );
};
