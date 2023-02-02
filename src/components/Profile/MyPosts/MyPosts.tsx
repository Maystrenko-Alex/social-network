import React, { ChangeEvent } from 'react';
import { ProfilePageType } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';


export type MyPostPropsType = {
  profilePage: ProfilePageType
  addPost: () => void
  changeValueInput: (value: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

  const postsElements = props.profilePage.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />);

  const addPost = () => {
    // let newPostMessage = props.profilePage.newTextMessage;
    if (props.profilePage.newTextPost.trim()) {
      // let action = {type: "ADD-POST"};
      props.addPost();
    }
    props.changeValueInput('')
  }

  const changeValueInputHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    props.changeValueInput(e.currentTarget.value);
  }

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            value={props.profilePage.newTextPost}
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