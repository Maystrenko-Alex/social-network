import { Dispatch } from "redux";
import { userAPI } from "../api/api";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
export const SET_IS_FETCHING = 'SET-IS-FETCHING';
export const TOGGLE_IS_ENABLED = 'TOGGLE-IS-ENABLED'

type ToggleIsEnabledAT = {
  type: 'TOGGLE-IS-ENABLED'
  isToggle: boolean
  userID: number
}
type SetIsFetchingAT = {
  type: 'SET-IS-FETCHING',
  isFetching: boolean
}

type FollowAT = {
  type: 'FOLLOW'
  userID: number
}
type UnfollowAT = {
  type: 'UNFOLLOW'
  userID: number
}
type SetUsersAT = {
  type: 'SET-USERS'
  users: Array<UserType>
}
type SetTotalUsersCountAT = {
  type: 'SET-TOTAL-USERS-COUNT'
  totalCount: number
}
type SetCurrentPageAT = {
  type: 'SET-CURRENT-PAGE'
  pageNumber: number
}

type ActionsTypes = SetCurrentPageAT | SetTotalUsersCountAT | SetUsersAT | UnfollowAT | FollowAT |
  SetIsFetchingAT | ToggleIsEnabledAT;
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
  isFetching: boolean
  users: Array<UserType>,
  arrToggle: Array<number>
}

let initialState: UsersType = {
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false,
  users: [],
  arrToggle: []
}

export const usersReducer = (state: UsersType = initialState, action: ActionsTypes): UsersType => {
  switch (action.type) {
    case FOLLOW:
      return { ...state, users: state.users.map(u => u.id !== action.userID ? u : { ...u, followed: true }) };
    case UNFOLLOW:
      return { ...state, users: state.users.map(u => u.id !== action.userID ? u : ({ ...u, followed: false })) };
    case SET_USERS:
      return { ...state, users: action.users };
    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.pageNumber };
    case SET_TOTAL_USERS_COUNT:
      return { ...state, totalUsersCount: action.totalCount };
    case SET_IS_FETCHING:
      return { ...state, isFetching: action.isFetching };
    case TOGGLE_IS_ENABLED:
      return {
        ...state,
        arrToggle: action.isToggle
          ? [...state.arrToggle, action.userID]
          : state.arrToggle.filter(el => el !== action.userID)
      }
    default:
      return state;
  }
}

export const follow = (id: number): FollowAT => ({ type: FOLLOW, userID: id });
export const unfollow = (id: number): UnfollowAT => ({ type: UNFOLLOW, userID: id });
export const setUsers = (users: Array<UserType>): SetUsersAT => ({ type: SET_USERS, users });
export const setCurrentPage = (pageNumber: number): SetCurrentPageAT => ({ type: SET_CURRENT_PAGE, pageNumber });
export const setTotalUsersCount = (totalCount: number): SetTotalUsersCountAT => ({ type: SET_TOTAL_USERS_COUNT, totalCount });
export const setIsFetching = (isFetching: boolean): SetIsFetchingAT => ({ type: SET_IS_FETCHING, isFetching });
export const toggleIsEnabled = (isToggle: boolean, userID: number): ToggleIsEnabledAT => ({ type: TOGGLE_IS_ENABLED, isToggle, userID });

export const getUsers = (currentPage: number, pageSize: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(setIsFetching(true));
    userAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
        dispatch(setIsFetching(false))
      })
  }
}

export const followUser = (userID: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsEnabled(true, userID))
    userAPI.follow(userID)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(follow(userID))
        }
        dispatch(toggleIsEnabled(false, userID))
      })
  }
}

export const unfollowUser = (userID: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    dispatch(toggleIsEnabled(true, userID))
    userAPI.unfollow(userID)
      .then(response => {
        if (response.data.resultCode === 0) {
          dispatch(unfollow(userID))
        }
        dispatch(toggleIsEnabled(false, userID))
      })
  }
}