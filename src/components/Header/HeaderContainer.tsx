
import React from "react";
import { connect } from "react-redux";
import { authAPI } from "../../api/api";
import { setUserDataAC } from "../../redux/auth-reducer";
import { AppRootStateType } from "../../redux/redux-store";
import Header from "./Header";

type HeaderContainerPropsType = {
  isAuth: boolean
  login: string | null
  setUserDataAC : (data:{id: number, email: string, login: string}) => void
}
export class HeaderContainer extends React.Component <HeaderContainerPropsType>{

  componentDidMount(): void {
    authAPI.me().then(data => {
        if (data.resultCode === 0) {
          this.props.setUserDataAC(data.data)
        }
      })
  }
  render () {
    return <Header login={this.props.login} isAuth={this.props.isAuth}/>
  }
}

type MapStateToPropsType= {
login: string | null
isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType):MapStateToPropsType => {
  return {
    login: state.auth.login,
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)