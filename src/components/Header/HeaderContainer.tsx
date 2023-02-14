import axios from "axios";
import React from "react";
import { connect } from "react-redux";
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
    axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true})
      .then(response => {
        console.log(response.data)
        debugger
        
        if (response.data.resultCode === 0) {
          this.props.setUserDataAC(response.data.data)
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