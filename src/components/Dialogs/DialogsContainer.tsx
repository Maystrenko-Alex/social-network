import React from 'react';
import { AnyAction } from 'redux';
import { sendMessageAC, updateNewTextMessageAC } from '../redux/dialogs-reducer';
import { AppRootStateType } from '../redux/redux-store';
import { Dialogs } from './Dialogs';

type DialogsContanerPropsType = {
  state: AppRootStateType
  dispatch: (action: AnyAction) => void
}

const DialogsContainer = (props: DialogsContanerPropsType) => {
  const updateNewMessageBody = (text: string) => props.dispatch(updateNewTextMessageAC(text))
  const sendMessage = () => props.dispatch(sendMessageAC())

  return <Dialogs 
            newMessageBody={props.state.messagesPage.newTextMessage}
            dialogs={props.state.messagesPage.dialogs} 
            messages={props.state.messagesPage.messages}
            updateNewMessageBody={updateNewMessageBody}
            sendMessage={sendMessage}
            />

};

export default DialogsContainer;