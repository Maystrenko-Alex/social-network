import React from 'react';
import { AnyAction } from 'redux';
import { sendMessageActionCreater, updateNewMessageBodyActionCreater } from '../redux/dialogs-reducer';
import { AppRootStateType } from '../redux/redux-store';
import { Dialogs } from './Dialogs';

type DialogsContanerPropsType = {
  state: AppRootStateType
  dispatch: (action: AnyAction) => void
}

const DialogsContainer = (props: DialogsContanerPropsType) => {
  const updateNewMessageBody = (text: string) => props.dispatch(updateNewMessageBodyActionCreater(text))
  const sendMessage = () => props.dispatch(sendMessageActionCreater())

  return <Dialogs 
            newMessageBody={props.state.messagesPage.newMessageBody}
            dialogs={props.state.messagesPage.dialogs} 
            messages={props.state.messagesPage.messages}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
            />

};

export default DialogsContainer;