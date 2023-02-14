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
}
let initialState = {
  id: null,
  email: null,
  login: null
}
export const authReducer = (state: AuthStateType = initialState, action: ActionsTypes): AuthStateType => {
  switch(action.type) {
    case SET_USER_DATA:
      return {...state, ...action.data}
    default:
      return state;
  }
}

export const setUserDataAC = (data:{id: number, email: string, login: string}): SetUserDataAT => {
  return {
    type: SET_USER_DATA, data
  }
}