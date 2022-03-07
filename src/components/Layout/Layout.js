import React, { useState } from 'react';
import { Container, Header, SideBar } from 'components';

export const Layout = ({ children }) => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggle = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className='main_contents'>
        <SideBar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
        <Container>{children}</Container>
      </main>
    </>
  );
};
