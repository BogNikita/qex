import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Speedometr from '../components/Speedometr/Speedometr';
import { login, tryLogin } from '../store/actions/auth';

export default function Authorization() {
  const [data, setData] = useState({
    user: '',
    password: '',
  });

  const [error, setError] = useState('');
  const history = useHistory();
  const { user, password, countAuthorization } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const onChangeHandler = (value, target) => {
    setData({
      ...data,
      [target]: value,
    });
    setError('');
  };

  const onLogin = (e) => {
    e.preventDefault();
    dispatch(tryLogin(countAuthorization + 1));
    if (user === data.user && password === data.password) {
      dispatch(login());
      history.push('/profile');
      setError('');
    } else {
      setData({
        user: '',
        password: '',
      });
      setError('Неверный логин или пароль');
    }
  };

  return (
    <div className="auth">
      <form className="auth-wrapper" onSubmit={(e) => onLogin(e)}>
        <Input
          name="user"
          text={'Ваше имя'}
          type={'text'}
          onChangeHandler={onChangeHandler}
          value={data.user}
        />
        <Input
          name="password"
          text={'Ваш пароль'}
          type={'password'}
          onChangeHandler={onChangeHandler}
          value={data.password}
        />
        {error ? <span className="error">{error}</span> : null}
        <Button text="Войти" type="submit" options="btn-login" />
      </form>
      <Speedometr count={countAuthorization} />
    </div>
  );
}
