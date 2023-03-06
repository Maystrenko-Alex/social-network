import React, { HTMLInputTypeAttribute } from 'react';
import styles from './FormControls.module.css';
import {  WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

type FormsPropsType = {
  meta: WrappedFieldMetaProps,
  input: WrappedFieldInputProps,
  placeholder?: string,
  type?: HTMLInputTypeAttribute,
  autoFocus?: boolean,
  children: React.ReactNode
}

const FormControl = ({meta, input, children, ...props}:FormsPropsType) => {
  
  const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        {children}
      </div>
      <div>
      {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
}

export const Input = (props:FormsPropsType) => {
  const {input, meta, children,  ...restProps} = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}/>
    </FormControl>
  );
}
export const Textarea = (props:FormsPropsType) => {
  const {input, meta,  ...restProps} = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}/>
    </FormControl>
  );
}