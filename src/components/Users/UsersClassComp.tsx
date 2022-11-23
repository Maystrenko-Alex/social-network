import axios from "axios";
import { UserType } from "../redux/users-reducer";
import s from './UsersContainer.module.css';
import default_images_user_photo_small from './../../assets/images/default_images_user_photo_small.png';
import React from "react";


type UserPropsType = {
  users: UserType[]
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
}

class Users extends React.Component<UserPropsType> {
  // constructor(props:UserPropsType) {
  //   super(props);
  //   if (this.props.users.length === 0) {
  //     axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
  //       this.props.setUsers(response.data.items)
  //     })
  //   }  
  // }
componentDidMount(): void {
  if (this.props.users.length === 0) {
  axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
        this.props.setUsers(response.data.items)
      })
    }
}
  render() {
    return (
      <div>
        <div className={s.pagesRow}>
          <span>1</span>
          <span className={s.selectedPages}>2</span>
          <span>3</span>
          <span>4</span>
          <span>5</span>
        </div>
        {/* <button onClick={this.getUsers}>GET USERS</button> */}
        {
          this.props.users.map(user => {
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
                        ? <button onClick={() => this.props.unfollowUser(user.id)}>Unfollow</button>
                        : <button onClick={() => this.props.followUser(user.id)}>Follow</button>
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
    )
  }
}

export default Users;