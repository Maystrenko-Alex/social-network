import React from 'react';
import { AnyAction } from 'redux';
import { AppRootStateType} from '../redux/redux-store';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  state: AppRootStateType
  dispatch: (action: AnyAction) => void
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer state={props.state} dispatch={props.dispatch}
      />
    </div>
  );
};

