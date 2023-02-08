import React from 'react';
import { Params } from 'react-router-dom';
import { CurrentProfileType } from '../../redux/profile-reducer';
import Preloader from '../Preloader/Preloader';
import { MyPostsContainer } from './MyPosts/MyPostsContainer';
import { LocationType } from './ProfileContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

export type ProfilePropsType = {
  params: Params<string>
  location: LocationType
  currentProfile: CurrentProfileType
}

export const Profile = (props: ProfilePropsType) => {

  return (
    <div >
      {props.currentProfile ? <ProfileInfo currentProfile={props.currentProfile}/> : <Preloader />}
      <MyPostsContainer />
    </div>
  );
};

