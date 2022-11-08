import React, { ChangeEvent } from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { DialogType, MessageType } from '../redux/dialogs-reducer';

type DialogsPropsType = {
  newMessageBody: string
  dialogs: Array<DialogType>
  messages: Array<MessageType>
  updateNewMessageBody: (text: string) => void
  sendMessage: () => void
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.dialogs.map(d => <DialogItem id={d.id} key={d.id} user={d.name} />);
  const messagesElements = props.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewMessageBody(e.target.value)
  }
  const onClickSendMessage = () => {
    props.sendMessage();
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div><textarea value={props.newMessageBody} onChange={onNewMessageChange} placeholder={'enter text...'}></textarea></div>
          <button onClick={onClickSendMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};



