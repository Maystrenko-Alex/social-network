import { NavLink } from "react-router-dom";
import s from "./NavItem.module.css";

type NavItemPropsType = {
  title: string
}
export const NavItem = (props: NavItemPropsType) => {
  let path = props.title === 'Messages' ? '/dialogs' : '/' + props.title.toLowerCase();
  
  return (
    <div className={s.item}>
      <NavLink to={path} className={({ isActive }) => isActive ? s.activeClass : s.notActiveClass}>
        {props.title}
      </NavLink>
    </div>
  );
}