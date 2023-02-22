import React from "react";
import { connect } from "react-redux";
import { Params, useLocation, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";
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
    
    return <Profile {...this.props} />
  }
}
type WithParametrsProfileContainerPropsType = {
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
  currentProfile: CurrentProfileType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    currentProfile: state.profilePage.currentProfile
  }
}

export default withAuthRedirect(connect(mapStateToProps, { setUserProfileAC, getCurrentUser })(WithParametrsProfileContainer))

