import React, { ChangeEvent } from 'react';
import { ActionsTypes, ProfilePageType } from '../../redux/state';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';

export type MyPostPropsType = {
  profilePage: ProfilePageType
  dispatch: (action: ActionsTypes) => void
}

export const MyPosts = (props: MyPostPropsType) => {
  const postsElements = props.profilePage.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />);
  const addPost = () => {
    let newPostMessage = props.profilePage.newTextMessage;
    if (newPostMessage.trim()) {
      // let action = {type: "ADD-POST"};
      props.dispatch({ type: "ADD-POST" });
    }
    props.dispatch({ type: 'UPDATE-NEW-TEXT-POST', text: '' })
  }
  const changeValueInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.dispatch({ type: 'UPDATE-NEW-TEXT-POST', text: e.currentTarget.value })
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