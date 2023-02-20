import { Dispatch } from "redux";
import { authAPI } from "../api/api";

export const SET_USER_DATA = 'SET-USER-DATA';

type SetUserDataAT = {
  type: 'SET-USER-DATA'
  data: {
    id: number
    email: string
    login: string
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
      return {...state, ...action.data, isAuth: true}
    default:
      return state;
  }
}

export const setUserDataAC = (data:{id: number, email: string, login: string}): SetUserDataAT => {
  return {
    type: SET_USER_DATA, data
  }
}

export const authMe = () => {
  return (dispatch:Dispatch<ActionsTypes>) => {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
          dispatch(setUserDataAC(data.data))
        }
      })
  }
}
