import React from "react";


// 

// export type ProfilePageType = {
//   newTextMessage: string
//   posts: Array<PostType>
// }
// export type MessagesPageType = {
//   dialogs: Array<DialogType>,
//   messages: Array<MessageType>,
//   newMessageBody: string
// }
// export type SideBarPageType = {
//   navbarList: Array<NavbarListType>
//   bestFriends: Array<BestFriendsType>
// }

// export type StateType = {
//   profilePage: ProfilePageType,
//   messagesPage: MessagesPageType,
//   sidebar: SideBarPageType
// }


// export type StoreType = {
//   _state: StateType,
//   _callSubscriber: () => void,
//   _addPost: () => void,
//   _onChangeNewTextMessage: (text: string) => void,
//   getState: () => StateType,
//   subscribe: (callBack: () => void) => void,
//   dispatch: (action: ActionsTypes) => void
// }

// type AddPostActionType = {
//   type: 'ADD-POST'
// }
// type ChangeNewTextActionType = {
//   type: "UPDATE-NEW-TEXT-POST"
//   text: string
// }

// export type ActionsTypes = AddPostActionType | ChangeNewTextActionType | UpdateNewMessageBodyActionType | SendMessageActionType;

// export let store = {
//   _state: {
//     profilePage: {
//       newTextMessage: '',
//       posts: [
//         { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
//         { id: 2, message: 'Its my first post ;)', likesCount: 13 },
//         { id: 3, message: 'yoo', likesCount: 4 },
//       ]
//     },
//     messagesPage: {
//       dialogs: [
//         { id: 1, name: 'Dimych' },
//         { id: 2, name: 'Andrew' },
//         { id: 3, name: 'Sveta' },
//         { id: 4, name: 'Sasha' },
//         { id: 5, name: 'Viktor' },
//         { id: 6, name: 'Valera' }
//       ],
//       messages: [
//         { id: 1, message: 'Hi' },
//         { id: 2, message: 'How are you?' },
//         { id: 3, message: 'Yooo' }
//       ],
//       newMessageBody: '',
//     },
//     sidebar: {
//       navbarList: [
//         { id: 1, title: 'Profile' },
//         { id: 2, title: 'Messages' },
//         { id: 3, title: 'News' },
//         { id: 4, title: 'Music' },
//         { id: 5, title: 'Settings' }
//       ],
//       bestFriends: [
//         { id: 1, name: 'Andrew' },
//         { id: 2, name: 'Sasha' },
//         { id: 3, name: 'Sveta' }
//       ]
//     }
//   },
//   _callSubscriber() {
//     console.log('State changed')
//   },
//   getState() {
//     return (this._state);
//   },
//   subscribe(observer: () => void) {
//     this._callSubscriber = observer; //паттерн observer(наблюдатель)
//   },
//   _addPost() {
//     this._state.profilePage.posts.push({
//       id: Number(new Date().getTime()),
//       message: this._state.profilePage.newTextMessage,
//       likesCount: 0
//     });
//     this._state.profilePage.newTextMessage = '';
//     this._callSubscriber();
//   },
//   _onChangeNewTextMessage(text: string) {
//     this._state.profilePage.newTextMessage = text;
//     this._callSubscriber();
//   },
//   dispatch() {

//     this._state.profilePage = profileReducer(this._state.profilePage, action)
//     this._state.messagesPage = dialogsReducer(this._state.messagesPage, action)
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action)

//     this._callSubscriber();

//     // if (action.type === ADD_POST) {
//     //   this._addPost();
//     // } else
//     //   if (action.type === UPDATE_NEW_TEXT_POST) {
//     //     this._onChangeNewTextMessage(action.text);
//     //   } else
//         // if (action.type === UPDATE_NEW_MESSAGE_BODY) {
//         //   this._state.messagesPage.newMessageBody = action.text;
//         //   this._callSubscriber();
//         // } else 
//         // if (action.type === SEND_MESSAGE) {

//         //   this._state.messagesPage.messages.push({id: Number(new Date().getTime()), message: this._state.messagesPage.newMessageBody});
//         //   this._state.messagesPage.newMessageBody = '';
//         //   this._callSubscriber();
//         // }
//   }
// }


// export const addpostActionCreater = (): ActionsTypes => ({ type: ADD_POST });
// export const changeValueInputHandlerActionCreater = (text: string): ActionsTypes => {
//   return {
//     type: UPDATE_NEW_TEXT_POST,
//     text: text
//   }
// }
// export const sendMessageActionCreater = (): ActionsTypes => ({ type: SEND_MESSAGE});
// export const updateNewMessageBodyActionCreater = (text: string): ActionsTypes => ({ type: UPDATE_NEW_MESSAGE_BODY, text});
