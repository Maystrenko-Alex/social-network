import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../redux/redux-store';
import { followAC, setCurrentPageAC, setUsersAC, unfollowAC, UserType } from '../redux/users-reducer';
import  Users  from './UsersClassComp';


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
    setUsers: (nextUsers: UserType[]) => dispatch(setUsersAC(nextUsers))
  }
}
export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);