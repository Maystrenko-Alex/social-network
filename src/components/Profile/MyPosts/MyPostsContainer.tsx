import React from 'react';
import { AnyAction } from 'redux';
import {addPostAC, updateNewTextPostAC } from '../../redux/profile-reducer';
import {AppRootStateType } from '../../redux/redux-store';
import MyPosts from './MyPosts';

export type MyPostsContainerPropsType = {
  state: AppRootStateType
  dispatch: (action: AnyAction) => void
}
export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

  const addPost = () =>  props.dispatch(addPostAC())
  const changeValueInput = (value: string) => props.dispatch(updateNewTextPostAC(value))
  
  return <MyPosts 
            posts={props.state.profilePage.posts}
            newTextMessage={props.state.profilePage.newTextPost}
            addPost={addPost}
            changeValueInput={changeValueInput}
          />

}