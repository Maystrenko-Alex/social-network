import React from 'react';
import { AnyAction } from 'redux';
import {addpostActionCreater, changeValueInputHandlerActionCreater } from '../../redux/profile-reducer';
import {AppRootStateType } from '../../redux/redux-store';
import MyPosts from './MyPosts';

export type MyPostsContainerPropsType = {
  state: AppRootStateType
  dispatch: (action: AnyAction) => void
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

  const addPost = () =>  props.dispatch(addpostActionCreater())
  const changeValueInput = (value: string) => props.dispatch(changeValueInputHandlerActionCreater(value))
  
  return <MyPosts 
            posts={props.state.profilePage.posts}
            newTextMessage={props.state.profilePage.newTextMessage}
            addPost={addPost}
            changeValueInput={changeValueInput}
          />

}