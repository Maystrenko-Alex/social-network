import React from 'react';
import { UserType } from '../../redux/users-reducer';
import style from './User.module.css';
import default_image from './../../assets/images/default_user_image.png';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type UserPropsType = {
  user: UserType
  unfollowUser: (id: number) => void
  followUser: (id: number)=> void
}
const User = ({user, unfollowUser, followUser}: UserPropsType) => {

  const unfollowHandler = ()=> {
    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, {withCredentials: true})
    .then(response => {
      if (response.data.resultCode === 0) {
        unfollowUser(user.id)
      }
    })
  }

  const followHandler = ()=> {
    axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${user.id}`, null, {withCredentials: true})
    .then(response => {
      if (response.data.resultCode === 0) {
        followUser(user.id)
      }
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
          {/* {<button onClick={()=>props.followUser(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>} */}
          {
            user.followed
              ? <button onClick={unfollowHandler}>Unfollow</button>
              : <button onClick={followHandler}>Follow</button>
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