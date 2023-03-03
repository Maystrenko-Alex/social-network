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
  messages: Array<MessageType>
}

 type SendMessageAT = {
  type: 'SEND-MESSAGE'
  newMessageText: string
}

type ActionsTypes = SendMessageAT;

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
  ]
};

export const dialogsReducer = (state: MessagesPageType = initialState, action: ActionsTypes): MessagesPageType => {

  switch (action.type) {
    case SEND_MESSAGE:
      return {
        ...state,
        messages: [...state.messages, { id: Number(new Date().getTime()), message: action.newMessageText }],
      };
    default:
      return state;
  }
}

export const sendMessageAC = (newMessageText: string): SendMessageAT => ({ type: SEND_MESSAGE, newMessageText});