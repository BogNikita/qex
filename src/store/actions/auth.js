import { LOGIN, LOGOUT, TRY_LOGIN } from './actionTypes';

export function login() {
  return {
    type: LOGIN,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function tryLogin(payload) {
  return {
    type: TRY_LOGIN,
    payload,
  };
}
