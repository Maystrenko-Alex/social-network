import React from 'react';
import { DialogItem } from './DialogsItem/DialogItem';
import s from './Dialogs.module.css';
import { Message } from './Message/Message';
import { MessagesPageType } from '../../redux/dialogs-reducer';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';


type DialogsPropsType = {
  isAuth: boolean
  messagesPage: MessagesPageType
  sendMessageAC: (value: string) => void
}

export const Dialogs = (props: DialogsPropsType) => {
  const dialogsElement = props.messagesPage.dialogs.map(d => <DialogItem id={d.id} key={d.id} user={d.name} />);
  const messagesElements = props.messagesPage.messages.map(m => <Message id={m.id} key={m.id} message={m.message} />);

  const onSubmit = (values: AddMessagePropsType) => props.sendMessageAC(values.newMessageText);
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElement}
      </div>
      <div className={s.messages}>
        {messagesElements}
        <AddMessageForm onSubmit={onSubmit} />
      </div>
    </div>
  );
};

type AddMessagePropsType = {
  newMessageText: string
}
const AddMessage = (props: InjectedFormProps<AddMessagePropsType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newMessageText'} component={'textarea'} placeholder={'enter text...'}></Field>
      </div>
      <div>
        <button>Add message</button>
      </div>
    </form>
  );
}
const AddMessageForm = reduxForm<AddMessagePropsType>({ form: 'addNewMessage' })(AddMessage);