import React from "react";
import { connect } from "react-redux";
import { authMe, logout } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  authMe: () => void
  logout: () => void
}
export class HeaderContainer extends React.Component<HeaderContainerPropsType>{

  componentDidMount(): void {
    this.props.authMe();
  }
  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} logout={this.props.logout}/>
  }
}

type MapStateToPropsType = {
  login: string | null
  isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, { authMe, logout })(HeaderContainer)