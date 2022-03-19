import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getPopularVideos, getVideosByCategory } from 'redux/actions';
import './_category.scss';

const keywords = [
  'All',
  'React js',
  'Angular js',
  'React Native',
  'use of API',
  'Redux',
  'Music',
  'Algorithm Art ',
  'Guitar',
  'Bengali Songs',
  'Coding',
  'Cricket',
  'Football',
  'Real Madrid',
  'Gatsby',
  'Poor Coder',
  'Shwetabh',
];

export const Category = () => {
  const [activeElement, setActiveElement] = useState('All');

  const dispatch = useDispatch();

  const handleClick = (value) => {
    setActiveElement(value);
    if (value === 'All') {
      dispatch(getPopularVideos());
    } else {
      dispatch(getVideosByCategory(value));
    }
  };

  return (
    <div className='categories'>
      {keywords.map((value, i) => (
        <span onClick={() => handleClick(value)} key={i} className={activeElement === value ? 'active' : ''}>
          {value}
        </span>
      ))}
    </div>
  );
};