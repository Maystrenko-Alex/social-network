import React from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';

type DialogsDataType = {
  id: number,
  name: string
}[];


export const Dialogs = () => {

  let dialogsData: DialogsDataType = [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ]
  let messageData = [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yooo' },
  ]
  const dialogsElement = dialogsData.map(d => <DialogItem id={d.id} user={d.name} />)
  const messagesElements = messageData.map(m => <Message message={m.message} />)

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



