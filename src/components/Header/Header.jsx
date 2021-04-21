import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/auth';
import './Header.css';

export default function Header() {
  const { authorization } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();

  const onLogout = () => {
    if (authorization) {
      dispatch(logout());
    }
  };

  return (
    <header className="header">
      <div className="container header-wrapper">
        <h1>Наша новоя соц.сеть</h1>
        <Link to="/auth" onClick={onLogout}>
          {authorization ? 'Выйти' : 'Войти'}
        </Link>
      </div>
    </header>
  );
}
