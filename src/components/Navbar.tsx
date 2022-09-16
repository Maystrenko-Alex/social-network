import React from 'react';
import s from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={s.navbar}>
          <div className={s.item}><a href='#s'>Profile</a></div> 
          <div className={s.item}><a href='#s'>Message</a></div>
          <div className={s.item}><a href='#s'>News</a></div>
          <div className={s.item}><a href='#s'>Music</a></div>
          <div className={s.item}><a href='#s'>Settings</a></div>
        </nav>
  );
};

export default Navbar;