import React from 'react';
import { connect } from 'react-redux';
import { AppRootStateType } from '../../redux/redux-store';
import { followAC, setCurrentPageAC, setIsFetchingAC, setTotalUsersCountAC, setUsersAC, toggleIsEnabled, unfollowAC, UserType } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Preloader/Preloader';
import { userAPI } from '../../api/api';

type UserPropsType = {
  users: UserType[]
  pageSize: number
  totalUsersCount: number
  currentPage: number
  isFetching: boolean
  arrToggle: Array<number>
  unfollowAC: (id: number) => void
  followAC: (id: number) => void
  setUsersAC: (nextUsers: UserType[]) => void
  setCurrentPageAC: (num: number) => void
  setTotalUsersCountAC: (num: number) => void
  setIsFetchingAC: (isFetching: boolean) => void
  toggleIsEnabled: (isToggle: boolean, userID: number) => void
}

class UsersContainer extends React.Component<UserPropsType> {

  getUsers(currentPage: number, pageSize: number) {
    this.props.setIsFetchingAC(true);
    userAPI.getUsers(currentPage, pageSize)
      .then(data => {
        this.props.setUsersAC(data.items)
        this.props.setTotalUsersCountAC(data.totalCount)
      })
      .then(() => this.props.setIsFetchingAC(false));
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
              arrToggle={this.props.arrToggle}
              pageSize={this.props.pageSize}
              currentPage={this.props.currentPage}
              totalUsersCount={this.props.totalUsersCount}
              users={this.props.users}
              onPrevPage={this.onPrevPage}
              onNextPage={this.onNextPage}
              followUser={this.props.followAC}
              unfollowUser={this.props.unfollowAC}
              toggleIsEnabled={this.props.toggleIsEnabled}
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
  arrToggle: Array<number>
}

const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    currentPage: state.usersPage.currentPage,
    totalUsersCount: state.usersPage.totalUsersCount,
    isFetching: state.usersPage.isFetching,
    arrToggle: state.usersPage.arrToggle
  }
}

export default connect(mapStateToProps,
  { followAC, unfollowAC, setCurrentPageAC, setUsersAC, setTotalUsersCountAC, setIsFetchingAC, toggleIsEnabled })(UsersContainer);