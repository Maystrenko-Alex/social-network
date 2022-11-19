import s from './UsersContainer.module.css'
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { AppRootStateType } from '../redux/redux-store';
import { followAC, setUsersAC, unfollowAC, UserType } from '../redux/users-reducer';

type UsersPropsType = {
  users: UserType[]
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
}

const Users = (props: UsersPropsType) => {
  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: 'https://i.pinimg.com/236x/e9/57/2a/e9572a70726980ed5445c02e1058760b.jpg', followed: false, fullName: 'Dmitry', status: 'I am a Boss', location: { city: 'Minsk', country: 'Belarus' } },
      { id: 2, photoUrl: 'https://e00-marca.uecdn.es/assets/multimedia/imagenes/2020/06/04/15912219730543.jpg', followed: false, fullName: 'Alex', status: ':)', location: { city: 'Moscow', country: 'Russia' } },
      { id: 3, photoUrl: 'https://i0.wp.com/nofiredrills.com/wp-content/uploads/2016/10/myavatar.png?fit=400%2C400&ssl=1', followed: true, fullName: 'Sveta', status: '', location: { city: 'Kiev', country: 'Ukrian' } },
      { id: 4, photoUrl: 'https://cdn-icons-png.flaticon.com/512/183/183753.png', followed: false, fullName: 'Evgen', status: '------> !', location: { city: 'Berlin', country: 'Germany' } }
    ])
  }

  return (
    <div>
      {
        props.users.map(user => {
          return (
            <div key={user.id} className={s.wrapperUser}>
              <span className={s.ava_btn}>
                <div>
                  <img className={s.imageAva} style={{ width: '70px', height: '70px' }} src={user.photoUrl} alt='img' />
                </div>
                <div className={s.userButton}>
                  {/* {<button onClick={()=>props.followUser(user.id)}>{user.followed ? 'Unfollow' : 'Follow'}</button>} */}
                  {
                    user.followed
                      ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                      : <button onClick={() => props.followUser(user.id)}>Follow</button>
                  }
                </div>
              </span>
              <span className={s.userInfo}>
                <span>
                  <div className={s.userName}>{user.fullName}</div>
                  <div>{user.status}</div>
                </span>
                <span>
                  <div>{user.location.country}</div>
                  <div>{user.location.city}</div>
                </span>
              </span>
            </div>
          )
        })}
    </div>
  );
}
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