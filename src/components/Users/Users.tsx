import React from 'react';
import { UserType } from '../../redux/users-reducer';
import User from './User';
import style from './Users.module.css';

type UsersPropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  users: UserType[]
  arrToggle: Array<number>
  onPrevPage: () => void
  onNextPage: () => void
  followUser: (userID: number) => void
  unfollowUser: (userID: number) => void
}

const Users = (props: UsersPropsType) => {

  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

  let usersList = props.users.map(user => {
    return (
      <User key={user.id} user={user}
        arrToggle={props.arrToggle}
        followUser={props.followUser}
        unfollowUser={props.unfollowUser}
      />
    )
  })

  return (
    <div className={style.wrapper}>
      <div className={style.usersContainer}>
        {usersList}
      </div>
      <div className={style.pages}>
        <button onClick={props.onPrevPage}>PrevPage</button>
        {`${props.currentPage} page from ${pagesCount}`}
        <button onClick={props.onNextPage}>NextPage</button>
      </div>
    </div>
  );
};

export default Users;