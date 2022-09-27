import React from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { MessagesPageType } from '../redux/state';
import { text } from 'stream/consumers';


type DialogsPropsType = {
  messagesPage: MessagesPageType
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} user={d.name} />);
  const messagesElements = props.messagesPage.messages.map(m => <Message id={m.id} message={m.message} />);

  const newMessageElements = React.createRef<HTMLTextAreaElement>();
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
      <div>
        <textarea ref={newMessageElements} placeholder={'enter text...'}></textarea>
        <button onClick={()=>alert(newMessageElements.current?.value)}>Add message</button>
      </div>
      </div>
    </div>
  );
};



