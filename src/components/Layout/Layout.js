import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { SideBar } from './SideBar/SideBar';

export const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggle = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className='main_contents'>
        <SideBar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
        <Outlet />
      </main>
    </>
  );
};
