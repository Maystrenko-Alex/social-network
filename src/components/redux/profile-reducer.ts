import { AllActionTypes } from "./redux-store";



const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

export type PostType = {
  id: number
  message: string
  likesCount: number
}
export type AddPostAT = {
  type: 'ADD-POST'
}
export type UpdateNewTextPostAT = {
  type: "UPDATE-NEW-TEXT-POST"
  text: string
}
export type ProfilePageType = {
  newTextPost: string
  posts: Array<PostType>
}
// export type ProfileActionTypes = AddPostAT | UpdateNewTextPostAT;

let initialState = {
  newTextPost: '',
  posts: [
    { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
    { id: 2, message: 'Its my first post ;)', likesCount: 13 },
    { id: 3, message: 'yoo', likesCount: 4 },
  ]
};

export const profileReducer = (state: ProfilePageType = initialState, action: AllActionTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        newTextPost: state.newTextPost,
        posts: [...state.posts, { id: new Date().getTime(), message: state.newTextPost, likesCount: 0 }]
      };
    case UPDATE_NEW_TEXT_POST:
      return { ...state, newTextPost: action.text };
    default:
      return state;
  }
}

export const addPostAC = (): AddPostAT => ({ type: ADD_POST });
export const updateNewTextPostAC = (text: string): UpdateNewTextPostAT => {
  return {
    type: UPDATE_NEW_TEXT_POST,
    text: text
  }
}