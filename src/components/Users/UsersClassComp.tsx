import axios from "axios";
import { UserType } from "../../redux/users-reducer";
import style from './UsersContainer.module.css'; import React from "react";
import { v1 } from "uuid";
import User from "./User";


type UserPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
  setCurrentPage: (num: number) => void
  setTotlaUsersCount: (num: number) => void
}

class Users extends React.Component<UserPropsType> {
  
  getUsers(currentPage: number, pageSize: number) {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`).then(response => {
      this.props.setUsers(response.data.items)
    })
  }

  onPrevPage = () => {
    if (this.props.currentPage > 1) {
      this.props.setCurrentPage(this.props.currentPage - 1);
      this.getUsers(this.props.currentPage - 1, this.props.pageSize)
    }
  }
  onNextPage = () => {
    if (this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
      this.props.setCurrentPage(this.props.currentPage + 1);
      this.getUsers(this.props.currentPage + 1, this.props.pageSize)
    }
  }

  componentDidMount(): void {
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotlaUsersCount(response.data.totalCount)
      })
  }
  render() {

    let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
    let pages = []
    let usersList = this.props.users.map(user => {
      return <User key={user.id} user={user} followUser={this.props.followUser} unfollowUser={this.props.unfollowUser} />
    })

    return (
      <div className={style.wrapper}>
        <div className={style.usersContainer}>
          {usersList}
        </div>
        <div className={style.pages}>
          <button onClick={this.onPrevPage}>PrevPage</button>
          {`${this.props.currentPage} page from ${pagesCount}`}
          <button onClick={this.onNextPage}>NextPage</button>
        </div>
      </div>
    )
  }
}

export default Users;