import { ProfilePageType, ActionsTypes } from './state';
const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {
  switch (action.type) {
    case ADD_POST:
      state.posts.push({
        id: Number(new Date().getTime()),
        message: state.newTextMessage,
        likesCount: 0
      });
      state.newTextMessage = '';
      return state;
    case UPDATE_NEW_TEXT_POST:
      state.newTextMessage = action.text;
      return state;
    default:
      return state;
  }
}