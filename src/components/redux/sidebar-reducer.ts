import { ActionTypes } from "./store"

export type NavbarListType = {
  id: number,
  title: string
}
export type BestFriendsType = {
  id: number,
  name: string
}
export type SideBarPageType = {
  navbarList: Array<NavbarListType>
  bestFriends: Array<BestFriendsType>
}

// type ActionTypes = {

// }

let initialState = {
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
};

export const sidebarReducer = (state: SideBarPageType = initialState, action: ActionTypes):SideBarPageType => {
  
  return state
}