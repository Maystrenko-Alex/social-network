import React from 'react';
import s from './Message.module.css';

type MessagePropsType = {
  id: number,
  message: string
};

export const Message = (props: MessagePropsType) => {
  return (
    <div key={props.id} className={s.dialog}>{props.message}</div>
  );
};
