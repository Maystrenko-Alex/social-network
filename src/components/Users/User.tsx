import React from 'react';
import { UserType } from '../../redux/users-reducer';
import style from './User.module.css';
import default_image from './../../assets/images/default_user_image.png';
import { NavLink } from 'react-router-dom';

type UserPropsType = {
  user: UserType
  arrToggle: Array<number>
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
}
const User = ({ user, arrToggle, unfollowUser, followUser }: UserPropsType) => {

  const unfollowHandler = () => unfollowUser(user.id);

  const followHandler = () => followUser(user.id);

  const buttonStatus = arrToggle.some(el => el === user.id);
  const currentImage = user.photos.large || user.photos.small || default_image;

  return (
    <div key={user.id} className={style.wrapperUser}>
      <span className={style.ava_btn}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={style.imageAva}
              style={{ width: '70px', height: '70px' }}
              src={currentImage}
              alt='img'
            />
          </NavLink>
        </div>
        <div className={style.userButton}>
          {
            user.followed
              ? <button disabled={buttonStatus} onClick={unfollowHandler}>Unfollow</button>
              : <button disabled={buttonStatus} onClick={followHandler}>Follow</button>
          }
        </div>
      </span>
      <span className={style.userInfo}>
        <span className={style.name_status}>
          <div className={style.userName}>{user.name}</div>
          <div className={style.userStatus}>{user.status || 'status is empty...'}</div>
        </span>
        <span className={style.locationUser}>
          <div>{'user.location.country'}</div>
          <div>{'user.location.city'}</div>
        </span>
      </span>
    </div>
  )
};

export default User;