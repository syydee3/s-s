import React from 'react';
import { Link } from 'react-router-dom';
import cl from './Components.module.css';

const Navigate = () => {
  return (
    <ul className={cl.navigation}>
      <li className={cl.home}><Link to='/home'>Home</Link></li>
      <li className={cl.profile}><Link to='/profile'>Profile</Link></li>
      <Link to='/registration'/>
    </ul>
  );
};

export default Navigate;