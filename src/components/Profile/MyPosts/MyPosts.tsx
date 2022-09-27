import React from 'react';
import { PostType } from '../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export type MyPostPropsType = {
  posts: PostType[]
}

export const MyPosts = (props: MyPostPropsType) => {
  const postsElements = props.posts.map(p =>
    <Post id={p.id} message={p.message} likesCount={p.likesCount} />);
  const newPostElement = React.createRef<HTMLTextAreaElement>();
  const addPost = () => alert(newPostElement.current?.value)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
            ref={newPostElement}
            placeholder='Enter message...' style={{ borderRadius: '5px' }}></textarea>
        </div>
        <button onClick={addPost} >Add post</button>
      </div>
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;