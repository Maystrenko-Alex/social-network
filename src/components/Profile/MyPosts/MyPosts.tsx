import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export const MyPosts = () => {
  let postsData = [
    {id: 1, message: 'Hello! How are you?', likesCount: 1},
    {id: 2, message: 'Its my first post ;)', likesCount: 13},
    {id: 3, message: 'yoo', likesCount: 4},
  ]
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
        <Post title={postsData[0].message} likesCount={postsData[0].likesCount} />
        <Post title={postsData[1].message} likesCount={postsData[1].likesCount} />
        <Post title={postsData[2].message} likesCount={postsData[2].likesCount} />
      </div>
    </div>
  );
};

export default MyPosts;