import React from 'react';
import cl from './Components.module.css';
import Navigate from './Navigate';

const Header = () => {
  return (
    <>
      <div className={cl.background}></div>
      <header className={cl.Header}>
          <Navigate/>
      </header>
    </>
  );
};

export default Header;