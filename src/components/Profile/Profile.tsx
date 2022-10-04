import React from 'react';
import { ProfilePageType } from '../redux/state';
import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  profilePage: ProfilePageType
  addPost: (message: string) => void
  onChangeNewTextMessage: (text: string) => void
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div >
      <ProfileInfo />
      <MyPosts
        profilePage={props.profilePage}
        addPost={props.addPost}
        onChangeNewTextMessage={props.onChangeNewTextMessage} />
    </div>
  );
};

