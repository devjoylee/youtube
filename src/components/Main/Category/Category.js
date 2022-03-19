import React, { useState } from 'react';
import './_category.scss';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'Youtube API',
  'Redux',
  'Music',
  'IU songs',
  'Algorithm',
  'Netflix series',
  'Coding vlog',
  'Gatsby',
  'Tech Interview',
  'Clone coding',
];

export const Category = ({ loadVideos }) => {
  const [activeElement, setActiveElement] = useState('All');

  const handleClick = (value) => {
    setActiveElement(value);
    loadVideos(value);
  };

  return (
    <div className='categories'>
      {keywords.map((value, i) => (
        <span
          onClick={() => handleClick(value)}
          key={i}
          className={activeElement === value ? 'active' : ''}
        >
          {value}
        </span>
      ))}
    </div>
  );
};
