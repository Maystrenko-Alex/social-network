import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Header.module.css';

type HeaderPropsType = {
  login: string | null
  isAuth: boolean
}
export const Header = (props: HeaderPropsType) => {
  return (
    <header className={style.header}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Logo-Logo.svg/1430px-Logo-Logo.svg.png?20150107004557'
        height='50px'
        alt='#s'>
      </img>
      <div className={style.loginBlock}>
        {
          props.isAuth
            ? props.login
            : <NavLink to={'/'} >LOGIN</NavLink>
        }
      </div>
    </header>
  );
};

export default Header;




