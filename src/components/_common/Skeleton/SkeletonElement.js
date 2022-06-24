import React from 'react';
import './_skeleton.scss';

export const SkeletonElement = ({ type, h, w }) => {
  return (
    <div className={`skeleton ${type}`} style={{ height: h + 'px', width: w + 'px' }}>
      <div className='highlight'></div>
    </div>
  );
};
