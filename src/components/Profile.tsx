import React from 'react';
import s from './Profile.module.css';

export const Profile = () => {
  return (
    <div className={s.content}>
          <div className={s.content_images}>
            <img alt='' src='https://st.depositphotos.com/1927453/2592/i/600/depositphotos_25922381-stock-photo-sunset-over-green-wheat-field.jpg'></img>
          </div>
          <div>
            ava+description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div className={s.posts}>
              <div className={s.item}>
                Post 1
              </div>
              <div className={s.item}>
                Post 2ffffffffffffffffffff
              </div>
              <div className={s.item}>
                Post 3
              </div>
            </div>
          </div>
        </div>
  );
};

export default Profile;