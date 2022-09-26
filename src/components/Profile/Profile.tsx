import React from 'react';
import { PostsDataType } from '../..';
import MyPosts from './MyPosts/MyPosts';
// import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  postsData: PostsDataType
}

export const Profile = (props: ProfilePropsType) => {
  return (
    <div >
      <ProfileInfo />
      <MyPosts postsData={props.postsData}/>
    </div>
  );
};

