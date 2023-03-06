import React from 'react';
import { Field, InjectedFormProps, reduxForm } from 'redux-form';
import { maxLengthCreator, minLengthCreator, required } from '../../utilities/validators/validators';
import { Input } from '../common/FormsControls/FormsControls';

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

}
const maxLength50 = maxLengthCreator(50);
const minLength5 = minLengthCreator(5);

const LoginForm = (props: InjectedFormProps<FormDataType>) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={'login'} placeholder={'login'} component={Input} validate={[required, maxLength50, minLength5]}/>
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