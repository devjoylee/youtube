import React, { useState } from 'react';
import 'styles/app.scss';
import { Header, SideBar } from 'components';

export const App = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const handleToggle = () => setToggleSidebar((value) => !value);

  return (
    <div>
      <Header handleToggle={handleToggle} />
      <SideBar toggleSidebar={toggleSidebar} handleToggle={handleToggle} />
    </div>
  );
};
