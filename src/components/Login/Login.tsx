import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';

type FormDataType = {
  login: string
  password: string
  rememberMe: boolean

}
export const Login = () => {
  const onSubmit = (formData: FormDataType) => console.log(formData);
  return (
    <div>
      <h4>Login</h4>
      <LoginFormRedux onSubmit={onSubmit} />
    </div>
  );
};

type LoginFormPropsType = {
message: string
}

const LoginForm = (props: InjectedFormProps<FormDataType>) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} placeholder={'login'} component={'input'}/>
      </div>
      <div>
        <Field name={'password'} placeholder={'password'} component={'input'}/>
      </div>
      <div>
        <Field name={'rememberMe'}type={'checkbox'} component={'input'}/> remember me
      </div>
      <div>
        <button>Submit</button>
      </div>
    </form>
  );
}

const LoginFormRedux = reduxForm<FormDataType>({ form: 'login' })(LoginForm)