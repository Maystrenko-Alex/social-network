import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import { Navbar } from './components/Navbar/Navbar';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import Settings from './components/Settings/Settings';

function App() {
  return (
    <BrowserRouter>
      <div className="App_wrapper">
        <Header />
        <div className='wrapper'>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route index element={<Profile />} />
              <Route path='/profile' element={<Profile />} />
              <Route path='/dialogs/*' element={<Dialogs />} />
              <Route path='/news/' element={(<News />)} />
              <Route path='/music' element={<Music />} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/*' element={<NotFound />} />

            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
