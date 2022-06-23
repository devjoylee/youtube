import React from 'react';
import './_skeleton.scss';

export const SkeletonElement = ({ type }) => {
  return (
    <div className={`skeleton ${type}`}>
      <div className='highlight'></div>
    </div>
  );
};
