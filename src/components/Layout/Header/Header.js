import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { MdNotifications, MdApps } from 'react-icons/md';
import { SearchBar } from '../SearchBar/SearchBar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

export const Header = ({ handleToggle }) => {
  const { photoURL } = useSelector((state) => state.auth?.user) || { photoURL: '' };

  return (
    <header className='header'>
      <FaBars className='header__menu' size={26} onClick={handleToggle} />
      <Link to='/'>
        <img
          src='https://pngimg.com/uploads/youtube/youtube_PNG2.png'
          alt='logo'
          className='header__logo'
        />
      </Link>

      <SearchBar />

      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src={photoURL} alt='avatar' />
      </div>
    </header>
  );
};
