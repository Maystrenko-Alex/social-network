import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <div>
        Страница не найдена
      </div>
      <NavLink to={'/profile'} >'Перейти на главную страницу'</NavLink>
    </div>
  );
}

export default NotFound;