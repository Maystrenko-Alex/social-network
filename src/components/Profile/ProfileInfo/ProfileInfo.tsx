import React from 'react';
import { CurrentProfileType } from '../../../redux/profile-reducer';
import style from './ProfileInfo.module.css';
import defaultAva from './../../../assets/images/default_user_image.png'
import Preloader from '../../Preloader/Preloader';

type ProfileInfoPropsType = {
  currentProfile: CurrentProfileType
}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  if (!props.currentProfile) {
    return <Preloader />
  }
  return (
    <div>
      <div className={style.content_images}>
        <img alt='' src='https://st.depositphotos.com/1927453/2592/i/600/depositphotos_25922381-stock-photo-sunset-over-green-wheat-field.jpg'></img>
      </div>
      <div className={style.descriptionBlock}>
        <img src={props.currentProfile.photos.large} alt={'userAva'} />
        {props.currentProfile.fullName}
        
      </div>
    </div>
  );
};

export default ProfileInfo;