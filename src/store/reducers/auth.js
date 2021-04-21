import { LOGIN, LOGOUT, TRY_LOGIN } from '../actions/actionTypes';

const initialState = {
  user: 'admin',
  password: 'admin',
  authorization: false,
  countAuthorization: 0,
};

export default function auth(state = initialState, action) {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        authorization: true,
      };
    case LOGOUT:
      return {
        ...state,
        authorization: false,
      };
    case TRY_LOGIN:
      return {
        ...state,
        countAuthorization: action.payload,
      };
    default:
      return state;
  }
}
