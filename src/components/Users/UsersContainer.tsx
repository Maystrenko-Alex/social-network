import React from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, unfollowAC, UserType } from '../../redux/users-reducer';
import axios from "axios";
import Users from './Users';
import Preloader from '../Preloader/Preloader';

type UserPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
  setCurrentPage: (num: number) => void
  setTotlaUsersCount: (num: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UserPropsType> {

  getUsers(currentPage: number, pageSize: number) {
    this.props.toggleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setUsers(response.data.items)
        this.props.setTotlaUsersCount(response.data.totalCount)
      })
      .then(() => this.props.toggleIsFetching(false))
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
    this.getUsers(this.props.currentPage, this.props.pageSize)
  }

  render() {

    return (
      <>
        {
          this.props.isFetching
            ? <Preloader />
            : <Users
              currentPage={this.props.currentPage}
              pageSize={this.props.pageSize}
              totalUsersCount={this.props.totalUsersCount}
              followUser={this.props.followUser}
              unfollowUser={this.props.unfollowUser}
              onNextPage={this.onNextPage}
              onPrevPage={this.onPrevPage}
              users={this.props.users}
            />
        }
      </>
    )
  }
}

type MapStateToPropsType = {
  users: Array<UserType>
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
}
type MapDispatchToPropsType = {
  followUser: (id: number) => void
  unfollowUser: (id: number) => void
  setCurrentPage: (num: number) => void
  setUsers: (nextUsers: UserType[]) => void
  setTotlaUsersCount: (num: number) => void
  toggleIsFetching: (isFetching: boolean) => void
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  }
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
  return {
    followUser: (id: number) => dispatch(followAC(id)),
    unfollowUser: (id: number) => dispatch(unfollowAC(id)),
    setCurrentPage: (num: number) => dispatch(setCurrentPageAC(num)),
    setUsers: (nextUsers: UserType[]) => dispatch(setUsersAC(nextUsers)),
    setTotlaUsersCount: (num: number) => dispatch(setTotalUsersCountAC(num)),
    toggleIsFetching: (isFetching: boolean) => dispatch(setIsFetchingAC(isFetching))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);