import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { SideBarPageType } from './components/redux/sidebar-reducer';
import Settings from './components/Settings/Settings';



type AppPropsType = {
}

export function App(props: AppPropsType) {
  const state = useSelector<AppRootStateType, AppRootStateType>(store => store)
  const sideBarPage = useSelector<AppRootStateType, SideBarPageType>(store => store.sideBarPage);
  // const profilePage = useSelector<AppRootStateType, ProfilePageType>(store => store.profilePage);
  // const messagesPage = useSelector<AppRootStateType, MessagesPageType>(store => store.messagesPage);
  const dispatch = useDispatch();
  debugger

  return (
    <div className="App_wrapper">
      <Header />
      <div className='wrapper'>
        <Navbar sidebar={sideBarPage} />
        <div className='content'>
          <Routes>
            <Route index element={<Profile state={state} dispatch={dispatch} />} />
            <Route path='/profile' element={<Profile state={state} dispatch={dispatch} />} />
            <Route path='/dialogs/*' element={<DialogsContainer state={state} dispatch={dispatch} />} />
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
