import React from 'react';
import { SideBarPageType } from '../redux/sidebar-reducer';
import { Friends } from './Friends/Friends';
import s from './Navbar.module.css';
import { NavItem } from './NavItem/NavItem';

type NavbarPropsType = {
  sidebar: SideBarPageType;
}

export const Navbar = (props: NavbarPropsType) => {
 debugger
  const navList = props.sidebar.navbarList.map(nl => <NavItem key={nl.id} title={nl.title} />);
  const friendsList = props.sidebar.bestFriends.map(b => <Friends key={b.id} name={b.name} />);
  debugger
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



