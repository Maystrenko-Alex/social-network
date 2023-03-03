import React from "react";
import { connect } from "react-redux";
import { Params, useLocation, useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect/withAuthRedirect";
import { CurrentProfileType, getCurrentUser, getUserStatus, setUserProfileAC, updateStatus } from "../../redux/profile-reducer";
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
  status: string
  setUserProfileAC: (currentProfile: CurrentProfileType) => void
  currentProfile: CurrentProfileType
  getCurrentUser: (userId: number) => void
  getUserStatus: (userId: number) => void
  updateStatus: (status: string) => void
}

class ProfileContainer extends React.Component<ProfileContainerPropsType>{

  componentDidMount(): void {
    let userId = Number(this.props.params.userId);
    if (!userId) {
      userId = 22229;
    }
    this.props.getCurrentUser(userId);
    this.props.getUserStatus(userId)
  }
  render() {
    return <Profile {...this.props} />
  }
}
type WithParametrsProfileContainerPropsType = {
  status: string
  currentProfile: CurrentProfileType
  getCurrentUser: (userId: number) => void
  setUserProfileAC: (currentProfile: CurrentProfileType) => void
  getUserStatus: (userId: number) => void
  updateStatus: (status: string) => void
}
const WithParametrsProfileContainer = (props: WithParametrsProfileContainerPropsType) => {
  // let params = useParams<string>();
  // let location = useLocation();

  return (
    <ProfileContainer {...props} params={useParams<string>()} location={useLocation()} />
  )
}
type MapStateToPropsType = {
  status: string
  currentProfile: CurrentProfileType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    status: state.profilePage.status,
    currentProfile: state.profilePage.currentProfile
  }
}

export default withAuthRedirect(connect(mapStateToProps, { setUserProfileAC, getCurrentUser, getUserStatus, updateStatus })(WithParametrsProfileContainer))
// export default compose<ComponentType>( withAuthRedirect, connect(mapStateToProps, { setUserProfileAC, getCurrentUser }), WithParametrsProfileContainer)(ProfileContainer)

