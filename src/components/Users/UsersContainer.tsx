import s from './UsersContainer.module.css'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UserType } from '../redux/users-reducer';
import axios from 'axios';
import default_images_user_photo_small from './../../assets/images/default_images_user_photo_small.png';
import { useEffect } from 'react';

type UsersPropsType = {
  users: UserType[]
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
}

const Users = (props: UsersPropsType) => {
  console.log('render')
  const getUsers = () => {
    if (props.users.length === 0) {
        axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
          props.setUsers(response.data.items)
        })
      }
  }
  return (
    <div>
      <button onClick={getUsers}>GET USERS</button>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={s.wrapperUser}>
              <span className={s.ava_btn}>
                <div>
                  <img 
                    className={s.imageAva} 
                    style={{ width: '70px', height: '70px' }} 
                    src={user.photos.small != null ? user.photos.small : default_images_user_photo_small} 
                    alt='img' 
                  />
                </div>
                <div className={s.userButton}>
                  {/* {<button onClick={()=>props.followUser(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>} */}
                  {
                    user.followed
                      ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                      : <button onClick={() => props.followUser(user.id)}>Follow</button>
                  }
                </div>
              </span>
              <span className={s.userInfo}>
                <span>
                  <div className={s.userName}>{user.name}</div>
                  <div className={s.userStatus}>{user.status}</div>
                </span>
                <span className={s.locationUser}>
                  <div>{'user.location.country'}</div>
                  <div>{'user.location.city'}</div>
                </span>
              </span>
            </div>
          )
        })}
    </div>
  );
}
type MapStateToPropsType = {
  users: Array<UserType>
}
type MapDispatchToPropsType = {
  followUser: (id: number) => void
  unfollowUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {

  return {
    followUser: (id: number) => dispatch(followAC(id)),
    unfollowUser: (id: number) => dispatch(unfollowAC(id)),
    setUsers: (nextUsers: UserType[]) => dispatch(setUsersAC(nextUsers))
  }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);