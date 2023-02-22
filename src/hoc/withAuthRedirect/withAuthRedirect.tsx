import React, { ComponentType } from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router-dom";
import { AppRootStateType } from "../../redux/redux-store";
type MapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export function withAuthRedirect <T extends {}> (Component: ComponentType<T>)  {

  // class RedirectComponent extends React.Component<MapStateToPropsType>{
    
  //   render() {
  //     let { isAuth, ...restProps } = this.props;
  //     if (!isAuth) return <Navigate to={'/login'} />
  //     return <Component {...restProps as T} />
  //   }
  // }
  const RedirectComponent = (props: MapStateToPropsType) => {
    let { isAuth, ...restProps } = props;
      if (!isAuth) return <Navigate to={'/login'} />
      return <Component {...restProps as T} />
  }
debugger

  let ConnectedRedirectComponent = connect(mapStateToProps, {})(RedirectComponent);
  return ConnectedRedirectComponent;
}