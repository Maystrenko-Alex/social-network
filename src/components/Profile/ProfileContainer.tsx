import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Params, useLocation, useParams } from "react-router-dom";
import { CurrentProfileType, setUserProfileAC } from "../../redux/profile-reducer";
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
}

class ProfileContainer extends React.Component <ProfileContainerPropsType>{

componentDidMount(): void {
  debugger
  axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${this.props.params.userId}`, {withCredentials: true})
    .then(response => {
     
       this.props.setUserProfileAC(response.data)
     
    })
}
  render() {
    return <Profile {...this.props} />
  }
}
type WithParametrsProfileContainerPropsType = {
  currentProfile: CurrentProfileType
  setUserProfileAC: (currentProfile: CurrentProfileType ) => void
}
const WithParametrsProfileContainer = (props: WithParametrsProfileContainerPropsType) => {
  let params = useParams();
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

export default connect(mapStateToProps, {setUserProfileAC})(WithParametrsProfileContainer)

