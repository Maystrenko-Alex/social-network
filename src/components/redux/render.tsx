
import ReactDOM from 'react-dom/client';


import { BrowserRouter } from 'react-router-dom';
import App from '../../App';
import { addPost, onChangeNewTextMessage, StateType } from './state';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
export const rerenderEntireTree = (state: StateType) => {
  root.render(
    <BrowserRouter>
      <App state={state} addPost={addPost} onChangeNewTextMessage={onChangeNewTextMessage}/>
    </BrowserRouter>);
}



