import React from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { MessagesPageType } from '../redux/state';


type DialogsPropsType = {
  messagesPage: MessagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {
debugger
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} user={d.name} />);
  const messagesElements = props.messagesPage.messages.map(m => <Message id={m.id} message={m.message} />);
  debugger
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
      </div>
    </div>
  );
};



