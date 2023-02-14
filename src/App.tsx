import { Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { DialogsContainer } from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import { NavbarContainer } from './components/Navbar/Navbar';
import News from './components/News/News';
import NotFound from './components/NotFound/NotFound';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import WithParametrsProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';

type AppPropsType = {

}

export function App(props: AppPropsType) {

  return (
    <div className="App_wrapper">
      <HeaderContainer />
      <div className='wrapper'>
        <NavbarContainer />
        <div className='content'>
          <Routes>
            <Route index element={ <WithParametrsProfileContainer />} />
            <Route path='/profile/' element={<Navigate to={'/'} replace />} />
            <Route path='/profile/:userId' element={<WithParametrsProfileContainer />} />
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
