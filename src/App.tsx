import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { AppRootStateType } from './components/redux/redux-store';
import { ActionTypes } from './components/redux/store';
import Settings from './components/Settings/Settings';



type AppPropsType = {
  state: AppRootStateType
  dispatch: (action: ActionTypes) => void
}

export function App(props: AppPropsType) {
 

  return (
    <div className="App_wrapper">
      <Header />
      <div className='wrapper'>
        <Navbar sidebar={props.state.sidebarPage} />
        <div className='content'>
          <Routes>
            <Route index element={<Profile state={props.state} dispatch={props.dispatch} />} />
            <Route path='/profile' element={<Profile state={props.state} dispatch={props.dispatch} />} />
            <Route path='/dialogs/*' element={<DialogsContainer state={props.state} dispatch={props.dispatch} />} />
            <Route path='/news/' element={(<News />)} />
            <Route path='/music' element={<Music />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
