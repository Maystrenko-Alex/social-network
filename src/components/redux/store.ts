import React from "react";
import { dialogsReducer, DialogType, MessageType, SendMessageAT, UpdateNewTextMessageAT } from "./dialogs-reducer";
import { PostType, profileReducer } from "./profile-reducer";
import { BestFriendsType, NavbarListType, sidebarReducer } from "./sidebar-reducer";


 

export type ProfilePageType = {
  newTextPost: string
  posts: Array<PostType>
}
export type MessagesPageType = {
  dialogs: Array<DialogType>,
  messages: Array<MessageType>,
  newTextMessage: string
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
  // _addPost: () => void,
  // _onChangeNewTextMessage: (text: string) => void,
  getState: () => StateType,
  subscribe: (callBack: () => void) => void,
  dispatch: (action: ActionTypes) => void
}

type AddPostAT = {
  type: 'ADD-POST'
}
type UpdateNewTextPostAT = {
  type: "UPDATE-NEW-TEXT-POST"
  text: string
}

export type ActionTypes = AddPostAT | UpdateNewTextPostAT | UpdateNewTextMessageAT | SendMessageAT;

export let store = {
  _state: {
    profilePage: {
      newTextPost: '',
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
      newTextMessage: '',
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
    this._callSubscriber = observer; 
    //паттерн observer(наблюдатель)
  },
  dispatch(action: ActionTypes) {

    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.messagesPage = dialogsReducer(this._state.messagesPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber();

  }
}
