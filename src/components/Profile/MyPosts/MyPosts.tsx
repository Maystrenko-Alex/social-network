import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { ProfilePageType } from '../../../redux/profile-reducer';
import { maxLengthCreator, minLengthCreator, required } from '../../../utilities/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';
import s from './MyPosts.module.css';
import { Post } from './Post/Post';


type MyPostPropsType = {
  profilePage: ProfilePageType
  addPostAC: (value: string) => void
}

type AddPostPropsType = {
  newPostText: string
}

const maxLength30 = maxLengthCreator(30);
const minLength5 = minLengthCreator(5);

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


const AddPost = (props: InjectedFormProps<AddPostPropsType>) => {
  
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field 
          name={'newPostText'}
          component={Textarea}
          placeholder='Enter message...'
          validate={[required, maxLength30, minLength5]}/>
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
  );
}
const AddPostForm = reduxForm<AddPostPropsType>({ form: 'addNewPost' })(AddPost)