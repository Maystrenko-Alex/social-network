import { AllActionTypes } from "./redux-store"


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
    { id: 3, title: 'Users' },
    { id: 4, title: 'News' },
    { id: 5, title: 'Music' },
    { id: 6, title: 'Settings' }
  ],
  bestFriends: [
    { id: 1, name: 'Andrew' },
    { id: 2, name: 'Sasha' },
    { id: 3, name: 'Sveta' }
  ]
};

export const sidebarReducer = (state: SideBarPageType = initialState, action: AllActionTypes):SideBarPageType => {
  
  return state
}