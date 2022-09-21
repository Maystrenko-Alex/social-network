import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';

export const Profile = () => {
  return (
    <div >
      <div className={s.content_images}>
        <img alt='' src='https://st.depositphotos.com/1927453/2592/i/600/depositphotos_25922381-stock-photo-sunset-over-green-wheat-field.jpg'></img>
      </div>
      <div>
        ava+description
      </div>
      <MyPosts />
    </div>
  );
};

export default Profile;