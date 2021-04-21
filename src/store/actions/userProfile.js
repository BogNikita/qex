import { CHANGE_USER_INFO } from './actionTypes';

export function changeUserInfo(payload) {
  return {
    type: CHANGE_USER_INFO,
    payload,
  };
}
