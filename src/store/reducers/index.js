import auth from './auth';
import news from './news';
import userProfile from './userProfile';

const { combineReducers } = require('redux');

const rootReducer = combineReducers({
  news,
  userProfile,
  auth,
});

export default rootReducer;
