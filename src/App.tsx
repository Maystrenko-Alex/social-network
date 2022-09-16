import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App_wrapper">
      <header className='header'>
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Logo-Logo.svg/1430px-Logo-Logo.svg.png?20150107004557'
          height='50px'
          alt='#s'>
        </img>
      </header>
      <div className='wrapper'>
        <nav className='navbar'>
          <div><a>Profile</a></div>
          <div><a>Message</a></div>
          <div><a>News</a></div>
          <div><a>Music</a></div>
          <div><a>Settings</a></div>
        </nav>
        <div className='content'>
          <div className='content_images'>
            <img src='https://st.depositphotos.com/1927453/2592/i/600/depositphotos_25922381-stock-photo-sunset-over-green-wheat-field.jpg'></img>
          </div>
          <div>
            ava+description
          </div>
          <div>
            My posts
            <div>
              New post
            </div>
            <div>
              Post 1
            </div>
            <div>
              Post 2
            </div>
            <div>
              Post 3
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
