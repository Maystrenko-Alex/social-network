import axios from "axios";
import { UserType } from "../redux/users-reducer";
import s from './UsersContainer.module.css';
import default_images_user_photo_small from './../../assets/images/default_images_user_photo_small.png';

type UsersPropsType = {
  users: UserType[]
  unfollowUser: (id: number) => void
  followUser: (id: number) => void
  setUsers: (nextUsers: UserType[]) => void
}

export const Users = (props: UsersPropsType) => {
  console.log('render')
  const getUsers = () => {
    if (props.users.length === 0) {
      axios.get(' https://social-network.samuraijs.com/api/1.0/users').then(response => {
        props.setUsers(response.data.items)
      })
    }
  }
  return (
    <div>
      <button onClick={getUsers}>GET USERS</button>
      {
        props.users.map(user => {
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
                      ? <button onClick={() => props.unfollowUser(user.id)}>Unfollow</button>
                      : <button onClick={() => props.followUser(user.id)}>Follow</button>
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
  );
}