import { ActionsTypes, MessagesPageType } from './state';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export const dialogsReducer = (state: MessagesPageType, action: ActionsTypes): MessagesPageType => {
  switch (action.type) {
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.text;
      return state;
    case SEND_MESSAGE:
      state.messages.push({ id: Number(new Date().getTime()), message: state.newMessageBody });
      state.newMessageBody = '';
      return state;
    default:
      return state;
  }
}