const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

export type PostType = {
  id: number,
  message: string,
  likesCount: number
}
export type DialogType = {
  id: number,
  name: string
}
export type MessageType = {
  id: number,
  message: string
}
export type NavbarListType = {
  id: number,
  title: string
}
export type BestFriendsType = {
  id: number,
  name: string
}

export type ProfilePageType = {
  newTextMessage: string
  posts: Array<PostType>
}
export type MessagesPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newMessageBody: string
}
export type SideBarPageType = {
  navbarList: Array<NavbarListType>
  bestFriends: Array<BestFriendsType>
}

export type StateType = {
  profilePage: ProfilePageType,
  messagesPage: MessagesPageType,
  sidebar: SideBarPageType
}


export type StoreType = {
  _state: StateType,
  _callSubscriber: () => void,
  _addPost: () => void,
  _onChangeNewTextMessage: (text: string) => void,
  getState: () => StateType,
  subscribe: (callBack: () => void) => void,
  dispatch: (action: ActionsTypes) => void
}

type AddPostActionType = {
  type: 'ADD-POST'
}
type ChangeNewTextActionType = {
  type: "UPDATE-NEW-TEXT-POST"
  text: string
}
type UpdateNewMessageBodyActionType = {
  type: 'UPDATE-NEW-MESSAGE-BODY',
  text: string
}
type SendMessageActionType = {
  type: 'SEND-MESSAGE'
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType;

// export let state: StateType = {
//   profilePage: {
//     newTextMessage: '',
//     posts: [
//       { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
//       { id: 2, message: 'Its my first post ;)', likesCount: 13 },
//       { id: 3, message: 'yoo', likesCount: 4 },
//     ]
//   },
//   messagesPage: {
//     dialogs: [
//       { id: 1, name: 'Dimych' },
//       { id: 2, name: 'Andrew' },
//       { id: 3, name: 'Sveta' },
//       { id: 4, name: 'Sasha' },
//       { id: 5, name: 'Viktor' },
//       { id: 6, name: 'Valera' }
//     ],
//     messages: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How are you?' },
//       { id: 3, message: 'Yooo' }
//     ]
//   },
//   sidebar: {
//     navbarList: [
//       { id: 1, title: 'Profile' },
//       { id: 2, title: 'Messages' },
//       { id: 3, title: 'News' },
//       { id: 4, title: 'Music' },
//       { id: 5, title: 'Settings' }
//     ],
//     bestFriends: [
//       { id: 1, name: 'Andrew' },
//       { id: 2, name: 'Sasha' },
//       { id: 3, name: 'Sveta' }
//     ]
//   }
// }

// export const addPost = (message: string) => {
//   state.profilePage.posts.push({ id: Number(new Date().getTime()), message: state.profilePage.newTextMessage, likesCount: 0 });
//   state.profilePage.newTextMessage = '';
//   rerenderEntireTree();
// }
// export const onChangeNewTextMessage = (text: string) => {
//   state.profilePage.newTextMessage = text;
//   rerenderEntireTree();
// }

// let rerenderEntireTree = () => {
// }
// export const subscribe = (observer: () => void) => {
//   rerenderEntireTree = observer; //паттерн observer(наблюдатель)
// }

export let store: StoreType = {
  _state: {
    profilePage: {
      newTextMessage: '',
      posts: [
        { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
        { id: 2, message: 'Its my first post ;)', likesCount: 13 },
        { id: 3, message: 'yoo', likesCount: 4 },
      ]
    },
    messagesPage: {
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
    },
    sidebar: {
      navbarList: [
        { id: 1, title: 'Profile' },
        { id: 2, title: 'Messages' },
        { id: 3, title: 'News' },
        { id: 4, title: 'Music' },
        { id: 5, title: 'Settings' }
      ],
      bestFriends: [
        { id: 1, name: 'Andrew' },
        { id: 2, name: 'Sasha' },
        { id: 3, name: 'Sveta' }
      ]
    }
  },
  _callSubscriber() {
    console.log('State changed')
  },
  getState() {
    return (this._state);
  },
  subscribe(observer: () => void) {
    this._callSubscriber = observer; //паттерн observer(наблюдатель)
  },
  _addPost() {
    debugger
    this._state.profilePage.posts.push({
      id: Number(new Date().getTime()),
      message: this._state.profilePage.newTextMessage,
      likesCount: 0
    });
    this._state.profilePage.newTextMessage = '';
    this._callSubscriber();
  },
  _onChangeNewTextMessage(text: string) {
    this._state.profilePage.newTextMessage = text;
    this._callSubscriber();
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      this._addPost();
    } else
      if (action.type === UPDATE_NEW_TEXT_POST) {
        this._onChangeNewTextMessage(action.text);
      } else
        if (action.type === UPDATE_NEW_MESSAGE_BODY) {
          this._state.messagesPage.newMessageBody = action.text;
          this._callSubscriber();
        } else 
        if (action.type === SEND_MESSAGE) {

          this._state.messagesPage.messages.push({id: Number(new Date().getTime()), message: this._state.messagesPage.newMessageBody});
          this._state.messagesPage.newMessageBody = '';
          this._callSubscriber();
        }
  }
}


export const addpostActionCreater = (): ActionsTypes => ({ type: ADD_POST });
export const changeValueInputHandlerActionCreater = (text: string): ActionsTypes => {
  return {
    type: UPDATE_NEW_TEXT_POST,
    text: text
  }
}
export const sendMessageActionCreater = (): ActionsTypes => ({ type: SEND_MESSAGE});
export const updateNewMessageBodyActionCreater = (text: string): ActionsTypes => ({ type: UPDATE_NEW_MESSAGE_BODY, text});
