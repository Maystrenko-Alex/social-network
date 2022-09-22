import React from 'react';
import s from './ProfileInfo.module.css';

type ProfileInfoPropsType = {

}

const ProfileInfo = (props: ProfileInfoPropsType) => {
  return (
    <div>
      <div className={s.content_images}>
        <img alt='' src='https://st.depositphotos.com/1927453/2592/i/600/depositphotos_25922381-stock-photo-sunset-over-green-wheat-field.jpg'></img>
      </div>
      <div className={s.descriptionBlock}>
        ava+description
      </div>
    </div>
  );
};

export default ProfileInfo;