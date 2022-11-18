import React from 'react';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div >
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  );
};

