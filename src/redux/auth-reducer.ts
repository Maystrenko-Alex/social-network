import {  Dispatch } from "redux";
import { authAPI } from "../api/api";

export const SET_USER_DATA = 'SET-USER-DATA';
export const LOGIN = 'LOGIN';

type SetUserDataAT = {
  type: 'SET-USER-DATA'
  payload: {
    id: number | null
    email: string | null
    login: string | null
    isAuth: boolean
  }
}

type ActionsTypes = SetUserDataAT
export type AuthStateType = {
  id: number | null
  email: string | null
  login: string | null
  isAuth: boolean
}
let initialState = {
  id: null,
  email: null,
  login: null,
  isAuth: false
}
export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
  switch(action.type) {
    case SET_USER_DATA:
      return {...state, ...action.payload}
    default:
      return state;
  }
}

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean): SetUserDataAT => {
  return {
    type: SET_USER_DATA, payload: {id, login, email, isAuth}
  }
}

export const authMe = () => {
  return (dispatch:Dispatch<ActionsTypes>) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
          let {id, login, email} = data.data
          dispatch(setUserDataAC(id, login, email, true))
        }
      })
  }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
  return (dispatch: Dispatch<any>) => {
    authAPI.login(email, password, rememberMe).then(response => {
      // console.log(response.data)
      if (response.data.resultCode === 0) {
        dispatch(authMe());
      } else {
        console.log(response.data.messages[0])
      }
    })
  }
}

export const logout = () => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    authAPI.logout().then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
      }
    })
  }
}