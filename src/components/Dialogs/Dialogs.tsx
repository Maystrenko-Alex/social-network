import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

type MessagePropsType = {
  message: string
};

type DialogItemPropsType = {
  id: number
  user: string
};

type DialogsDataType = {
  id: number, 
  name: string
}[];



export const Dialogs = () => {
  
  let dialogsData : DialogsDataType = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrew'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Valera'}
  ]

  let messageData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yooo'},
  ]
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem id={dialogsData[0].id} user={dialogsData[0].name} />
        <DialogItem id={dialogsData[1].id} user={dialogsData[1].name} />
        <DialogItem id={dialogsData[2].id} user={dialogsData[2].name} />
        <DialogItem id={dialogsData[3].id} user={dialogsData[3].name} />
        <DialogItem id={dialogsData[4].id} user={dialogsData[4].name} />
        <DialogItem id={dialogsData[5].id} user={dialogsData[5].name} />
      </div>
      <div className={s.messages}>
        <Message message={messageData[0].message} />
        <Message message={messageData[1].message} />
        <Message message={messageData[2].message} />
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
