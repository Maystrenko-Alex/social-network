import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export const MyPosts = () => {
  return (
    <div>
      My posts
      <div>
        <textarea placeholder='Enter message...'></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post title='Hello ;)' likesCount={0} />
        <Post title='How are you?' likesCount={12} />
        <Post title='yoo' likesCount={3} />
      </div>
    </div>
  );
};

export default MyPosts;