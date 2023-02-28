
import { applyMiddleware, combineReducers, createStore } from "redux";
import { authReducer, AuthStateType } from "./auth-reducer";
import { dialogsReducer, MessagesPageType } from "./dialogs-reducer";
import { ProfilePageType, profileReducer } from "./profile-reducer";
import { SideBarPageType, sidebarReducer } from './sidebar-reducer';
import {  usersReducer, UsersType } from "./users-reducer";
import thunkMiddleware  from "redux-thunk";
import {reducer as formReducer} from 'redux-form';


let rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: dialogsReducer,
  sidebarPage: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer
})

let store = createStore(rootReducer, applyMiddleware(thunkMiddleware));


export type AppRootStateType = {
  profilePage: ProfilePageType
  messagesPage: MessagesPageType
  sidebarPage: SideBarPageType
  usersPage: UsersType
  auth: AuthStateType
}
// export type AppRootStateType = ReturnType<typeof reducers>


export default store;

// @ts-ignore
window.store = store;