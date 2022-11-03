import React from 'react';
import { ActionsTypes, ProfilePageType } from '../redux/profile-reducer';
import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div >
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        dispatch={props.dispatch}
      />
    </div>
  );
};

