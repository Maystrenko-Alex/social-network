import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

export const Navbar = () => {

  return (
    <nav className={s.navbar}>
      <div className={s.item}>
        <NavLink to='/profile' className={({ isActive }) => isActive ? s.activeClass : ''} >
          Profile
        </NavLink>
      </div>

      <div className={s.item}>
        <NavLink to='/dialogs' className={({ isActive }) => isActive ? s.activeClass : ''}>
          Message
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news' className={({ isActive }) => isActive ? s.activeClass : ''}>
          News
        </NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music' className={({ isActive }) => isActive ? s.activeClass : ''}>
          Music
        </NavLink>
      </div>
      <div className={s.item}
      ><NavLink to='/settings' className={({ isActive }) => isActive ? s.activeClass : ''}>
          Settings
        </NavLink>
      </div>
    </nav>
  );
};