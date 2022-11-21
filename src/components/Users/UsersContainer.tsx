import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UserType } from '../redux/users-reducer';
import  Users  from './UsersClassComp';


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