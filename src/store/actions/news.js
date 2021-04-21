import { ADD_NEWS } from './actionTypes';

export function addNews(payload) {
  return {
    type: ADD_NEWS,
    payload,
  };
}
