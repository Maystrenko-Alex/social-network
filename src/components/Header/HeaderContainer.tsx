import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { setUserDataAC } from "../../redux/auth-reducer";
import Header from "./Header";

type HeaderContainerPropsType = {
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
    return <Header />
  }
}

type MapStateToPropsType= {

}
const mapStateToProps = () => {
  return {}
}
export default connect(mapStateToProps, {setUserDataAC})(HeaderContainer)