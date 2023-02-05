import React from 'react';
import { connect } from 'react-redux';
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
  unfollowAC: (id: number) => void
  followAC: (id: number) => void
  setUsersAC: (nextUsers: UserType[]) => void
  setCurrentPageAC: (num: number) => void
  setTotalUsersCountAC: (num: number) => void
  setIsFetchingAC: (isFetching: boolean) => void
}

class UsersContainer extends React.Component<UserPropsType> {

  getUsers(currentPage: number, pageSize: number) {
    this.props.setIsFetchingAC(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        this.props.setUsersAC(response.data.items)
        this.props.setTotalUsersCountAC(response.data.totalCount)
      })
      .then(() => this.props.setIsFetchingAC(false))
  }

  onPrevPage = () => {
    if (this.props.currentPage > 1) {
      this.props.setCurrentPageAC(this.props.currentPage - 1);
      this.getUsers(this.props.currentPage - 1, this.props.pageSize)
    }
  }

  onNextPage = () => {
    if (this.props.currentPage < Math.ceil(this.props.totalUsersCount / this.props.pageSize)) {
      this.props.setCurrentPageAC(this.props.currentPage + 1);
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
              followUser={this.props.followAC}
              unfollowUser={this.props.unfollowAC}
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

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching
  }
}

export default connect(mapStateToProps, 
  { followAC, unfollowAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC, setIsFetchingAC })(UsersContainer);