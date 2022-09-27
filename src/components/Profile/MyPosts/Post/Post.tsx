import React from 'react';
import s from './Post.module.css';

type PostPropsType = {
  id: number,
  message: string,
  likesCount: number
}

export const Post = (props: PostPropsType) => {
  return (
    <div key={props.id} className={s.item}>
      <div>
        <img
          className={s.ava}
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpUw5Op7johHXwAKOj-jzjh87f85cuq6ve2g&usqp=CAU"
          alt=""
        />
      </div>
      <div>
        <span>{props.message}</span>
      </div>
      <div className={s.like_wrapper}>
        <img
          className={s.like}
          src="https://www.pngarts.com/files/9/YouTube-Like-Logo-PNG-Pic.png"
          alt="" />
        <span>{props.likesCount}</span>
      </div>
    </div>
  );
};
