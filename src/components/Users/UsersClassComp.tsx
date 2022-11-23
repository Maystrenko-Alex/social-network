import axios from "axios";
import { UserType } from "../redux/users-reducer";
import s from './UsersContainer.module.css';
import default_images_user_photo_small from './../../assets/images/default_images_user_photo_small.png';
import React from "react";


type UserPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
  setCurrentPage: (num: number) => void
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
    // if (this.props.users.length === 0) {
      axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
        this.props.setUsers(response.data.totalCount)
      })
    // }
  }

  onPageChanged = (pageNumber: number) => {
    this.props.setCurrentPage(pageNumber);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
        this.props.setUsers(response.data.items)
      })
  }

  render() {
    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
      pages.push(i)
    }
    let pagesItem = pages.map(p => {
      return (
        <span className={this.props.currentPage === p ? s.selectedPages : ''} onClick={()=>this.onPageChanged(p)}>{p}</span>
      )
    })
    return (
      <div className={s.wrapper}>
        <div className={s.pagesRow}>
          {pagesItem}
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