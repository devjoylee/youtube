import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { MdNotifications, MdApps } from 'react-icons/md';
import { SearchBar } from '../SearchBar/SearchBar';

export const Header = ({ handleToggle }) => {
  return (
    <header className='header'>
      <FaBars className='header__menu' size={26} onClick={handleToggle} />
      <img
        src='https://pngimg.com/uploads/youtube/youtube_PNG2.png'
        alt='logo'
        className='header__logo'
      />

      <SearchBar />

      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img
          src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png'
          alt='avatar'
        />
      </div>
    </header>
  );
};
