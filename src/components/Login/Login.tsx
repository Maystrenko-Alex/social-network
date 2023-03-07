import React from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { login } from '../../redux/auth-reducer';
import { AppRootStateType } from '../../redux/redux-store';
import { maxLengthCreator, minLengthCreator, required } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

type FormDataType = {
  email: string
  password: string
  rememberMe: boolean

}

type LoginPropsType = {
  isAuth: boolean
  login: (email: string, password: string, rememberMe: boolean) => void
}
const Login = (props: LoginPropsType) => {
  const onSubmit = (formData: FormDataType ) => props.login(formData.email, formData.password, formData.rememberMe)
  if (props.isAuth) {
    return <Navigate to={'/profile'} />
  }
  return (
    <div>
      <h4>Login</h4>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  );
};

// type LoginFormPropsType = {

// }
const maxLength50 = maxLengthCreator(50);
const minLength5 = minLengthCreator(5);

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'email'} placeholder={'email'} component={Input} validate={[required, maxLength50, minLength5]}/>
      </div>
      <div>
        <Field name={'password'} placeholder={'password'} component={Input} validate={[required, maxLength50, minLength5]}/>
      </div>
      <div>
        <Field name={'rememberMe'}type={'checkbox'} component={Input}/>rememberMe
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

const LoginFormRedux = reduxForm<FormDataType>({ form: 'login' })(LoginForm)
type MapStateToPropsType = {
  isAuth: boolean
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}
export default connect(mapStateToProps, {login})(Login)