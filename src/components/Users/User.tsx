import React from 'react';
import { UserType } from '../../redux/users-reducer';
import style from './User.module.css';
import default_image from './../../assets/images/default_user_image.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';

type UserPropsType = {
  user: UserType
  arrToggle: Array<number>
  unfollowUser: (id: number) => void
  followUser: (id: number)=> void
  toggleIsEnabled: (isToggle: boolean, userID: number) => void
}
const User = ({user,arrToggle, unfollowUser, followUser, toggleIsEnabled}: UserPropsType) => {

  const unfollowHandler = ()=> {
    toggleIsEnabled(true, user.id)
    userAPI.unfollow(user.id)
    .then(response => {
      if (response.data.resultCode === 0) {
        unfollowUser(user.id)
      }
      toggleIsEnabled(false, user.id)
    })
  }

  const followHandler = ()=> {
    toggleIsEnabled(true, user.id)
    userAPI.follow(user.id)
    .then(response => {
      if (response.data.resultCode === 0) {
        followUser(user.id)
      }
      toggleIsEnabled(false, user.id)
    })
  }


  return (
    <div key={user.id} className={style.wrapperUser}>
      <span className={style.ava_btn}>
        <div>
          <NavLink to={`/profile/${user.id}`}>
            <img
              className={style.imageAva}
              style={{ width: '70px', height: '70px' }}
              src={user.photos.large || user.photos.small  || default_image}
              alt='img'
            />
          </NavLink>
        </div>
        <div className={style.userButton}>
          {
            user.followed
              ? <button disabled={arrToggle.some(el => el === user.id)} onClick={unfollowHandler}>Unfollow</button>
              : <button disabled={arrToggle.some(el => el === user.id)} onClick={followHandler}>Follow</button>
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