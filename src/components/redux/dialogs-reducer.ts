import { ActionTypes } from "./store";

const UPDATE_NEW_TEXT_MESSAGE = 'UPDATE-NEW-TEXT-MESSAGE';
const SEND_MESSAGE = 'SEND-MESSAGE';


export type DialogType = {
  id: number,
  name: string
}
export type MessageType = {
  id: number,
  message: string
}
export type MessagesPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newTextMessage: string
}
export type UpdateNewTextMessageAT = {
  type: 'UPDATE-NEW-TEXT-MESSAGE',
  text: string
}
export type SendMessageAT = {
  type: 'SEND-MESSAGE'
}
//  type ActionTypes =  UpdateNewTextMessageAT | SendMessageAT;

let initialState = {
  dialogs: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrew' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' }
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How are you?' },
    { id: 3, message: 'Yooo' }
  ],
  newTextMessage: '',
};

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionTypes): MessagesPageType => {
  switch (action.type) {
    case UPDATE_NEW_TEXT_MESSAGE:
      state.newTextMessage = action.text;
      return state;
    case SEND_MESSAGE:
      state.messages.push({ id: Number(new Date().getTime()), message: state.newTextMessage });
      state.newTextMessage = '';
      return state;
    default:
      return state;
  }
}

export const sendMessageAC = (): SendMessageAT => ({ type: SEND_MESSAGE});
export const updateNewTextMessageAC = (text: string): UpdateNewTextMessageAT => ({ type: UPDATE_NEW_TEXT_MESSAGE, text});
