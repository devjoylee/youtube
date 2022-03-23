import React from 'react';
import './_sidebar.scss';
import {
  MdSubscriptions,
  MdExitToApp,
  MdThumbUp,
  MdHistory,
  MdLibraryBooks,
  MdHome,
  MdSentimentDissatisfied,
} from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { logout } from 'redux/actions';
import { Link } from 'react-router-dom';

export const SideBar = ({ toggleSidebar, handleToggle }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <ul className={toggleSidebar ? 'sidebar open' : 'sidebar'} onClick={() => handleToggle(false)}>
      <li className='sidebar_menu'>
        <Link to='/'>
          <MdHome size={23} />
          <span>Home</span>
        </Link>
      </li>
      <li className='sidebar_menu'>
        <Link to='/feed/subscriptions'>
          <MdSubscriptions size={23} />
          <span>Subscriptions</span>
        </Link>
      </li>
      <li className='sidebar_menu'>
        <Link to='/'>
          <MdThumbUp size={23} />
          <span>Liked Video</span>
        </Link>
      </li>
      <li className='sidebar_menu'>
        <Link to='/'>
          <MdHistory size={23} />
          <span>History</span>
        </Link>
      </li>
      <li className='sidebar_menu'>
        <Link to='/'>
          <MdLibraryBooks size={23} />
          <span>Library</span>
        </Link>
      </li>
      <li className='sidebar_menu'>
        <Link to='/'>
          <MdSentimentDissatisfied size={23} />
          <span>I don't Know</span>
        </Link>
      </li>
      <li className='sidebar_menu logout' onClick={handleLogout}>
        <MdExitToApp size={23} />
        <span>Log Out</span>
      </li>
    </ul>
  );
};
