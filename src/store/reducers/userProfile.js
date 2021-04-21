import { CHANGE_USER_INFO } from '../actions/actionTypes';

const initialState = {
  firstName: 'Nikita',
  lastName: 'Bogachev',
  avatar: 'https://via.placeholder.com/100',
  city: 'Nyagan',
  education: 'bachalor',
  birthday: '26.11',
  hobbies: 'front-end',
  other: 'other',
};

export default function userProfile(state = initialState, action) {
  switch (action.type) {
    case CHANGE_USER_INFO:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
}
