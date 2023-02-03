import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, SetTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import style from './UsersContainer.module.css'; 
import axios from "axios";
import User from "./User";
import Users from './Users';

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

class UsersContainer extends React.Component<UserPropsType> {
  
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
    return (
      <Users 
        currentPage={this.props.currentPage}
        pageSize={this.props.pageSize}
        totalUsersCount={this.props.totalUsersCount}
        followUser={this.props.followUser}
        unfollowUser={this.props.unfollowUser}
        onNextPage={this.onNextPage}
        onPrevPage={this.onPrevPage}
        users={this.props.users}  
      />
    )
  }
}

type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
}
type MapDispatchToPropsType = {
  followUser: (id: number) => void
  unfollowUser: (id: number) => void
  setCurrentPage: (num: number) => void
  setUsers: (nextUsers: UserType[]) => void
  setTotlaUsersCount: (num: number) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    followUser: (id: number) => dispatch(followAC(id)),
    unfollowUser: (id: number) => dispatch(unfollowAC(id)),
    setCurrentPage: (num: number) => dispatch(setCurrentPageAC(num)),
    setUsers: (nextUsers: UserType[]) => dispatch(setUsersAC(nextUsers)),
    setTotlaUsersCount: (num: number) => dispatch(SetTotalUsersCountAC(num))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);