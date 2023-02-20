import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { followUser, getUsers, setCurrentPage, unfollowUser, UserType } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { Navigate } from 'react-router-dom';

type UserPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isAuth: boolean
  isFetching: boolean
  arrToggle: Array<number>
  setCurrentPage: (num: number) => void
  getUsers: (currentPage: number, pageSixe: number) => void
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void

}

class UsersContainer extends React.Component<UserPropsType> {

  onPrevPage = () => {
    if (this.props.currentPage > 1) {
      this.props.setCurrentPage(this.props.currentPage - 1)
      this.props.getUsers(this.props.currentPage - 1, this.props.pageSize)
    }
  }

  onNextPage = () => {
    if (this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
      this.props.setCurrentPage(this.props.currentPage + 1);
      this.props.getUsers(this.props.currentPage + 1, this.props.pageSize)
    }
  }

  componentDidMount(): void {
    this.props.getUsers(this.props.currentPage, this.props.pageSize)
  }

  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />
    return (
      <>
        {
          this.props.isFetching
            ? <Preloader />
            : <Users
              arrToggle={this.props.arrToggle}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              totalUsersCount={this.props.totalUsersCount}
              users={this.props.users}
              onPrevPage={this.onPrevPage}
              onNextPage={this.onNextPage}
              followUser={this.props.followUser}
              unfollowUser={this.props.unfollowUser}
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
  isAuth: boolean
  isFetching: boolean
  arrToggle: Array<number>
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isAuth: state.auth.isAuth,
    isFetching: state.usersPage.isFetching,
    arrToggle: state.usersPage.arrToggle
  }
}

export default connect(mapStateToProps, { setCurrentPage, getUsers, followUser, unfollowUser })(UsersContainer);