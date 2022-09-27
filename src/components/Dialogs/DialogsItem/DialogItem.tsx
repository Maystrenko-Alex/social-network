import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

type DialogItemPropsType = {
  id: number
  user: string
};

export const DialogItem = (props: DialogItemPropsType) => {
  debugger
  let path = '/dialogs/' + props.id;
  let actClassNavLink = (navdata: { isActive: boolean; isPending: boolean; }) => (navdata.isActive ? s.activeClass : '');
  return (
    <div key={props.id} className={s.dialog}>
      <div>
        <img className={s.dialogsAva}
          alt="images ava"
          src='https://img.freepik.com/premium-photo/black-avatar-blank-shape-in-white-hole-suitable-for-avatar-internet-and-profile-page-themes-3d-illustration_119981-211.jpg' />
      </div>
      <NavLink
        className={actClassNavLink}
        to={path}>{props.user}</NavLink>
    </div>
  );
};

