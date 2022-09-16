import React from 'react';
import s from './Header.module.css';

export const Header = () => {
  return (
    <header className={s.header}>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Logo-Logo.svg/1430px-Logo-Logo.svg.png?20150107004557'
          height='50px'
          alt='#s'>
        </img>
      </header>
  );
};

export default Header;




