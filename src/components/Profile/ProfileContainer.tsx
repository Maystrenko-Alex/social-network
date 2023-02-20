import React from "react";
import { connect } from "react-redux";
import { Navigate, Params, useLocation, useParams } from "react-router-dom";
import { CurrentProfileType, getCurrentUser, setUserProfileAC } from "../../redux/profile-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import { Profile } from "./Profile";

export type LocationType = {
  pathname: string,
  search: string,
  hash: string,
  state: null,
  key: string
}

type ProfileContainerPropsType = {
  isAuth: boolean
  params: Params<string>,
  location: LocationType,
  setUserProfileAC: (currentProfile: CurrentProfileType) => void
  currentProfile: CurrentProfileType
  getCurrentUser: (userId: number) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

  componentDidMount(): void {
    let userId = Number(this.props.params.userId);
    if (!userId) {
      userId = 2;
    }
    this.props.getCurrentUser(userId)
  }
  render() {
    if (!this.props.isAuth) return <Navigate to={'/login'} />
    return <Profile {...this.props} />
  }
}
type WithParametrsProfileContainerPropsType = {
  isAuth: boolean
  currentProfile: CurrentProfileType
  getCurrentUser: (userId: number) => void
  setUserProfileAC: (currentProfile: CurrentProfileType) => void
}
const WithParametrsProfileContainer = (props: WithParametrsProfileContainerPropsType) => {
  let params = useParams<string>();
  let location = useLocation();

  return (
    <ProfileContainer {...props} params={params} location={location} />
  )
}
type MapStateToPropsType = {
  isAuth: boolean
  currentProfile: CurrentProfileType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth,
    currentProfile: state.profilePage.currentProfile
  }
}

export default connect(mapStateToProps, { setUserProfileAC, getCurrentUser })(WithParametrsProfileContainer)

