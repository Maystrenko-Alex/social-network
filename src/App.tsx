import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import { StateType } from './components/redux/state';
import Settings from './components/Settings/Settings';

type AppPropsType = {
  state: StateType
  addPost: (message: string) => void
}

function App(props: AppPropsType) {
  return (
    <div className="App_wrapper">
      <Header />
      <div className='wrapper'>
        <Navbar sidebar={props.state.sidebar} />
        <div className='content'>
          <Routes>
            <Route index element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} />} />
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} addPost={props.addPost} />} />
            <Route path='/dialogs/*' element={<Dialogs messagesPage={props.state.messagesPage} />} />
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
