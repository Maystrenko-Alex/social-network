import { Routes, Route } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Music from './components/Music/Music';
import { NavbarContainer } from './components/Navbar/Navbar';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import { Profile } from './components/Profile/Profile';
import Settings from './components/Settings/Settings';
import { UsersContainer } from './components/Users/UsersContainer';


type AppPropsType = {

}

export function App(props: AppPropsType) {

  return (
    <div className="App_wrapper">
      <Header />
      <div className='wrapper'>
        <NavbarContainer />
        <div className='content'>
          <Routes>
            <Route index element={<Profile />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs/*' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer />} />
            <Route path='/news/' element={<News />} />
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
