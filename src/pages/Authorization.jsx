import React, { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import Speedometr from '../components/Speedometr/Speedometr';
import { login, tryLogin } from '../store/actions/auth';

export default function Authorization() {
  const [userInput, setUserInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();
  const { user, password, countAuthorization } = useSelector(({ auth }) => auth);

  const dispatch = useDispatch();

  const onLogin = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(tryLogin(countAuthorization + 1));
      if (user === userInput && password === passwordInput) {
        dispatch(login());
        history.push('/profile');
        setError('');
      } else {
        setUserInput('');
        setPasswordInput('');
        setError('Неверный логин или пароль');
      }
    },
    [countAuthorization, userInput, passwordInput, dispatch, history, password, user],
  );

  return (
    <div className="auth">
      <form className="auth-wrapper" onSubmit={onLogin}>
        <Input
          name="user"
          text={'Ваше имя'}
          type={'text'}
          onChangeHandler={setUserInput}
          value={userInput}
        />
        <Input
          name="password"
          text={'Ваш пароль'}
          type={'password'}
          onChangeHandler={setPasswordInput}
          value={passwordInput}
        />
        {error ? <span className="error">{error}</span> : null}
        <Button text="Войти" type="submit" options="btn-login" />
      </form>
      <Speedometr count={countAuthorization} />
    </div>
  );
}
