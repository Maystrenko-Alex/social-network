export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
export const SET_IS_FETCHING = 'SET-IS-FETCHING';


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

type ActionsTypes = SetCurrentPageAT | SetTotalUsersCountAT | SetUsersAT | UnfollowAT | FollowAT | SetIsFetchingAT;
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
  users: Array<UserType>
}

let initialState: UsersType = {
  pageSize: 12,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  users: []
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
      return {...state, isFetching: action.isFetching};
    default:
      return state;
  }
}

export const followAC = (id: number): FollowAT => ({ type: FOLLOW, userID: id })
export const unfollowAC = (id: number): UnfollowAT => ({ type: UNFOLLOW, userID: id })
export const setUsersAC = (users: Array<UserType>): SetUsersAT => ({ type: SET_USERS, users })
export const setCurrentPageAC = (pageNumber: number): SetCurrentPageAT => ({ type: SET_CURRENT_PAGE, pageNumber })
export const setTotalUsersCountAC = (totalCount: number): SetTotalUsersCountAT => ({ type: SET_TOTAL_USERS_COUNT, totalCount })
export const setIsFetchingAC = (isFetching: boolean): SetIsFetchingAT => ({ type: SET_IS_FETCHING, isFetching })