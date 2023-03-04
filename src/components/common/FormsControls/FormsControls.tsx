import React, { HTMLInputTypeAttribute } from 'react';
import {  WrappedFieldInputProps, WrappedFieldMetaProps } from 'redux-form';

type TextAreaPropsType = {
  meta: WrappedFieldMetaProps,
  input: WrappedFieldInputProps,
  placeholder?: string,
  type?: HTMLInputTypeAttribute,
  autoFocus?: boolean
}
export const Textarea = (props:TextAreaPropsType) => {
console.log(typeof props)
  return (
    <div>
      <textarea {...props}/>
    </div>
  );
}