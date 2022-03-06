import React from 'react';
import './_header.scss';
import { FaBars } from 'react-icons/fa';
import { AiOutlineSearch } from 'react-icons/ai';
import { MdNotifications, MdApps } from 'react-icons/md';

export const Header = () => {
  return (
    <header className='header'>
      <FaBars className='header__menu' size={26} />

      <img src='http://pngimg.com/uploads/youtube/youtube_PNG2.png' alt='logo' className='header__logo' />

      <form>
        <input type='text' placeholder='Search' />
        <button type='submit'>
          <AiOutlineSearch size={22} />
        </button>
      </form>

      <div className='header__icons'>
        <MdNotifications size={28} />
        <MdApps size={28} />
        <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__340.png' alt='avatar' />
      </div>
    </header>
  );
};
