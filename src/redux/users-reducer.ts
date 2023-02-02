import { AllActionTypes } from "./redux-store";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';


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
export type SetTotalUsersCountAT = {
  type: 'SET-TOTAL-USERS-COUNT'
  totalCount: number
}
export type SetCurrentPageAT = {
  type: 'SET-CURRENT-PAGE'
  pageNumber: number
}
type UserFotoType = {
  small: string
  large: string
}
type LocationUserType = {
  city: string
  country: string
}
export type UserType = {
  id: number
  photos: UserFotoType
  followed: boolean
  name: string
  status: string
  location: LocationUserType
}
export type UsersType = {
  pageSize: number
  totalUsersCount: number
  currentPage: number
  users: Array<UserType>
}

let initialState: UsersType = {
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 2,
  users: []
}

export const usersReducer = (state: UsersType = initialState, action: AllActionTypes): UsersType => {
  switch (action.type) {
    case FOLLOW:
      return { ...state, users: state.users.map(u => u.id !== action.userID ? u : { ...u, followed: true }) }
    case UNFOLLOW:
      return { ...state, users: state.users.map(u => u.id !== action.userID ? u : ({ ...u, followed: false })) }
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber }
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount }
    default:
      return state;
  }
}

export const followAC = (id: number): FollowAT => ({ type: FOLLOW, userID: id })
export const unfollowAC = (id: number): UnfollowAT => ({ type: UNFOLLOW, userID: id })
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({ type: SET_USERS, users })
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageAT => ({ type: SET_CURRENT_PAGE, pageNumber })
export const SetTotalUsersCountAC = (totalCount: number): SetTotalUsersCountAT => ({ type: SET_TOTAL_USERS_COUNT, totalCount })