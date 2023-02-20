import React from "react";
import { connect } from "react-redux";
import { authMe, setUserDataAC } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  authMe: () => void
  setUserDataAC: (data: { id: number, email: string, login: string }) => void
}
export class HeaderContainer extends React.Component<HeaderContainerPropsType>{

  componentDidMount(): void {
    this.props.authMe();
  }
  render() {
    return <Header login={this.props.login} isAuth={this.props.isAuth} />
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
export default connect(mapStateToProps, { setUserDataAC, authMe })(HeaderContainer)