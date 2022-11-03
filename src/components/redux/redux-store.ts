
import { combineReducers, createStore } from "redux";
import { dialogsReducer, MessagesPageType } from "./dialogs-reducer";
import { ProfilePageType, profileReducer } from "./profile-reducer";
import { SideBarPageType, sideBarReducer } from './sidebar-reducer';


let reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sideBarPage: sideBarReducer
})

let store = createStore(reducers);

export type AppRootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sideBarPage: SideBarPageType
}
// export type AppRootStateType = ReturnType<typeof reducers>


export default store;

// @ts-ignore
window.store = store;