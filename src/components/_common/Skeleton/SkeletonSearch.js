import React from 'react';
import { SkeletonElement } from './SkeletonElement';
import './_skeleton.scss';

export const SkeletonSearch = () => {
  return (
    <div className='skeleton-box item'>
      <div className='item__thumbnail'>
        <SkeletonElement type='thumbnail' />
      </div>
      <div className='item__info'>
        <SkeletonElement type='title' w='500' />
        <SkeletonElement type='text' w='200' />
        <SkeletonElement type='text' w='200' />
        <SkeletonElement type='desc' />
      </div>
    </div>
  );
};
