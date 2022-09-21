import React from 'react';
import './App.css';
import { Dialogs } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <div className="App_wrapper">
      <Header />
      <div className='wrapper'>
        <Navbar />
        <div className='content'>
          {/* <Profile /> */}
          <Dialogs />
        </div>
      </div>
    </div>
  );
}

export default App;
