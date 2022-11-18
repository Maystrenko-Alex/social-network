
import { combineReducers, createStore } from "redux";
import { dialogsReducer, MessagesPageType } from "./dialogs-reducer";
import { ProfilePageType, profileReducer } from "./profile-reducer";
import { SideBarPageType, sidebarReducer } from './sidebar-reducer';


let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: sidebarReducer
})

let store = createStore(rootReducer);


export type AppRootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sidebarPage: SideBarPageType
}
// export type AppRootStateType = ReturnType<typeof reducers>


export default store;

// @ts-ignore
window.store = store;