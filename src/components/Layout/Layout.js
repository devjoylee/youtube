import React, { useState } from 'react';
import { Container, Header, SideBar } from 'components';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggle = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className='main_contents'>
        <SideBar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
        <Container>
          <Outlet />
        </Container>
      </main>
    </>
  );
};
