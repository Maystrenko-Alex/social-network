import React from 'react';
import { UserType } from '../../redux/users-reducer';
import style from './User.module.css';
import default_image from './../../assets/images/default_user_image.png';

type UserPropsType = {
  user: UserType
  unfollowUser: (id: number) => void
  followUser: (id: number)=> void
}
const User = ({user, unfollowUser, followUser}: UserPropsType) => {

  return (
    <div key={user.id} className={style.wrapperUser}>
      <span className={style.ava_btn}>
        <div>
          <img
            className={style.imageAva}
            style={{ width: '70px', height: '70px' }}
            src={user.photos.large || user.photos.small  || default_image}
            alt='img'
          />
        </div>
        <div className={style.userButton}>
          {/* {<button onClick={()=>props.followUser(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>} */}
          {
            user.followed
              ? <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
              : <button onClick={() => followUser(user.id)}>Follow</button>
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