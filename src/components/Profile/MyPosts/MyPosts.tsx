import React, { ChangeEvent } from 'react';
import { ProfilePageType } from '../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export type MyPostPropsType = {
  profilePage: ProfilePageType
  addPost: (message: string) => void
  onChangeNewTextMessage: (text:string) => void
}

export const MyPosts = (props: MyPostPropsType) => {
  const postsElements = props.profilePage.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  const addPost = () => {
    let newPostMessage: string = props.profilePage.newTextMessage;    
    if (newPostMessage.trim()) { props.addPost(newPostMessage);
    }
    props.profilePage.newTextMessage='';
  }
  const changeValueInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.onChangeNewTextMessage(e.currentTarget.value)
  }
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea 
            value={props.profilePage.newTextMessage}
            onChange={changeValueInputHandler}
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