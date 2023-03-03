import { connect } from 'react-redux';
import { addPostAC, ProfilePageType } from '../../../redux/profile-reducer';
import { AppRootStateType } from '../../../redux/redux-store';
import MyPosts from './MyPosts';

// export type MyPostsContainerPropsType = {

// }
// export const MyPostsContainer = (props: MyPostsContainerPropsType) => {

//   const addPost = () =>  props.dispatch(addPostAC())
//   const changeValueInput = (value: string) => props.dispatch(updateNewTextPostAC(value))

//   return <MyPosts 
//             posts={props.state.profilePage.posts}
//             newTextMessage={props.state.profilePage.newTextPost}
//             addPost={addPost}
//             changeValueInput={changeValueInput}
//           />
// }

type MapStateToPropsType = {
  profilePage: ProfilePageType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    profilePage: state.profilePage
  }
}


export const MyPostsContainer = connect(mapStateToProps, {addPostAC})(MyPosts);

