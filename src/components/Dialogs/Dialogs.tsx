import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type MessagePropsType = {
  message: string
}

type DialogItemPropsType = {
  id: number
  user: string
}

export const Dialogs = () => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={1} user='Dimych' />
        <DialogItem id={2} user='Andrew' />
        <DialogItem id={3} user='Sveta' />
        <DialogItem id={4} user='Sasha' />
        <DialogItem id={5} user='Viktor' />
        <DialogItem id={6} user='Valera' />
      </div>
      <div className={s.messages}>
        <Message message='Hi' />
        <Message message='How are you?' />
        <Message message='Yooo' />
      </div>
    </div>
  );
};


const DialogItem = (props: DialogItemPropsType) => {
  let path: string = '/dialogs/' + props.id;
  let actClassNavLink = (navdata: { isActive: boolean; isPending: boolean; }) =>
    (navdata.isActive ? s.activeClass : '')
  return (
    <div className={s.dialog}>
      <NavLink
        className={actClassNavLink}
        to={path}>{props.user}</NavLink>
    </div>
  );
}


const Message = (props: MessagePropsType) => {
  return (
    <div className={s.dialog}>{props.message}</div>
  );
}
