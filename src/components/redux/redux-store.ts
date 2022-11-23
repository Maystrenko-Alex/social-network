
import { combineReducers, createStore } from "redux";
import { dialogsReducer, MessagesPageType, SendMessageAT, UpdateNewTextMessageAT } from "./dialogs-reducer";
import { AddPostAT, ProfilePageType, profileReducer, UpdateNewTextPostAT } from "./profile-reducer";
import { SideBarPageType, sidebarReducer } from './sidebar-reducer';
import { FollowAT, SetCurrentPageAT, SetTotalUsersCountAT, SetUsersAT, UnfollowAT, usersReducer, UsersType } from "./users-reducer";

export type  AllActionTypes = AddPostAT | UpdateNewTextPostAT | UpdateNewTextMessageAT | SendMessageAT | FollowAT | UnfollowAT | SetUsersAT | SetCurrentPageAT | SetTotalUsersCountAT;

let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer
})

let store = createStore(rootReducer);


export type AppRootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sidebarPage: SideBarPageType
  usersPage: UsersType
}
// export type AppRootStateType = ReturnType<typeof reducers>


export default store;

// @ts-ignore
window.store = store;