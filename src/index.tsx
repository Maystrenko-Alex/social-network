import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

export type DialogsDataType = {
  id: number,
  name: string
}[];

export type MessageDataType = {
  id: number,
  message: string
}[]
let dialogsData: DialogsDataType = [
  { id: 1, name: 'Dimych' },
  { id: 2, name: 'Andrew' },
  { id: 3, name: 'Sveta' },
  { id: 4, name: 'Sasha' },
  { id: 5, name: 'Viktor' },
  { id: 6, name: 'Valera' }
]
let messageData: MessageDataType = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How are you?' },
  { id: 3, message: 'Yooo' },
]

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(<App dialogsData={dialogsData} messageData={messageData} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
