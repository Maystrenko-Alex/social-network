import React, { HTMLInputTypeAttribute } from 'react';
import styles from './FormControls.module.css';
import {  WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

type TextAreaPropsType = {
  meta: WrappedFieldMetaProps,
  input: WrappedFieldInputProps,
  placeholder?: string,
  type?: HTMLInputTypeAttribute,
  autoFocus?: boolean
}
export const Textarea = ({meta, input, ...props}:TextAreaPropsType) => {
console.log(meta.error)
const hasError = meta.touched && meta.error;
  return (
    <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
      <div>
        <textarea {...input} {...props}/>
      </div>
      <div>
      {hasError && <span>{meta.error}</span>}
      </div>
    </div>
  );
}