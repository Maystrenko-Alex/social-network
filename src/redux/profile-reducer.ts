import { Dispatch } from "redux";
import { profileAPI, userAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';
const SET_USER_PROFILE = 'SET-USER-PROFILE';
const SET_STATUS = 'SET-STATUS';
const UPDATE_STATUS = 'UPDATE-STATUS';

type UpdateStatusAT = {
  type: 'UPDATE-STATUS'
  status: string
}
type SetStatusAT = {
  type: 'SET-STATUS'
  status: string

}
type SetUserProfileAT = {
  type: 'SET-USER-PROFILE',
  currentProfile:  CurrentProfileType
}
type AddPostAT = {
  type: 'ADD-POST'
}
export type UpdateNewTextPostAT = {
  type: "UPDATE-NEW-TEXT-POST"
  text: string
}

export type ActionsTypes = AddPostAT | UpdateNewTextPostAT | SetUserProfileAT | SetStatusAT | UpdateStatusAT;

export type CurrentProfileType = {
  abouteMe: string
  contacts: ContactsType
  fullName: string
  lookingForAJob: boolean
  lookingForAJobDescription: string
  photos: PhotosType
  userId: number
}
type PhotosType = {
  small: string
  large: string
}
type ContactsType = {
  facebook:string
  github:string
  instagram: string
  mainLink: string
  twitter: string
  vk: string
  website: string
  youtube: string
}
type PostType = {
  id: number
  message: string
  likesCount: number
}
export type ProfilePageType = {
  newTextPost: string
  posts: Array<PostType>
  currentProfile: CurrentProfileType
  status: string
}

let initialState : ProfilePageType= {
  newTextPost: '',
  posts: [
    { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
    { id: 2, message: 'Its my first post ;)', likesCount: 13 },
    { id: 3, message: 'yoo', likesCount: 4 },
  ],
  currentProfile: {} as CurrentProfileType,
  status: ''
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newTextPost: state.newTextPost,
        posts: [...state.posts, { id: new Date().getTime(), message: state.newTextPost, likesCount: 0 }]
      };
    case UPDATE_NEW_TEXT_POST:
      return { ...state, newTextPost: action.text };
    case SET_USER_PROFILE:
      return {...state, currentProfile: action.currentProfile};
    case SET_STATUS:
      return {...state, status: action.status};
    case UPDATE_STATUS:
      return {...state, status: action.status}
    default:
      return state;
  }
}

export const addPostAC = (): AddPostAT => ({ type: ADD_POST });
export const updateNewTextPostAC = (text: string): UpdateNewTextPostAT => ({ type: UPDATE_NEW_TEXT_POST, text});
export const setUserProfileAC = (currentProfile: CurrentProfileType): SetUserProfileAT => ({ type: SET_USER_PROFILE, currentProfile});
export const setStatus = (status: string): SetStatusAT => ({type: SET_STATUS, status})

export const getCurrentUser = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    userAPI.getCurrentProfile(userId)
      .then(response => dispatch(setUserProfileAC(response.data)))
  }
}

export const getUserStatus = (userId: number) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.getStatus(userId).then(response => dispatch(setStatus(response.data)))
  }
}

export const updateStatus = (status: string) => {
  return (dispatch: Dispatch<ActionsTypes>) => {
    profileAPI.updateStatus(status).then(response => {
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
      }
    })
  }
}