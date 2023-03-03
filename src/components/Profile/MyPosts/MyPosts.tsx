import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ProfilePageType } from '../../../redux/profile-reducer';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';


type MyPostPropsType = {
  profilePage: ProfilePageType
  addPostAC: (value: string) => void
}

const MyPosts = (props: MyPostPropsType) => {

  const postsElements = props.profilePage.posts.map(p =>
    <Post key={p.id} message={p.message} likesCount={p.likesCount} />);


  const onSubmit = (values: AddPostPropsType) => props.addPostAC(values.newPostText)
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <AddPostForm onSubmit={onSubmit} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
  );
};

export default MyPosts;


type AddPostPropsType = {
  newPostText: string
}
const AddPost = (props: InjectedFormProps<AddPostPropsType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'newPostText'} component={'textarea'} placeholder='Enter message...' style={{ borderRadius: '5px' }}></Field>
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  );
}
const AddPostForm = reduxForm<AddPostPropsType>({ form: 'addNewPost' })(AddPost)