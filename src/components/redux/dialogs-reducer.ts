
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
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
  newMessageBody: string
}
type UpdateNewMessageBodyActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY',
  text: string
}
type SendMessageActionType = {
  type: 'SEND-MESSAGE'
}
type ActionsTypes =  UpdateNewMessageBodyActionType | SendMessageActionType;

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
  newMessageBody: '',
};

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {
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

export const sendMessageActionCreater = (): ActionsTypes => ({ type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreater = (text: string): ActionsTypes => ({ type: UPDATE_NEW_MESSAGE_BODY, text});
