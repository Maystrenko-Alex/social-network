import React from 'react';
import { PostType } from '../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export type MyPostPropsType = {
  posts: PostType[]
}

export const MyPosts = (props: MyPostPropsType) => {
  let postsElements = props.posts.map(p =>
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Enter message...' style={{ borderRadius: '5px' }}></textarea>
        </div>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;