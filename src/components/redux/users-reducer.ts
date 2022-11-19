import { AllActionTypes } from "./redux-store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS'


export type FollowAT = {
  type: 'FOLLOW'
  userID: number
}
export type UnfollowAT = {
  type: 'UNFOLLOW'
  userID: number
}
export type SetUsersAT = {
  type: 'SET-USERS'
  users: Array<UserType>
}
type LocationUserType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  photoUrl: string
  followed: boolean
  fullName: string
  status: string
  location: LocationUserType
}
export type UsersType = {
  users: Array<UserType>
}
let initialState: UsersType = {
  users: [
    // { id: 1, photoUrl: 'https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg', followed: false, fullName: 'Dmitry', status: 'I am a Boss', location: { city: 'Minsk', country: 'Belarus' } },
    // { id: 2, photoUrl: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg', followed: false, fullName: 'Alex', status: ':)', location: { city: 'Moscow', country: 'Russia' } },
    // { id: 3, photoUrl: 'https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1', followed: true, fullName: 'Sveta', status: '', location: { city: 'Kiev', country: 'Ukrian' } },
    // { id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/183/183753.png', followed: false, fullName: 'Evgen', status: '------> !', location: { city: 'Berlin', country: 'Germany' } }
  ]
}
export const usersReducer = (state: UsersType = initialState, action: AllActionTypes): UsersType => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map(u => u.id !== action.userID
          ? u
          : { id: u.id, photoUrl: u.photoUrl, followed: true, fullName: u.fullName, status: u.status, location: { city: u.location.city, country: u.location.country } }
        )
      }
    // : { ...u, followed: true })
    case UNFOLLOW:
      return { ...state, users: state.users.map(u => u.id !== action.userID ? u : ({ ...u, followed: false })) }
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] }
    default:
      return state;
  }
}

export const followAC = (id: number): FollowAT => ({ type: FOLLOW, userID: id })
export const unfollowAC = (id: number): UnfollowAT => ({ type: UNFOLLOW, userID: id })
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({ type: SET_USERS, users })