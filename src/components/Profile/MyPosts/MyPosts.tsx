import React from 'react';
import { PostsDataType } from '../../..';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MyPostPropsType = {
  postsData: PostsDataType
}

export const MyPosts = (props: MyPostPropsType) => {
  
  const postsElements = props.postsData.map(p => 
  <Post title={p.message} likesCount={p.likesCount} />);
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea placeholder='Enter message...' style={{ borderRadius: '5px'}}></textarea>
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