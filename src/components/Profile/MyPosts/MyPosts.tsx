import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export const MyPosts = () => {
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
        <Post title='Hello ;)' likesCount={0} />
        <Post title='How are you?' likesCount={12} />
        <Post title='yoo' likesCount={3} />
      </div>
    </div>
  );
};

export default MyPosts;