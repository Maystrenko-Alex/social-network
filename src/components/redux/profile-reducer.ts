import { ActionTypes } from "./store";


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
// type ActionTypes = AddPostAT | UpdateNewTextPostAT;

let initialState = {
  newTextPost: '',
  posts: [
    { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
    { id: 2, message: 'Its my first post ;)', likesCount: 13 },
    { id: 3, message: 'yoo', likesCount: 4 },
  ]
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionTypes): ProfilePageType => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: new Date().getTime(),
        message: state.newTextPost,
        likesCount: 0
      });
      state.newTextPost = '';
      return state;
    case UPDATE_NEW_TEXT_POST:
      state.newTextPost = action.text;
      return state;
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