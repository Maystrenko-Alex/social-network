import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogsItem.module.css';

type DialogItemPropsType = {
  id: number
  user: string
};

export const DialogItem = (props: DialogItemPropsType) => {
  let path: string = '/dialogs/' + props.id;
  let actClassNavLink = (navdata: { isActive: boolean; isPending: boolean; }) => (navdata.isActive ? s.activeClass : '');
  return (
    <div className={s.dialog}>
      <NavLink
        className={actClassNavLink}
        to={path}>{props.user}</NavLink>
    </div>
  );
};
