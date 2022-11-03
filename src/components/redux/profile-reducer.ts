const ADD_POST = 'ADD-POST';
const UPDATE_NEW_TEXT_POST = 'UPDATE-NEW-TEXT-POST';

type PostType = {
  id: number
  message: string
  likesCount: number
}
type AddPostActionType = {
  type: 'ADD-POST'
}
type ChangeNewTextActionType = {
  type: "UPDATE-NEW-TEXT-POST"
  text: string
}
export type ProfilePageType = {
  newTextMessage: string
  posts: Array<PostType>
}
export type ActionsTypes = AddPostActionType | ChangeNewTextActionType;

let initialState = {
  newTextMessage: '',
  posts: [
    { id: 1, message: 'Hello! How are youuuu?', likesCount: 1 },
    { id: 2, message: 'Its my first post ;)', likesCount: 13 },
    { id: 3, message: 'yoo', likesCount: 4 },
  ]
};

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
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
 
export const addpostActionCreater = (): ActionsTypes => ({ type: ADD_POST });
export const changeValueInputHandlerActionCreater = (text: string): ActionsTypes => {
  return {
    type: UPDATE_NEW_TEXT_POST,
    text: text
  }
}