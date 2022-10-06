
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
  messages: Array<MessageType>
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

export let state: StateType = {
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
    ]
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
}
export const addPost = (message: string) => {
  state.profilePage.posts.push({ id: Number(new Date().getTime()), message: state.profilePage.newTextMessage, likesCount: 0 });
  state.profilePage.newTextMessage='';
  rerenderEntireTree();
}
export const onChangeNewTextMessage = (text: string) => {
  state.profilePage.newTextMessage = text;
  rerenderEntireTree();
}

let rerenderEntireTree = () => {
  console.log('State changed')
}
export const subscribe = (observer: () => void) => {
  rerenderEntireTree = observer; //паттерн observer(наблюдатель)
  console.log('State changed')

}