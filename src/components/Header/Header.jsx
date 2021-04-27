import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../../store/actions/auth';
import './Header.css';

export default React.memo(function Header({ authorization }) {
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    if (authorization) {
      dispatch(logout());
    }
  }, [authorization, dispatch]);

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
});
