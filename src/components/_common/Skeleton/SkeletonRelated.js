import React from 'react';
import { SkeletonElement } from './SkeletonElement';
import './_skeleton.scss';

export const SkeletonRelated = () => {
  return (
    <div className='skeleton-box item'>
      <div className='item__thumbnail'>
        <SkeletonElement type='thumbnail' />
      </div>
      <div className='item__info'>
        <SkeletonElement type='title' />
        <SkeletonElement type='text' w='120' />
        <SkeletonElement type='text' />
      </div>
    </div>
  );
};
