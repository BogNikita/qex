import { ADD_NEWS } from '../actions/actionTypes';

const initialState = [
  {
    author: 'test',
    avatar: 'https://via.placeholder.com/100',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas natus nulla fuga dicta aliquam totam excepturi molestiae possimus cupiditate ducimus suscipit a esse nihil, commodi eligendi asperiores eius officia sapiente. ',
    img: 'https://via.placeholder.com/300',
  },
  {
    author: 'test2',
    avatar: 'https://via.placeholder.com/100',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas natus nulla fuga dicta aliquam totam excepturi molestiae possimus cupiditate ducimus suscipit a esse nihil, commodi eligendi asperiores eius officia sapiente. ',
    img: 'https://via.placeholder.com/300',
  },
  {
    author: 'test3',
    avatar: 'https://via.placeholder.com/100',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas natus nulla fuga dicta aliquam totam excepturi molestiae possimus cupiditate ducimus suscipit a esse nihil, commodi eligendi asperiores eius officia sapiente. ',
    img: 'https://via.placeholder.com/300',
  },
];

export default function news(state = initialState, action) {
  switch (action.type) {
    case ADD_NEWS:
      return [action.payload, ...state];
    default:
      return state;
  }
}
