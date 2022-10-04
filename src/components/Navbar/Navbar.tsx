import React from 'react';
import { SideBarPageType } from '../redux/state';
import { Friends } from './Friends/Friends';
import s from './Navbar.module.css';
import { NavItem } from './NavItem/NavItem';

type NavbarPropsType = {
  sidebar: SideBarPageType;
}

export const Navbar = (props: NavbarPropsType) => {
 
  const navList = props.sidebar.navbarList.map(nl => <NavItem id={nl.id} title={nl.title} />);
  const friendsList = props.sidebar.bestFriends.map(b => <Friends id={b.id} name={b.name} />);
  
  return (
    <nav className={s.navbar}>
      {navList}
      <h2>{'Friends'}</h2>
      <div className={s.friendsBlock}>
        {friendsList}
      </div>
    </nav>
  );
};



