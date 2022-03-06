import React, { useState } from 'react';
import 'styles/app.scss';
import { Header, SideBar } from 'components';
import { MainPage } from 'pages/mainPage';

export const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggle = () => setToggleSidebar((value) => !value);

  return (
    <>
      <Header handleToggle={handleToggle} />
      <main className='main_contents'>
        <SideBar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
        <MainPage />
      </main>
    </>
  );
};
