import React, { ChangeEvent } from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { ActionsTypes, MessagesPageType, sendMessageActionCreater, updateNewMessageBodyActionCreater } from '../redux/state';


type DialogsPropsType = {
  messagesPage: MessagesPageType
  dispatch: (action: ActionsTypes) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} user={d.name} />);
  const messagesElements = props.messagesPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);

  const onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch(updateNewMessageBodyActionCreater(e.target.value))
  }
  const onClickSendMessage = () => {
    props.dispatch(sendMessageActionCreater())
  }

  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <div>
          <div><textarea value={props.messagesPage.newMessageBody} onChange={onNewMessageChange} placeholder={'enter text...'}></textarea></div>
          <button onClick={onClickSendMessage}>Add message</button>
        </div>
      </div>
    </div>
  );
};



