
import { connect } from 'react-redux';
import { AppRootStateType } from '../redux/redux-store';
import { SideBarPageType } from '../redux/sidebar-reducer';
import { Friends } from './Friends/Friends';
import s from './Navbar.module.css';
import { NavItem } from './NavItem/NavItem';

type NavbarPropsType = {
  sidebarPage: SideBarPageType;
}

export const Navbar = (props: NavbarPropsType) => {
debugger
  const navList = props.sidebarPage.navbarList.map(nl => <NavItem key={nl.id} title={nl.title} />);
  const friendsList = props.sidebarPage.bestFriends.map(b => <Friends key={b.id} name={b.name} />);

  return (
    <nav className={s.navbar}>
      {navList}
      <h2>{'Friends'}</h2>
      <div className={s.friendsBlock}>
        {friendsList}
      </div>
    </nav>
  );
};
type MapStateToPropsType = {
  sidebarPage: SideBarPageType
}
const mapStateToProps = (state: AppRootStateType): MapStateToPropsType => {
  return {
    sidebarPage: state.sidebarPage
  }
}
type mapDispatchToProps = {

}
export const NavbarContainer = connect(mapStateToProps)(Navbar);

