import React from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogsDataType, MessageDataType } from '../..';

type DialogsPropsType = {
  dialogsData: DialogsDataType
  messageData: MessageDataType
}

export const Dialogs = (props: DialogsPropsType) => {

  const dialogsElement = props.dialogsData.map(d => <DialogItem id={d.id} user={d.name} />)
  const messagesElements = props.messageData.map(m => <Message message={m.message} />)

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



